<template>
  <div class="buy-sell">
    <button
      class="base-button base-button--accent"
      style="margin-bottom: 24px"
      @click="back"
    >
      назад
    </button>

    <h2>{{ title }}</h2>
        
    <div class="label">
      счет списания
    </div>
    <VCurrencyListItem
      :currency-code="currency"
      :value="accountValue"
    />

    <VInput :title="'Введите кол-во'">
      <input
        v-model="amount"
        type="text"
        placeholder=" "
      >
    </VInput>

    <div class="action-title">
      {{ actionTitleText }} {{ amountFormatted }} руб.
    </div>

    <VButton style="margin-button: 32px" @click="onSubmitHandler">
      {{ buttonText }}
    </VButton>
  </div>
</template>
<script>
import VCurrencyListItem from '@/components/VCurrencyListItem/VCurrencyListItem.vue'
import { maskAmount } from '@/helpers/maskAmount'
export default {
    name: 'BuySellPage',
    components: { VCurrencyListItem },
    data() {
        return {
            // TODO Валидация
            amount: ''
        }
    },
    computed: {
        currency() {
            return Number(this.$route.query?.currency)
        },
        title() {
            return this.$route.query?.action === 'buy' ? 'Покупка валюты' : 'Продажа валюты'
        },
        buttonText() {
            return this.$route.query?.action === 'buy' ? 'Купить валюту' : 'Продать валюту'
        },
        actionTitleText() {
            return this.$route.query?.action === 'buy' ? 'К списанию: ' : 'Получите: '
        },
        accountValue() {
            return 56500
        },
        amountFormatted() {
            return this.amount ? maskAmount(this.amount) : '-'
        } 
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        onSubmitHandler() {
            if(this.amount) {
                alert('Операция на : ' + this.amountFormatted + 'руб')
            }
        }
    }
}
</script>
<style src="@/scss/buySell.scss" lang="scss"></style>