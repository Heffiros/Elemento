<template>
  <div>
    <v-card class="logo py-4 d-flex justify-center">
      <span>{{ gold }}</span>
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
