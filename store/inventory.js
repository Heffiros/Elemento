export const state = () => ({
  po: 0
})

export const mutations = {
  MUTATE_UPDATE_PO (state, value) {
    state.po += value
  }
}

export const actions = {
  UPDATE_ADD_PO (store, value) {
    store.commit('MUTATE_UPDATE_PO', value)
  }
}
