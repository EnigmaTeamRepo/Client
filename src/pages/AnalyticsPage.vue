<template>
  <div>
    <VChart
      :currency="840"
      style="margin-bottom: 25px"
    />

    <VChart :currency="978" />
  </div>
</template>
<script>
import VChart from '@/components/VChart/VChart.vue'
export default {
  components: { VChart },
    
}
</script>
<style lang="">
    
</style>