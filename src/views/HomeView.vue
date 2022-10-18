<template>
 <div class="row">
 <div class="col-6">ovo je Prvi stupac
  <gameroo-card v-for="card in filteredCards" :key="card.url" :info="card" />
 
</div>
 
 <div class="col-5">
 ... ovdje ide desni stupac!
 </div>
 </div>
</template>

<script>
// @ is an alias to /src
import GamerooCard from '@/components/GamerooCard.vue'
import store from '@/store.js'
let cards = [];

cards = [
  {url:"https://image.api.playstation.com/vulcan/ap/rnd/202102/2307/kQzDCY5RCrSXCeeFjPGUzkGI.png","description": "Kena: Bridge of spirits","time": "10 minutes ago.."},
 { url:"https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png","description": "Dark souls 3","time": "20 minutes ago.."},
 { url:"https://cdn1.epicgames.com/undefined/offer/S2_ACOD-1280x1440-621a727d381ffe0cffe869c1e23bc741.jpg","description": "AC Odyssey","time": "30 minutes ago.."},
 { url:"https://cdn.wccftech.com/wp-content/uploads/2020/06/Assassins-Creed-Valhalla-Game-Bundle-Promo.jpg","description": "AC Valhalla","time": "40 minutes ago.."},
 ];

export default {
  name: 'homeview',
  data: function() {
    return {
      cards,
      store,
  };
},
computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      return this.cards.filter(card => card.description.includes(termin));
    },
  },
  components:{
  GamerooCard,
  },
};
</script>

<style scoped>

</style>