<template>
  <div class="account">
    <button
      class="base-button base-button--accent"
      style="margin-bottom: 24px"
      @click="back"
    >
      назад
    </button>
    <h2>Реквизиты счета</h2>

    <VCurrencyListItem
      :currency-code="currency"
      :value="accountValue"
    />

    <div class="info-item flex-col">
      <span class="title">номер счета</span>
      <span class="value">23432423432324324324324</span>
    </div>
    
    <div class="info-item flex-col">
      <span class="title">банк</span>
      <span class="value">ООО Совкомбанк</span>
    </div>

    <VButton @click="toPayInOut">
      пополнить счет
    </VButton>
    <VButton
      class="muted"
      @click="toPayInOut"
    >
      Вывод средств
    </VButton>
  </div>
</template>
<script>
import VCurrencyListItem from '@/components/VCurrencyListItem/VCurrencyListItem.vue'
import { useRoute, useRouter } from 'vue-router'
export default {
    name: "AccountPage",
    components: { VCurrencyListItem },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const currency = Number(route.query.currency);
        // Test data
        const accountValue = 122122;
        function back() {
            router.go(-1);
        }

        function toPayInOut() {
            router.push({name: 'PayIn-Out'})
        }
        return {
            back,
            currency,
            accountValue,
            toPayInOut
        };
    }
}
</script>
<style src="@/scss/account.scss" lang="scss"></style>
