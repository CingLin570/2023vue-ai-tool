<template>
  <NavbarComponent></NavbarComponent>
  <header class=" text-white pt-10 pb-[180px]">
    <div class="container">
      <p class="text-5xl/[1.2] font-black mb-10 md:text-9xl/[1.2]">
      透過<br>AI 工具王的<br>強大模型<br>讓您的業務<br>更聰明
      </p>
      <button type="button" class="border py-5 font-black px-10 mb-[180px] rounded-2xl hover:bg-white hover:text-black focus:ring-2
      focus:ring-white focus:bg-white focus:text-black">
        開始使用
      </button>
      <ul class="flex justify-end overflow-hidden">
        <li><img src="@/assets/deco.png" class="animate-[slideUp_3s_ease-in_infinite]" alt=""></li>
        <li><img src="@/assets/deco.png" class="animate-[slideUp_3s_0.5s_ease-in_infinite]" alt=""></li>
        <li><img src="@/assets/deco.png" class="animate-[slideUp_3s_1s_ease-in_infinite]" alt=""></li>
      </ul>
    </div>
  </header>
  <section class=" text-white pb-[120px] :md:pb-[160px]">
    <div class="container">
      <div class="mb-12 md:mb-20 md:flex md:-mx-3">
        <h3 class="mb-6 text-xl/[1.2] font-black md:w-1/3 md:px-3">我們的服務</h3>
        <p class="text-[32px]/[1.2] font-black md:w-2/3 md:px-3">我們相信透過 AI 技術，
          包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
        </p>
      </div>
      <ul class="md:flex md:-mx-3">
        <li class="mb-3 md:w-1/3 md:px-3">
          <div class="border rounded-2xl px-5 py-10">
            <span class="material-icons text-[80px] mb-5">
            flash_on
            </span>
            <h4 class="text-[32px]/[1.2] font-black mb-5">快速</h4>
            <p>我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。</p>
          </div>
        </li>
        <li class="mb-3 md:w-1/3 md:px-3">
          <div class="border rounded-2xl px-5 py-10">
            <span class="material-icons text-[80px] mb-5">
              auto_awesome
            </span>
            <h4 class="text-[32px]/[1.2] font-black mb-5">靈活</h4>
            <p>我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。</p>
          </div>
        </li>
        <li class="md:w-1/3 md:px-3">
          <div class="border rounded-2xl px-5 py-10">
            <span class="material-icons text-[80px] mb-5">
              add_to_photos
            </span>
            <h4 class="text-[32px]/[1.2] font-black mb-5">擴充</h4>
            <p>我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class=" text-white pb-12">
    <div class="container">
      <h3 class="text-xl/[1.2] font-black mb-3 md:text-[32px]/[1.2] md:mb-20">來自合作夥伴</h3>
      <ul class="flex overflow-x-auto justify-center relative after:content-[''] after:absolute after:h-full after:w-full
      after:bg-gradient-to-r after:from-black after:from-4%  after:via-transparent after:via-50% after:to-black after:to-96%">
        <li><img src="@/assets/enterprise.png" alt="" class="w-[100px] max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise1.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise2.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise3.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise4.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise5.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise6.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise1.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
      </ul>
      <ul class="flex overflow-x-auto justify-center relative after:content-[''] after:absolute after:h-full after:w-full
      after:bg-gradient-to-r after:from-black after:from-4%  after:via-transparent after:via-50% after:to-black after:to-96%">
        <li><img src="@/assets/enterprise7.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise8.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise9.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise5.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise11.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise12.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
        <li><img src="@/assets/enterprise7.png" alt="" class="w-[160px] h-10 max-w-none object-cover"></li>
      </ul>
    </div>
  </section>
  <section class="text-white pb-[120px]">
    <div class="container">
      <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :breakpoints="swiperOptions.breakpoints"
      class="cursor-pointer md:cursor-default"
    >
      <swiper-slide class="pb-10 md:pb-0 ">
        <div class="flex flex-col bg-[#121212] p-5 rounded-2xl h-full">
          <div class="mb-5">
            <span class="material-icons">
              star
            </span>
            <span class="material-icons">
              star
            </span>
            <span class="material-icons">
              star
            </span>
            <span class="material-icons">
              star
            </span>
            <span class="material-icons">
              star
            </span>
          </div>
          <p class="mb-auto">非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。
            對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，
            AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！
          </p>
          <div class="flex mt-5">
            <img src="@/assets/avatar3.png" alt="" class="mr-4">
            <div>
              <p>陳小姐</p>
              <p>ABC科技有限公司</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="pb-10 md:pb-0">
        <div class="flex flex-col bg-[#121212] p-5 rounded-2xl h-full">
          <div class="mb-5">
            <span class="material-icons">
              star
            </span>
            <span class="material-icons">
              star
            </span>
            <span class="material-icons">
              star
            </span>
            <span class="material-icons">
              star
            </span>
            <span class="material-icons">
              star
            </span>
          </div>
          <p class="mb-auto">作為一家醫療器材公司，我們非常關注人工智能技術的應用，
            而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，
            這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！
          </p>
          <div class="flex mt-5">
            <img src="@/assets/avatar1.png" alt="" class="mr-4">
            <div>
              <p>劉小姐</p>
              <p>XYZ 醫療器材有限公司</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="pb-10 md:pb-0">
        <div class="flex flex-col bg-[#121212] p-5 rounded-2xl h-full">
          <div class="mb-5">
            <span class="material-icons">
              star
            </span>
            <span class="material-icons">
              star
            </span>
            <span class="material-icons">
              star
            </span>
            <span class="material-icons">
              star
            </span>
            <span class="material-icons">
              star
            </span>
          </div>
          <p class="mb-auto">我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，
            而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型
            進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，
            提高客戶滿意度。非常感謝 AI工具王 團隊的支持！
          </p>
          <div class="flex mt-5">
            <img src="@/assets/avatar2.png" alt="" class="mr-4">
            <div>
              <p>黃先生</p>
              <p>EFG 銀行</p>
            </div>
          </div>
        </div>
      </swiper-slide>
  </swiper>
    </div>
  </section>
  <SearchCardComponent></SearchCardComponent>
  <section class="my-[160px] text-white">
    <div class="container">
      <div class="flex flex-col justify-center items-center">
        <h3 class="font-black text-[32px]/[1.2] mb-8 md:text-5xl/[1.2]">現在就來建立屬於你的服務吧</h3>
        <button type="button" class="text-xl/[1.2] font-black px-10 py-5 border rounded-2xl hover:bg-white hover:text-black focus:ring-2
      focus:ring-white focus:bg-white focus:text-black">
          開始使用
          <span class="material-icons text-[15px]">
            north_east
          </span>
        </button>
      </div>
    </div>
  </section>
  <FooterComponent></FooterComponent>
</template>

<script setup>
  import NavbarComponent from '@/components/NavbarComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import SearchCardComponent from '@/components/SearchCardComponent.vue';
  // import Swiper core and required modules
  import { Navigation, Pagination } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  const swiperOptions={
    breakpoints: {
    992: {
      slidesPerView: 3
    },
    375: {
      slidesPerView: 1
    }
    }
  }
  const modules = [Pagination, Navigation];
</script>
