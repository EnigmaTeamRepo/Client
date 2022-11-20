<template lang="">
  <div class="pay-in-out">
    <div class="tabs">
      <button
        class="base-button"
        :class="{'base-button--active': currentState === 0}"
        @click="changeState(0)"
      >
        пополнение
      </button>
      <button
        class="base-button"
        :class="{'base-button--active': currentState === 1}"
        @click="changeState(1)"
      >
        вывод средств
      </button>
    </div>

    <div class="account-preview">
      <img
        src="~@/assets/img/rub-icon.svg"
        alt="currency-icon"
      >
      {{ name }}

      <span class="value"> {{ balance.toLocaleString() }} {{ symbol }}</span>
    </div>

    <VInput
      :title="'Введите сумму, руб'"
      style="margin-top: 40px"
    >
      <input
        v-model="inputValue"
        type="text"
        placeholder=" "
        @input="onInputHandler"
      >
    </VInput>

    <VButton
      style="margin-top: 43px"
      @click="onSubmitHandler"
    >
      {{ buttonText }}
    </VButton>
  </div>
</template>
<script>
import { computed, reactive, ref } from '@vue/reactivity'
import {maskAmount} from '@/helpers/maskAmount'
import {normalizeNumber} from '@/helpers/utils'
import { crurrencyName, crurrencySymbol } from '@/helpers/currency'

export default {
  name: 'PayInOutPage',
  setup() {
    const currentState = ref(0)
    const balance = ref(55000)
    const inputValue = ref('')
    // Test data
    const account = reactive(   {
      "id": 1,
      "currency": "643",
      "bill_number": "4c217771-684a-4083-8ac2-cece9a560b0f",
      "bill_amount": 0
      })

    const symbol = crurrencySymbol[account.currency]
    const name = crurrencyName[account.currency]
  
    const buttonText = computed(() => {
      return currentState.value ? 'вывести - руб.' : 'пополнить счет'
    })
    
    function changeState(value) {
      currentState.value = value
    }

    function onInputHandler(event) {
      inputValue.value = maskAmount(event.target.value)
    }

    function onSubmitHandler() {
      const amount = normalizeNumber(inputValue.value)
      console.log(amount);
      
      if(amount > 0) {
        console.log(currentState.value)
        
        if(currentState.value) alert('Выведено ' + amount)
        else alert('Пополняем на сумму ' + amount)
      }
    }

    return {
      currentState,
      buttonText,
      symbol,
      name,
      balance,
      inputValue,
      changeState,
      onInputHandler,
      onSubmitHandler
    }
  }
}
</script>
<style src="@/scss/payInOut.scss" lang="scss"></style>
