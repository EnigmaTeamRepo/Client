<template>
  <div class="create-account">
    <button
      class="base-button base-button--accent"
      style="margin-bottom: 24px"
    >
      назад
    </button>
    <h2>Создать счет</h2>
    <p>У пользователя может быть только один счет в одной валюте</p>

    <div class="create-account-group flex-col">
      <div class="title">
        Выберите валюту
      </div>
      <ul class="flex-col">
        <li
          class="accout-type"
          :class="{'selected': selectedAccount === 840}"
          @click="selectAccount(840)"
        >
          <img
            src="~@/assets/img/dollar-icon.svg"
            alt="currency-icon"
          >
          Доллар
        </li>

        <li
          class="accout-type"
          :class="{'selected': selectedAccount === 978}"
          @click="selectAccount(978)"
        >
          <img
            src="~@/assets/img/euro-icon.svg"
            alt="currency-icon"
          >
          Евро
        </li>
      </ul>
    </div>

    <VButton @click="createAccount">создать счет</VButton>
    <p class="condition">
      Нажимая на кнопку “создать счет” вы соглашаетесь с 
      <a
        href="#"
        target="_blank"
      >условиями оферты</a> 
    </p>
  </div>
</template>
<script>
import VButton from '@/components/VButton/VButton.vue';
import { ref } from '@vue/reactivity';

export default {
  name: "CreateAccountPage",
  components: { VButton },
  setup() {
    const selectedAccount = ref(840)

    function selectAccount(code) {
      selectedAccount.value = code
    }

    function createAccount() {
      alert(selectedAccount.value)
    }
    return {
      selectedAccount,
      selectAccount,
      createAccount
    }
  }
}
</script>
<style src="@/scss/createAccount.scss" lang="scss"></style>