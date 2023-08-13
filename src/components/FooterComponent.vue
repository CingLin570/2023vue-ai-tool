<template>
  <footer class="text-white">
    <div class="container">
      <div class="py-10 border-t border-b border-white md:flex justify-between">
        <a href="#" class="block mb-10 overflow-hidden whitespace-nowrap indent-[101%] bg-no-repeat bg-contain h-[40px] w-[244.99px] bg-[url('/src/assets/logo.png')]
        md:w-[250px] md:h-[40px] order-1">AI 工具王
        </a>
        <ul class="text-[48px]/[1.2] font-black md:text-[80px]/[1.2]">
          <li>
            <router-link to="/" class="hover:text-blue-500">首頁</router-link>
          </li>
          <li>
            <router-link to="/sale" class="hover:text-blue-500">定價</router-link>
          </li>
        </ul>
      </div>
      <div class="flex flex-wrap my-5">
        <p class="mr-auto md:mr-[100px]">AI工具王 © 2023</p>
        <ul class="flex order-1 w-full mt-6 md:order-none md:w-auto md:mt-0 md:mr-auto">
          <li class="mr-5">Facebook</li>
          <li class="mr-5">Twitter</li>
          <li>Instagram</li>
        </ul>
        <a href="#" class="flex items-center">
          Back to top
          <span class="material-icons text-[15px] ml-3">
          arrow_upward
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>