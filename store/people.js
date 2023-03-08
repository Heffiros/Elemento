export const state = () => ({
  currentPopulation: 0,
  maxPopulation: 5
})

export const mutations = {
  MUTATATION_INCREASE_MAX_POPULATION (state, value) {
    state.maxPopulation += value
  }
}

export const actions = {
  INCREASE_MAX_POPULATION (store, buildingPopulationValue) {
    store.commit('MUTATATION_INCREASE_MAX_POPULATION', buildingPopulationValue)
  }
}
