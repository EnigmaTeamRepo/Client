<template>
    <ul class="user-list flex-col">
        <VUserItem v-for="user in users" :user="user" :key="user.id"/>
    </ul>
</template>
<script>
import VUserItem from '../VUserItem/VUserItem.vue'
export default {
  components: { VUserItem },
    name: 'VUserList',
    props: {
        users: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style src="./style.scss" lang="scss"></style>