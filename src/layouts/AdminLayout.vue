<template>
    <section class="layout">
        <VHeader />
        <slot />
    </section>
</template>
<script>
    import VHeader from "@/components/VHeader/VHeader.vue"

    export default {
        components: {
            VHeader
        },
        name: 'AdminLayout',

    }
</script>