<template>
  <div>
    <v-card class="py-4 d-flex justify-center" color="#fab319">
      <div>
        <v-icon>mdi-gold</v-icon>
        <span class="gold">{{ gold }}</span>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import timerConfig from '~/config/timerConfig'
import valueConfig from '~/config/valueConfig'

export default {
  name: 'InventoryGold',
  computed: {
    ...mapState({
      gold: state => state.inventory.gold
    })
  },
  mounted () {
    setInterval(() => {
      this.$store.dispatch('inventory/UPDATE_ADD_GOLD', valueConfig.goldBaseValue)
    }, timerConfig.goldBaseInterval)
  }
}
</script>
<style>
  .gold {
    margin-left: 12px
  }

</style>
