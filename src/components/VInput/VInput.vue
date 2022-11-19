<template>
    <div class="input">
        <slot />
        <label class="label" :for="id">
            {{ title }}
        </label>
        <div class="error" v-if="error">
            {{ error }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'VInput',
    props: {
            title: {
                type: String,
                required: false,
                default: '',
            },
            id: {
                type: String,
                required: false,
                default: '',
            },
            error: {
                type: String,
                required: false,
                default: '',
            },
        },
}
</script>
<style src="./style.scss" lang="scss"></style>