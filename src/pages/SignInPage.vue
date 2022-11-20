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
          type="password"
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
        зарегистрироваться
      </router-link>
    </p>
  </div>
</template>
<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { API } from '@/api';

export default {
    name: 'VSignIn',

    setup() {
      const router = useRouter()
      const formControls = reactive({
        phone: '',
        password: ''
      })
      async function signIn() {
        if(formControls.phone && formControls.password) {
          try {
            const response = await API.signIn({
              username: formControls.phone,
              password: formControls.password
            })

            if(response.status === 200) {
              if(response.data.role === 'ADMIN') router.push({name: 'Admin'})
              else router.push({name: 'Home'})
            }
          } catch (e) {
            // @TODO показ ошибки пользователю
            console.log(e);
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
