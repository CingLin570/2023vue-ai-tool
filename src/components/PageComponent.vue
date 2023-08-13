<template>
  <ul class="flex justify-end pb-10 md:pb-[160px]">
    <li v-for="(page, index) in props.pages.total_pages" :key="index">
      <a href="#" class="block px-[19.56px] py-3 mr-1 rounded-2xl hover:text-white hover:bg-black"
      :class="{'text-white bg-black': page == props.pages.current_page}"
      @click.prevent="changePage(page)">
        {{ page }}
      </a>
    </li>
    <li>
      <button type="button" class="material-icons
      block px-3 py-3 rounded-2xl hover:text-white hover:bg-black"
      :class="{'opacity-30 pointer-events-none': !props.pages.has_next}"
      :disabled="!props.pages.has_next">
        chevron_right
      </button>
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    pages: {
      type: Object,
      required: true,
    },
    problemData: {
      type: Object,
      required: true,
    }
  });
  const emit = defineEmits(['changePage']);
  const changePage = (page) => {
    const pageData = {
      type: props.problemData.type,
      sort: props.problemData.sort,
      page: page,
      search: props.problemData.search,
    }
    emit('changePage', pageData);
  }
</script>