<template>
  <header class="header">
    <img
      v-if="isHomePage"
      width="76"
      height="17"
      src="@/assets/img/logo.svg"
      alt="logo"
    >

    <button class="base-button" v-if="isHomePage">
      выйти
    </button>

    <button class="base-button" v-if="!isHomePage">назад</button>
  </header>
</template>
<script>
export default {
    name: 'VHeader',
    computed: {
      isHomePage() {
        return this.$route.name === 'Home'
      }
    }
}
</script>
<style src="./style.scss" lang="scss"></style>