<template>
<v-container>
    <v-row>
<v-card v-for="(filme,index) in filmesearch" :key="(filme,index)"
    class="mx-auto mb-5"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="'http://image.tmdb.org/t/p/w500/'+ filme.backdrop_path"
    >
      <v-card-title>{{filme.title}}</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">
      LANÇAMENTO:{{filme.release_date | formatDate}}
    </v-card-subtitle>
    <v-card-text class="text--primary">
      <div>{{filme.overview}}</div>
    </v-card-text>
  </v-card >
      </v-row>
  </v-container>
</template>
<script>
export default {
     filters: {
        formatDate(value){
            return new Date(value).toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' })
        }
    },
    computed:{
    filmesearch: function(){
      return this.$store.getters.buscarFilme
    }
  }
    
}
</script>
<style >
    
</style>