<template>
 <div class="row">
 <div class="col-6">ovo je Prvi stupac
  <!-- nova forma za post -->
 <form @submit.prevent="postNewImage" class="form-inline mb-5">
 <div class="form-group">
 <label for="imageUrl">Image URL</label>
 <!--<input
 v-model="newImageUrl"
type="text"
class="form-control ml-2"
placeholder="Enter the image URL"
id="imageUrl"
 />-->
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
 <!--<a style="margin-bottom:50px; margin-top:10px" class="btn btn-primary ml-2" @click="toggleShow">Upload picture</a>-->
      <label for="formFile" class="form-label">Upload Image:</label>
      <div style="width:400px;height:400px;background-color:blue;"><croppa style="background-color:#92a188" :width="400" :height="400" placeholder="Upload image" v-model="imageUpload" ></croppa></div>
 </div>
 <button type="submit" class="btn btn-primary ml-2">Post
image</button>
 </form>
  <gameroo-card v-for="card in filteredCards" :key="card.id" :info="card" />

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
import { db, storage } from "@/firebase.js";
import firebase from "firebase";
import { throwStatement } from '@babel/types';


//let cards = [];

/*cards = [
  {url:"https://image.api.playstation.com/vulcan/ap/rnd/202102/2307/kQzDCY5RCrSXCeeFjPGUzkGI.png","description": "Kena: Bridge of spirits","time": "10 minutes ago.."},
 { url:"https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png","description": "Dark souls 3","time": "20 minutes ago.."},
 { url:"https://cdn1.epicgames.com/undefined/offer/S2_ACOD-1280x1440-621a727d381ffe0cffe869c1e23bc741.jpg","description": "AC Odyssey","time": "30 minutes ago.."},
 { url:"https://cdn.wccftech.com/wp-content/uploads/2020/06/Assassins-Creed-Valhalla-Game-Bundle-Promo.jpg","description": "AC Valhalla","time": "40 minutes ago.."},
 ];
*/

export default {
  
  name: 'homeview',
  data: function() {
    return {
      cards : [],
      store,
      newImageUrl:"",
      newImageDescription: "",
      imageUpload:null,
      url: ""
  };
},
mounted(){
  this.getPosts();
},
methods: {

getPosts(){
console.log("firebase dohvat");
db.collection("posts")
.orderBy("posted_at","desc")
.limit(100)
.get()
.then((query)=>{
  this.cards = [];
  query.forEach((doc)=>{
    const data = doc.data();

    this.cards.push({
      id: doc.id,
      time: data.posted_at,
      description: data.description,
      url: data.url,
    })
  });
});
},
getImage(){

  return new Promise((resolveFn,errorFn)=>{
    this.imageUpload.generateBlob((data)=>{
      resolveFn(data);
    });

  });
},

postNewImage() {
  const imageUrl=this.newImageUrl;
  const imageDescription=this.newImageDescription;
  
//this.imageUpload.generateBlob((blobData) => {
        this.getImage().then((data)=>{
        console.log(data);
        let imageName =
          "/" + store.currentUser + "/" + Date.now() + ".png";
        const url = this.url;

        return storage.ref(imageName).put(data)
        })
        .then((result) => {
            return result.ref.getDownloadURL()
        })
        .then((url) => {
            console.log("Evo linka: ", url);
              
          return db.collection("posts").add({
              description:imageDescription,
              url: url,
              email:store.currentUser,
              posted_at:Date.now(),
            })
            
            .then((doc)=>{
              console.log("spremljeno",doc);
              this.newImageDescription="";
              this.newImageUrl="";
              this.imageUpload.remove();
              this.getPosts();
            })
            .catch((e)=>{
          console.error(e);
          });
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
.bg{
  background-color:white;
}
</style>