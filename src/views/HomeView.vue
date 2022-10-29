<template>
 <div class="row">
 <div class="col-6">ovo je Prvi stupac
  <!-- nova forma za post -->
 <form @submit.prevent="postNewImage" class="form-inline mb-5">
 <div class="form-group">
 <label for="imageUrl">Image URL</label>
 <input
 v-model="newImageUrl"
type="text"
class="form-control ml-2"
placeholder="Enter the image URL"
id="imageUrl"
 />
 </div>
 <div class="form-group">
 <label for="imageDescription">Description</label>
 <input
 v-model="newImageDescription"
type="text"
class="form-control ml-2"
placeholder="Enter the image description"
id="imageDescription"
 />
 </div>
 <button type="submit" class="btn btn-primary ml-2">Post
image</button>
 </form>
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
import { db } from "@/firebase.js";
import { throwStatement } from '@babel/types';
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
      newImageUrl:"",
      newImageDescription: "",
  };
},
methods: {
postNewImage() {
  const imageUrl=this.newImageUrl;
  const imageDescription=this.newImageDescription;
  db.collection("posts").add({
    url:imageUrl,
    description:imageDescription,
    email:store.currentUser,
    posted_at:Date.now(),
  })
  .then((doc)=>{
console.log("spremljeno",doc);
this.newImageDescription="";
this.newImageUrl="";
  })
  .catch((e)=>{
console.error(e);
  });

  console.log("oki");
},
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