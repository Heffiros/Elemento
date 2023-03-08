<template>
  <div>
    <v-card width="400" class="flex">
      <v-card-title>Population</v-card-title>
      <v-card-text>
        <div>current population {{ currentPopulation }} / {{ maxPopulation }}</div>
        <v-col>
          <v-btn
            color="secondary"
            :disabled="canBuy"
            @click="addPopulation"
          >
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </v-col>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import valueConfig from '~/config/valueConfig'

export default {
  name: 'InventoryGold',
  computed: {
    ...mapState({
      currentPopulation: state => state.people.currentPopulation,
      maxPopulation: state => state.people.maxPopulation
    }),
    canBuy () {
      if (!this.$store.getters['people/isMaxPopulationReached'] && this.$store.getters['inventory/canMakeTrade'](10)) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    addPopulation () {
      this.$store.dispatch('inventory/UPDATE_ADD_GOLD', -valueConfig.peoplePrice)
      this.$store.dispatch('people/INCREASE_CURRENT_POPULATION', 1)
    }
  }
}
</script>
<style>
  .gold {
    margin-left: 12px
  }

</style>
