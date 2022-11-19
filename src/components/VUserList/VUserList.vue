<template>
  <ul class="user-list flex-col">
    <VUserItem
      v-for="user in users"
      :key="user.id"
      :user="user"
    />
  </ul>
</template>
<script>
import VUserItem from '../VUserItem/VUserItem.vue'
export default {
    name: 'VUserList',
  components: { VUserItem },
    props: {
        users: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style src="./style.scss" lang="scss"></style>