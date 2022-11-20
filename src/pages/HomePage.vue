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
          @click="toAccount(643)"
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
      <template v-if="user.history && user.history.length">
        <ul>
          <li />
        </ul>
        <router-link :to="{name: 'History'}">
          открыть историю операций
        </router-link>
      </template>
   

      <p v-else>
        нет ни одной операции :(
      </p>
    </VList>
  </div>
</template>
<script>
import { computed } from '@vue/reactivity'
import VList from '@/components/VList/VList.vue'
import VCurrencyListItem from '@/components/VCurrencyListItem/VCurrencyListItem.vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/stores/user'

export default {
    name: 'VHome',
  components: { VList, VCurrencyListItem },
    setup() {
      const router = useRouter()
      const store = useUserStore()

              // Test data
      const user = store.user

      function toAccount(currencyCode) {
        router.push({name: 'Account', query: {
          currency: currencyCode
        }})
      }

      const balanceFormatted = computed(() => {
        return (user.balance).toLocaleString()
      })
      return {
        user,
        balanceFormatted,
        toAccount
      }
    }
}
</script>
<style src="@/scss/home.scss" lang="scss"></style>
