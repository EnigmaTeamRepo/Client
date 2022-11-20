<template>
  <div class="history">
    <button
      class="base-button base-button--accent"
      style="margin-bottom: 24px"
      @click="back"
    >
      назад
    </button>

    <h2>История операций</h2>

    <ul class="flex-col">
      <li>
        <div class="flex-col">
          <span class="date">12:23 12.03.2022</span>
          <span class="title">пополнение счета</span>
        </div>
         
        <span class="value">+1 000 ₽</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name: 'HistoryPage',
}
</script>
<style src="@/scss/history.scss" lang="scss"></style>
