<template>
  <nav class="bg-black text-white relative">
    <div class="container">
      <div class="flex justify-between py-[28px] border-b">
        <a href="#" class="overflow-hidden whitespace-nowrap indent-[101%] bg-no-repeat bg-contain h-[24px] w-[147px] bg-[url('/src/assets/logo.png')]
        md:w-[250px] md:h-[40px]">AI 工具王</a>
        <ul class="hidden md:flex md:items-center">
          <li class="md:mr-5"><router-link to="/">首頁</router-link></li>
          <li><router-link to="/sale">定價</router-link></li>
        </ul>
        <button type="button" class="material-icons navbar-icons-open md:hidden" v-if="isMenuOpen" @click.prevent="isMenuOpen = false">
            menu
        </button>
        <button type="button" class="material-icons navbar-icons-open md:hidden" v-if="!isMenuOpen"  @click.prevent="isMenuOpen = true">
            close
        </button>
        <div class="absolute top-[81px] left-0 w-full bg-black z-10 " v-if="!isMenuOpen">
          <div class="container">
            <ul class="flex flex-col justify-center items-center py-[192px] border-b">
            <li class="">
              <router-link to="/" class="text-[80px]/[1.2] font-black hover:text-blue-500">首頁</router-link>
            </li>
            <li>
              <router-link to="/sale" class="text-[80px]/[1.2] font-black hover:text-blue-500">定價</router-link>
            </li>
          </ul>
          <div class="py-5">
            <p class="mb-3">AI工具王 © 2023</p>
            <ul class="flex">
              <li class="mr-5">Facebook</li>
              <li class="mr-5">Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref('false');
</script>