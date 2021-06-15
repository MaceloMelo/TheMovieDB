<template>
  <v-container>
    <v-row>
      <v-card v-for="(favorito,index) in fimesFavoritos" :key="(favorito,index)"
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="'http://image.tmdb.org/t/p/w500/'+ favorito.backdrop_path"
      height="200px"
    ></v-img>

    <v-card-title class="justify-content-center">
      {{favorito.title}}
    </v-card-title >
       <v-card-actions>
      <v-btn class="justify-content-center"
        color="red lighten-2"
        text @click="removerFavorito(favorito.title)"
      >
        Excluir
      </v-btn>
    </v-card-actions>
  </v-card>

    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'
export default {

data(){
    return{
      
    }
},

computed:{
  fimesFavoritos: function(){
    return this.$store.getters.filmesFavoritos
  }
},
methods:{
      ...mapActions(['removerFavoritos']),
   removerFavorito(favoritoid){
     let local = JSON.parse(localStorage.getItem('favoritos'))
     local.splice(favoritoid,1)
    this.$store.dispatch('removerFavoritos',local)

    }
}

}
</script>