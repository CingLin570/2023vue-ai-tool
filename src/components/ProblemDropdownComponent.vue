<template>
  <li class="border rounded-2xl hover:ring-1 hover:ring-white">
    <button type="button" class="flex w-full rounded-2xl p-5 text-[20px]/[1.2] font-black"
    @click="isDropdown = !isDropdown">
      <span class="material-icons mr-5" v-if="isDropdown">add</span>
      <span class="material-icons mr-5" v-if="!isDropdown">remove</span>
      {{ props.dropdownId.question }}
    </button>
    <div class="pl-16 pr-5 py-5" v-if="!isDropdown">
      <p>
        {{ props.dropdownId.answer }}
      </p>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue';
  const props = defineProps({
    dropdownId: {
      type: Object,
      required: true,
    }
  });
  const isDropdown = ref(true);
</script>