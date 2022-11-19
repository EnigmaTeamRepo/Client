<template>
  <section class="layout layout--home">
    <VHeader />
    <slot />
    <VNavBar />
  </section>
</template>
<script>
    import VHeader from "@/components/VHeader/VHeader.vue"
import VNavBar from '@/components/VNavBar/VNavBar.vue'

    export default {
        name: 'AdminLayout',
        components: {
            VHeader,
            VNavBar
        },

    }
</script>