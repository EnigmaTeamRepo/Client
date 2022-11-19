<template>
  <div class="home">
    <h1 class="title flex-col">
      <span>Привет {{ user.name }}!</span>
      <span>продуктивной работы 🤖❤️💸</span>
    </h1>

    <div
      class="balance"
    > 
      <span class="balance-title">Суммарный баланс</span>
      <span class="balance-value">
        {{ balanceFormatted }}
      </span>

      <router-link
        v-if="!user.balance"
        :to="{name: 'PayIn-Out'}"
        class="base-button base-button--active"
      >
        пополнить баланс
      </router-link>
      <template v-if="!user.balance">
        <VCurrencyListItem
          :currency-code="643"
          :value="0"
        />

        <router-link
          :to="{name: 'CreateAccount'}"
          class="base-button base-button--accent"
          style="margin: 15px auto 0;"
        >
          <span class="plus">+</span> Открыть новый счет
        </router-link>
      </template>
    </div>

    <VList
      v-if="user.accounts && user.accounts.length"
      :title="'Ваши счета'"
    >
      <ul>
        <li />
      </ul>
    </VList>

    <VList :title="'История операций'">
      <ul v-if="user.history && user.history.length">
        <li />
      </ul>

      <p v-else>
        нет ни одной операции :(
      </p>
    </VList>
  </div>
</template>
<script>
import { computed, reactive } from '@vue/reactivity'
import VList from '@/components/VList/VList.vue'
import VCurrencyListItem from '@/components/VCurrencyListItem/VCurrencyListItem.vue'
export default {
    name: 'VHome',
  components: { VList, VCurrencyListItem },
    setup() {
      const user = reactive({
        name: 'Никита',
        history: null,
        balance: 0,
        accounts: []
      })


      const balanceFormatted = computed(() => {
        return (user.balance).toLocaleString()
      })
      return {
        user,
        balanceFormatted
      }
    }
}
</script>
<style src="@/scss/home.scss" lang="scss"></style>
