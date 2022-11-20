<template>
  <div class="chart">
    <div class="header">
      <img
        :src="currencyImg"
        alt="currency"
      >
      <div class="flex-col">
        <span class="name">{{ crurrencyName }}</span>
        <span class="value">60,4025 руб</span>
      </div>
      <div class="info">
        -12,0975 Р * 45%
      </div>
    </div>
    <apexchart
      width="100%"
      type="line"
      :options="options"
      :series="series"
    />

    <div class="footer">
      <button class="base-button base-button--accent" @click="buy">
        купить
      </button>
      <button class="base-button" @click="sell">
        продать
      </button>
    </div>
  </div>
</template>
<script>
import { crurrencyImg, crurrencyName } from '@/helpers/currency';

    export default {
        name: 'VChart',
        props: {
            currency: {
                type: Number,
                required: true,
            }
        },
        data() {
            return {
                options: {
                    chart: {
                        id: 'vuechart-example'
                    },
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                    }
                },
                series: [{
                    name: 'series-1',
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }]
            }
        },
        computed: {
            crurrencyName() {
                return crurrencyName[this.currency]
            },
            currencyImg() {
                return require(`@/assets/img/${crurrencyImg[this.currency]}.svg`) 
            }
        },

        methods: {
            buy() {
                this.$router.push({name: 'Buy-sell', query: {
                    currency: this.currency,
                    action: 'buy'
                }})
            },
            sell() {
                this.$router.push({name: 'Buy-sell', query: {
                    currency: this.currency,
                    action: 'sell'
                }})
            },
        }

    }
</script>
<style src="./style.scss" lang="scss"></style>