<template>
  <LoadingComponent :active="isLoading"></LoadingComponent>
  <section class="bg-white text-black rounded-2xl md:rounded-[160px]">
    <div class="container">
      <h3 class="text-[32px]/[1.2] font-black mb-8 pt-20 text-center md:text-[80px]/[1.2] md:mb-20">這些超酷的應用，都來自 AI工具王</h3>
      <div class="flex items-center bg-[#f2f2f2] rounded-2xl px-10 py-5 mb-4 md:mb-6">
        <span class="material-icons text-[#919191] mr-3">
        search
        </span>
        <input type="text" name="search" id="" placeholder="輸入關鍵字搜尋"
        class="bg-transparent text-[#919191] block w-full focus:outline-none" v-model="data.search"
        @keyup.enter="getData(data)">
      </div>
      <div class="flex justify-between items-center flex-wrap mb-4 md:flex-nowrap">
        <button type="button" class="flex items-center border border-[#F2F2F2] rounded-2xl px-10 py-5 whitespace-nowrap">
          篩選
          <span class="material-icons text-[16px] ml-3">
            filter_list_alt
          </span>
        </button>
          <ul class="flex whitespace-nowrap overflow-x-auto mx-auto mt-4 order-1 md:order-0 md:mt-0 md:mx-0">
            <li v-for="(item, index) in type" :key="index">
              <a href="#" class="block px-4 py-2 cursor-pointer rounded-2xl hover:bg-[#F2F2F2]"
              :class="{ 'mr-2': !item.title.includes('行銷文案'), 'bg-[#F2F2F2]': data.type === item.value}"
              @click.prevent="data.type = item.value, getData(data)">
                {{ item.title }}
              </a>
            </li>
            <!-- <li><a href="#" class="block mr-2 px-4 py-2 cursor-pointer rounded-2xl hover:bg-[#F2F2F2]">問答</a></li>
            <li><a href="#" class="block mr-2 px-4 py-2 cursor-pointer rounded-2xl hover:bg-[#F2F2F2]">虛擬客服</a></li>
            <li><a href="#" class="block mr-2 px-4 py-2 cursor-pointer rounded-2xl hover:bg-[#F2F2F2]">生活應用</a></li>
            <li><a href="#" class="block mr-2 px-4 py-2 cursor-pointer rounded-2xl hover:bg-[#F2F2F2]">程式知識</a></li>
            <li><a href="#" class="block mr-2 px-4 py-2 cursor-pointer rounded-2xl hover:bg-[#F2F2F2]">篩選項目</a></li>
            <li><a href="#" class="block mr-2 px-4 py-2 cursor-pointer rounded-2xl hover:bg-[#F2F2F2]">翻譯助手</a></li>
            <li><a href="#" class="block px-4 py-2 cursor-pointer rounded-2xl hover:bg-[#F2F2F2]">行銷文案</a></li> -->
          </ul>
          <div class="md:order-1 relative">
            <button type="button" class="flex items-center border border-[#F2F2F2] rounded-2xl px-10 py-5 whitespace-nowrap"
            @click="isSortMenu = !isSortMenu">
              由新到舊
            <span class="material-icons text-[16px] ml-3" v-if="!isSortMenu">
              expand_more
            </span>
            <span class="material-icons text-[16px] ml-3" v-if="isSortMenu">
              expand_less
            </span>
            </button>
            <ul class="absolute top-full mt-1 right-0 bg-white rounded-2xl border border-[#F2F2F2] py-4 z-10" v-if="isSortMenu">
              <li class="mb-2">
                <a href="#" class="block px-10 py-1 hover:bg-[#F2F2F2]"
                :class="{'bg-[#F2F2F2]': data.sort === 0 }"
                @click.prevent="data.sort = 0 , getData(data)">由新到舊</a>
              </li>
              <li>
                <a href="#" class="block px-10 py-1 hover:bg-[#F2F2F2]"
                :class="{'bg-[#F2F2F2]': data.sort === 1 }"
                @click.prevent="data.sort = 1, getData(data)">由舊到新</a>
              </li>
            </ul>
          </div>
      </div>
      <div class="pt-12 md:pt-10">
        <ul class="pb-8 md:grid md:grid-cols-3 gap-6 md:pb-10">
          <li class="flex flex-col rounded-2xl overflow-hidden border border-[#F2F2F2] mb-3 md:mb-0" v-for="(item) in workData" :key="item.id">
            <div class="overflow-hidden">
              <img :src="item.imageUrl" alt="" class="w-full hover:scale-125 transition-transform duration-500">
            </div>
            <div class="px-8 py-5 mb-auto">
              <p class="font-black text-xl/[1.2] mb-3">{{ item.title }}</p>
              <p class="text-sm text-[#525252]">{{ item.description }}</p>
            </div>
            <div class="flex border-y border-[#F2F2F2] justify-between px-8 py-5">
              <span class="font-bold">{{ item.model }}</span>
              <span>{{ item.discordId }}</span>
            </div>
            <div class="flex border-y border-[#F2F2F2] justify-between px-8 py-5">
              <span>#{{ item.type }}</span>
              <a :href="item.link" class="material-icons">
                share
              </a>
            </div>
          </li>
        </ul>
        <PageComponent :pages ="pagesData" :problem-data ="data" @changePage="getData"></PageComponent>
      </div>
    </div>
  </section>
</template>

<script setup>
import statusStore from '@/stores/statusStore.js';
import PageComponent from '@/components/PageComponent.vue';
import axios from 'axios';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
const status = statusStore();
const { isLoading } = storeToRefs(status);
const data = ref({
  type: '',
  sort: 0,
  page: 1,
  search: '',
});
const isSortMenu = ref(false);
const type = [
  {
    title: '全部',
    value: ''
  },
  {
    title: '問答',
    value: '問答'
  },
  {
    title: '虛擬客服',
    value: '虛擬客服'
  },
  {
    title: '生活應用',
    value: '生活應用'
  },
  {
    title: '程式知識',
    value: '程式知識'
  },
  {
    title: '篩選項目',
    value: '篩選項目'
  },
  {
    title: '翻譯助手',
    value: '翻譯助手'
  },
  {
    title: '行銷文案',
    value: '行銷文案'
  },
]
// 取得產品
const apiPath = 'https://2023-engineer-camp.zeabur.app';
const pagesData = ref({});
const workData = ref({});
const getData = async ({ type, sort, page, search}) => {
  try {
    isLoading.value = true;
    const apiUrl = `${apiPath}/api/v1/works?sort=${sort}&page=${page}&${
    type ? `type=${type}&` : ''
    }${search ? `search=${search}` : ''}`;
    const { data } = await axios.get(apiUrl);
    isLoading.value = false;
    workData.value = data.ai_works.data;
    pagesData.value = data.ai_works.page;
  } catch (error) {
    throw new Error(error);
  }
}
getData(data.value);
</script>