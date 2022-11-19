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
          type="text"
          placeholder=" "
        >
      </VInput>

      <VInput :title="'пароль'">
        <input
          type="text"
          placeholder=" "
        >
      </VInput>
    </div>

    <VButton style="margin-top: 40px">
      войти
    </VButton>
    <p
      class="flex-col items-center"
      style="margin-top: 40px"
    >
      <span>нет аккаунта? </span>
      <router-link :to="{name: 'SignIn'}">
        у меня уже есть аккаунт
      </router-link>
    </p>
  </div>
</template>
<script>
export default {
    name: 'VSignIn'
}
</script>
