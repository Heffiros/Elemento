export const state = () => ({
  currentPopulation: 0,
  maxPopulation: 5,
  cost: 10
})

export const getters = {
  isMaxPopulationReached (state) {
    return state.currentPopulation === state.maxPopulation
  }
}

export const mutations = {
  MUTATATION_INCREASE_MAX_POPULATION (state, value) {
    state.maxPopulation += value
  },
  MUTATATION_INCREASE_CURRENT_POPULATION (state, value) {
    state.currentPopulation += value
  }
}

export const actions = {
  INCREASE_MAX_POPULATION (store, buildingPopulationValue) {
    store.commit('MUTATATION_INCREASE_MAX_POPULATION', buildingPopulationValue)
  },
  INCREASE_CURRENT_POPULATION (store, newPopulationValue) {
    store.commit('MUTATATION_INCREASE_CURRENT_POPULATION', newPopulationValue)
  }
}
