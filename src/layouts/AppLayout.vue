<template>
  <component :is="layout">
    <slot />
  </component>
</template>
<script>
    export default {
        name: 'AppLayout',
        computed: {
            layout() {
                return this.$route.meta.layoutComponent
            },
        },
    }
</script>
