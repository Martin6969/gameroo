<template>
 <div class="row">
 <div class="col-6">ovo je cirkus
  <gameroo-card v-for="card in cards" :key="card" :info="card" />
 
</div>
 
 <div class="col-5">
 ... ovdje ide desni stupac!
 </div>
 </div>
</template>

<script>
// @ is an alias to /src
import GamerooCard from '@/components/GamerooCard.vue'

let cards = [];

cards = [
  { title:"Kena", time:"3 hours ago", url: "https://image.api.playstation.com/vulcan/ap/rnd/202102/2307/kQzDCY5RCrSXCeeFjPGUzkGI.png"},
 { title:"Dark Souls 3", time:"5 hours ago", url: "https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png"},
 { title:"AC Odisay", time:"10 hours ago", url:"https://cdn1.epicgames.com/undefined/offer/S2_ACOD-1280x1440-621a727d381ffe0cffe869c1e23bc741.jpg"},
 { title:"AC Valhalla", time:"12 hours ago", url:"https://cdn.wccftech.com/wp-content/uploads/2020/06/Assassins-Creed-Valhalla-Game-Bundle-Promo.jpg"},
 ];

export default {
  name: 'homeview',
  data: function() {
    return {
      cards:cards,
  };
},
  components:{
  GamerooCard,
  },
};
</script>

<style scoped>

</style>