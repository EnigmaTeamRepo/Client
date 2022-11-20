<template>
  <div class="sign">
    <img
      class="logo"
      src="@/assets/img/logo.svg"
      alt="logo"
    >
    <h3 class="title">
      Вход в личный кабинет
    </h3>

    <div class="input-group">
      <VInput :title="'номер телефона'">
        <input
          v-model="formControls.phone"
          type="text"
          placeholder=" "
        >
      </VInput>

      <VInput :title="'пароль'">
        <input
          v-model="formControls.password"

          type="text"
          placeholder=" "
        >
      </VInput>
    </div>

    <VButton
      style="margin-top: 40px"
      @click="signIn"
    >
      войти
    </VButton>
    <p
      class="flex-col items-center"
      style="margin-top: 40px"
    >
      <span>нет аккаунта? </span>
      <router-link :to="{name: 'SignUp'}">
        у меня уже есть аккаунт
      </router-link>
    </p>
  </div>
</template>
<script>
import { reactive } from 'vue';
import useUserStore from '@/stores/user'
import { useRouter } from 'vue-router';

export default {
    name: 'VSignIn',

    setup() {
      const store = useUserStore()
      const router = useRouter()
      const formControls = reactive({
        phone: '',
        password: ''
      })
      async function signIn() {
        if(formControls.phone && formControls.password) {
          const result = await store.getUser({
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
                    "balance": 0,
                    "enabled": true,
                    "username": "admin",
                    "user_status": "ACTIVE",
                    "last_name": "Кухарь",
                    "birth_date": '2022-11-19T15:02:45.400+00:00',
                    "registration_date": '2022-11-19T15:02:45.400+00:00'
          })

          if(result) {
            router.push({name: 'Home'})
          }
        }
      }

      return {
        signIn,
        formControls
      }
    }
}
</script>
