<template>
  <label class="checkbox">
    <input
      class="visually-hidden"
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
      @change="$emit('change', $event)"
    >
    <span class="checkbox-body" />
  </label>
</template>
<script>
export default {
    name: 'VCheckbox',
    props: {
            checked: {
                type: Boolean,
                required: false,
                default: false,
            },
            disabled: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
        emits: ['change'],
}
</script>
<style src="./style.scss" lang="scss"></style>
