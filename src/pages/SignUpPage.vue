<template>
    <div class="sign">
        <img class="logo" src="@/assets/img/logo.svg" alt="logo">
        <h3 class="title">Регистрация</h3>

        <div class="input-group">
            <VInput :title="'номер телефона'">
                <input type="text" placeholder=" ">
            </VInput>

            <VInput :title="'придумайте пароль'">
                <input type="text" placeholder=" ">
            </VInput>

        </div>

        <div class="condition">
            <VCheckbox />
            <span class="condition-text">Разрешить оператору передавать данные биржи Enigma.</span>
        </div>

        <VButton style="margin-top: 40px">зарегистрироваться</VButton>

        <router-link :to="{name: 'SignIn'}" style="margin-top: 40px">у меня уже есть аккаунт</router-link>
    </div>
</template>
<script>
import VCheckbox from '@/components/VCheckbox/VCheckbox.vue'
export default {
  components: { VCheckbox },
    name: 'VSignUp'
}
</script>
