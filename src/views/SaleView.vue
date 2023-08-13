<template>
  <NavbarComponent></NavbarComponent>
  <section class="text-white">
    <div class="container">
      <h3 class="text-[48px]/[1.2] font-black mb-16 mt-10 md:text-[120px]/[1.2] md:md-20">
      用多少，<br>
      付多少。
    </h3>
    <p class="text-[28px]/[1.2] font-black mb-[258px] w-3/4 ml-auto md:text-[48px]/[1.2] md:w-1/2 md:mb-[238px]">我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。</p>
    <ul class="flex justify-end overflow-hidden mb-[120px]">
      <li><img src="/src/assets/deco.png" class="animate-[slideUp_3s_ease-in_infinite]" alt=""></li>
      <li><img src="/src/assets/deco.png" class="animate-[slideUp_3s_0.5s_ease-in_infinite]" alt=""></li>
      <li><img src="/src/assets/deco.png" class="animate-[slideUp_3s_1s_ease-in_infinite]" alt=""></li>
    </ul>
    </div>
  </section>
  <section class="text-white mb-[120px]">
      <div class="container">
        <h3 class="text-[20px]/[1.2] mb-6 font-black md:text-[32px]/[1.2] md:mb-20">定價</h3>
      <ul class="md:grid md:grid-cols-2 gap-6">
        <li class="flex flex-col border rounded-2xl mb-3 md:mb-0">
          <div class="p-5 h-full">
            <p class="text-[32px]/[1.2] mb-3 font-black">琪琪</p>
            <ul class="list-disc pl-6">
              <li>初級</li>
              <li>速度最快</li>
            </ul>
          </div>
          <div class="flex justify-between p-5 border-t">
            <p>NT$5／<span class="text-[#919191]">1k tokens</span></p>
            <a href="#" class="flex items-center">開始使用
              <span class="material-icons text-[16px]">
                north_east
              </span>
            </a>
          </div>
        </li>
        <li class="flex flex-col border rounded-2xl mb-3 md:mb-0">
          <div class="p-5 h-full">
            <p class="text-[32px]/[1.2] mb-3 font-black">昊昊</p>
            <ul class="list-disc pl-6">
              <li>中級</li>
            </ul>
          </div>
          <div class="flex justify-between p-5 border-t">
            <p>NT$5／<span class="text-[#919191]">1k tokens</span></p>
            <a href="#" class="flex items-center">開始使用
              <span class="material-icons text-[16px]">
                north_east
              </span>
            </a>
          </div>
        </li>
        <li class="flex flex-col border rounded-2xl mb-3 md:mb-0">
          <div class="p-5 h-full">
            <p class="text-[32px]/[1.2] mb-3 font-black">卡卡</p>
            <ul class="list-disc pl-6">
              <li>高級</li>
            </ul>
          </div>
          <div class="flex justify-between p-5 border-t">
            <p>NT$5／<span class="text-[#919191]">1k tokens</span></p>
            <a href="#" class="flex items-center">開始使用
              <span class="material-icons text-[16px]">
                north_east
              </span>
            </a>
          </div>
        </li>
        <li class="flex flex-col border rounded-2xl">
          <div class="p-5 h-full">
            <p class="text-[32px]/[1.2] mb-3 font-black">杰杰</p>
            <ul class="list-disc pl-6">
              <li>最高級</li>
              <li>資訊最完善</li>
            </ul>
          </div>
          <div class="flex justify-between p-5 border-t">
            <p>NT$5／<span class="text-[#919191]">1k tokens</span></p>
            <a href="#" class="flex items-center">開始使用
              <span class="material-icons text-[16px]">
                north_east
              </span>
            </a>
          </div>
        </li>
      </ul>
      </div>
    </section>
    <section class="text-white mb-[120px]">
      <div class="container">
        <div class="md:flex">
          <h3 class="mb-12 text-xl/[1.2] font-black md:w-1/3 md:text-[32px]/[1.2]">使用規範</h3>
          <ul class="md:w-2/3">
            <li class="border-b mb-6">
              <h4 class="mb-6 font-black text-[32px]/[1.2] md:text-[48px]/[1.2]">守法</h4>
              <p class="pb-10 md:text-[32px]/[1.2]">請遵守相關的法規和政策，不得進行任何違法違規的活動。</p>
            </li>
            <li class="border-b mb-6">
              <h4 class="mb-6 font-black text-[32px]/[1.2] md:text-[48px]/[1.2]">資訊安全</h4>
              <p class="pb-10 md:text-[32px]/[1.2]">請務必保護好自己的帳號和密碼，不得將其透露給他人。</p>
            </li>
            <li class="border-b mb-6">
              <h4 class="mb-6 font-black text-[32px]/[1.2] md:text-[48px]/[1.2]">守密</h4>
              <p class="pb-10 md:text-[32px]/[1.2]">需對使用過程中產生的數據負責，不得擅自泄露數據。</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  <SearchCardComponent></SearchCardComponent>
  <section class="text-white my-[120px]">
      <div class="container">
        <div class="md:flex md:-mx-3">
          <h3 class="text-[20px]/[1.2] font-black mb-6 md:w-1/3 md:p-3 md:mb-0">常見問題</h3>
          <ul class="md:px-3 md:w-2/3">
            <ProblemDropdownComponent v-for="(item, index) in qaPairs" :key="item.id"
            :dropdown-id="item" :class="index !== 0 ? 'mt-[16px]' : ''">
            </ProblemDropdownComponent>
          </ul>
        </div>
      </div>
    </section>
  <FooterComponent></FooterComponent>
</template>

<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import SearchCardComponent from '@/components/SearchCardComponent.vue';
import ProblemDropdownComponent from '@/components/ProblemDropdownComponent.vue';
import { ref } from 'vue';

const qaPairs = ref([
  {
    id: "first",
    question: "如何選擇適合的AI模型？",
    answer:
      "選擇適合的 AI 模型需要考慮您的應用場景、需要解決的問題、可用的資源以及預算等因素。可以透過對比不同模型的性能、準確率、速度等指標，以及與其他用戶的評價和反饋，來選擇最適合的模型。",
  },
  {
    id: "second",
    question: "租用模型的費用是如何計算的？",
    answer:
      "租用模型的費用通常會根據模型的性能和使用時間等因素進行計算。具體而言，模型的性能可以根據其精度、速度、佔用資源等指標來評估；而使用時間可以根據租用時間的長短來計算，通常會按小時、天或月來計算。綜合考慮這些因素，系統會自動計算出對應的租用費用。",
  },
  {
    id: "third",
    question: "如何進行付款？",
    answer:
      "付款方式可以透過網站上提供的線上支付平台進行。具體而言，您可以選擇使用信用卡、銀行轉帳、電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，系統會自動計算出對應的租用費用和支付金額，然後您可以選擇適合的支付方式進行支付，完成支付後，系統會自動向您提供相應的服務。",
  },
  {
    id: "forth",
    question: "租用模型的期限是多久？",
    answer:
      "租用模型的期限可以根據您的需求進行設置，通常可以選擇幾個小時、幾天或幾個月等不同的時間段。",
  },
  {
    id: "fifth",
    question: "如果在使用過程中遇到問題，應該怎麼處理？",
    answer:
      "如果在使用過程中遇到問題，您可以聯繫客服或技術支持人員進行諮詢或報告問題。您也可以透過網站上的幫助中心或社群論壇尋找相關解決方案和回答。",
  },
]);


</script>
