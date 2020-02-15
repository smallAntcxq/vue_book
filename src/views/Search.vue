<template>
  <div>
    <mt-header
      fixed
      title="搜索"
    />
    <div class="search-input-section">
      <input
        v-model="value"
        type="text"
        placeholder="请输入您要搜索的关键字"
        class="search-input"
      >
    </div>

    <div
      v-for="item in bannerlist"
      :key="item.keywords"
      class="keywords"
    >
      {{ item }}
    </div>
  </div>
</template>

<style lang="less" scoped>
</style>

<script>

export default {

    methods: {}
}
</script>
