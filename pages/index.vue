<template>
  <div>
    <population-panel />
    <inventory-gold />
  </div>
</template>

<script>
import InventoryGold from '~/components/Inventory/InventoryGold'
import PopulationPanel from '~/components/Population/PopulationPanel'

export default {
  name: 'IndexPage',
  components: {
    InventoryGold,
    PopulationPanel
  }
}
</script>
