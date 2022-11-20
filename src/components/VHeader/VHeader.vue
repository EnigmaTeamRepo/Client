<template>
  <header class="header">
    <img
      width="76"
      height="17"
      src="@/assets/img/logo.svg"
      alt="logo"
    >

    <button class="base-button" @click="logout">
      выйти
    </button>
  </header>
</template>
<script>
import useUserStore from '@/stores/user'
import { useRouter } from 'vue-router'
export default {
    name: 'VHeader',
    setup() {
      const store = useUserStore()
      const router = useRouter()
      function logout() {
        store.getUser(null)
        router.push({name: 'SignIn'})
      }

      return {
        logout
      }
    }
}
</script>
<style src="./style.scss" lang="scss"></style>