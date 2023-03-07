<template>
  <div>
    <inventory-gold />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import InventoryGold from '~/components/Inventory/InventoryGold'

export default {
  name: 'IndexPage',
  components: {
    InventoryGold
  },
  computed: {
    ...mapState({
      po: state => state.inventory.po
    })
  },
  methods: {
    addPo () {
      this.$store.dispatch('inventory/UPDATE_ADD_GOLD', 10)
    }
  }
}
</script>
