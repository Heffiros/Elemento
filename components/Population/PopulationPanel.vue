<template>
  <div>
    <v-card width="400" class="flex">
      <v-card-item>
        <v-card-title>Population</v-card-title>
      </v-card-item>

      <v-card-text>
        <div>current population {{ currentPopulation }} / {{ maxPopulation }}</div>
      </v-card-text>
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
      currentPopulation: state => state.people.currentPopulation,
      maxPopulation: state => state.people.maxPopulation
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
