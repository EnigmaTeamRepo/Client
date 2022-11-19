<template>
  <div class="currency-item">
    <span
      class="icon"
      :style="{'color': currencyColor, 'background-color': bgColor}"
    >{{ currencySymbol }}</span>
    <span class="name">{{ currency }}</span>

    <span class="value"> {{ valueFormatted }} {{ currencySymbol }}</span>
  </div>
</template>
<script>
export default {
    name: 'VCurrencyListItem',
    props: {
        currencyCode: {
            type: Number,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
    },

    setup(props) {
        const currencyNames = {
            "643": 'руб'
        }
        const currencyColors = {
            "643": '#E88717'
        }
        const bgColors = {
            "643": '#FFCA2B'
        }

        const currencySymbols = {
            "643": '₽'
        }
        const valueFormatted = props.value.toLocaleString()
        const currency = currencyNames[props.currencyCode]
        const currencyColor = currencyColors[props.currencyCode]
        const bgColor = bgColors[props.currencyCode]
        const currencySymbol = currencySymbols[props.currencyCode]
        return {
            valueFormatted,
            currency,
            currencyColor,
            bgColor,
            currencySymbol 
        }
    }

}
</script>
<style src="./style.scss" lang="scss"></style>
