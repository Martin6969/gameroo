<template>
 <div class="row">
 <div class="col-6">ovo je cirkus
  <gameroo-card />
  <gameroo-card-2/>
  <gameroo-card-3/>
  <gameroo-card-4/>
</div>
 
 <div class="col-5">
 ... ovdje ide desni stupac!
 </div>
 </div>
</template>

<script>
// @ is an alias to /src
import GamerooCard from '@/components/GamerooCard.vue'
import GamerooCard2 from '@/components/GamerooCard2.vue'
import GamerooCard3 from '@/components/GamerooCard3.vue'
import GamerooCard4 from '@/components/GamerooCard4.vue'
export default {
  name: 'homeview',
  components: {
    GamerooCard,
    GamerooCard2,
    GamerooCard3,
    GamerooCard4
  }
}
</script>

<style scoped>

</style>