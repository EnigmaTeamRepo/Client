<template>
  <div class="list flex-col">
    <span class="list-title">{{ title }}</span>
    <slot />
  </div>
</template>
<script>
export default {
    name: 'VList',
    props: {
        title: {
            type: String,
            required: false,
            default: ''
        },
    }
}
</script>
<style src="./style.scss" lang="scss"></style>
