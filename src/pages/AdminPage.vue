<template>
    <div class="admin">
        <h1 class="title flex-col">
            <span>Привет Админ!</span>
            <span>продуктивной работы 🤖❤️💸</span>
        </h1>

        <div class="tabs">
            <button class="base-button" :class="{'base-button--active': currentUsers === 0}" @click="changeList(0)">заявки</button>
            <button class="base-button" :class="{'base-button--active': currentUsers === 1}" @click="changeList(1)">подтвержденные</button>
        </div>

        <VUserList v-if="currentUsers === 0" :users="newUsers" />

        <VUserList v-if="currentUsers === 1" :users="existedUsers" />
    </div>
</template>
<script>
    import VUserList from '@/components/VUserList/VUserList.vue'
    export default {
        components: {
            VUserList
        },
        name: 'AdminPage',
        data() {
            return {
                currentUsers: 0,
                newUsers: [{
                    "id": 1,
                    "login": "admin",
                    "role": "ADMIN",
                    "name": "Никита",
                    "sex": 'male',
                    "passport": "4325545223",
                    "passport_issued_by": "Паспорт выдан: отделением УФМС России по Тюменской обл. в гор. Тюмени",
                    "born_place": "Место рождения: гор. Пенза Пенсезнского Р-НА",
                    "patronymic": "Константинович",
                    "bills": [],
                    "enabled": true,
                    "username": "admin",
                    "user_status": "NEW",
                    "last_name": "Кухарь",
                    "birth_date": '2022-11-19T15:02:45.400+00:00',
                    "registration_date": '2022-11-19T15:02:45.400+00:00'
                }],
                existedUsers: [{
                    "id": 1,
                    "login": "admin",
                    "role": "ADMIN",
                    "name": "Никита",
                    "sex": 'male',
                    "passport": "4325545223",
                    "passport_issued_by": "Паспорт выдан: отделением УФМС России по Тюменской обл. в гор. Тюмени",
                    "born_place": "Место рождения: гор. Пенза Пенсезнского Р-НА",
                    "patronymic": "Константинович",
                    "bills": [],
                    "enabled": true,
                    "username": "admin",
                    "user_status": "ACTIVE",
                    "last_name": "Кухарь",
                    "birth_date": '2022-11-19T15:02:45.400+00:00',
                    "registration_date": '2022-11-19T15:02:45.400+00:00'
                }, ]
            }
        },
        methods: {
            changeList(value) {
                this.currentUsers = value
            }
        }
    }
</script>
<style src="@/scss/admin.scss" lang="scss"></style>