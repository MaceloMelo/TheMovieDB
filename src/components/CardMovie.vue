
<template>
<v-container>
  <div class="d-flex barra-search">
    <v-text-field  class="p-2"
        outlined v-model="search"
        label="Buscar por Titulo" 
       v-on:keyup.enter="buscarFilme"
      ></v-text-field>
       <v-btn
   class="ma-2"
      outlined
      color="indigo"
      x-large
      @click.prevent="buscarFilme"
    >
      Buscar
    </v-btn>
    </div>
      <v-alert v-if="alerta"
      border="top"
      color="red lighten-2"
      dark
    >
      Digite um titulo para pesquisar!
    </v-alert>
  <h2 class="p-2 text-center" >FILMES MAIS POPULARES</h2>
    <v-row>
  <v-card v-for="(filme,index) in filmes " :key="index"
    class="mx-auto mt-12 card-filmes"
    max-width="374" 
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
     :src="'http://image.tmdb.org/t/p/w500/'+ filme.backdrop_path"
    >
    </v-img>

    <v-card-title class="justify-center">{{filme.original_title | Upper }} </v-card-title>

    <v-card-text :id="filme.id" >
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
      </v-row>

      <div class="my-4 text-subtitle-1 d-flex justify-space-between
    ">
          <div class="grey--text ms-4">
          {{filme.vote_average}}({{filme.vote_count}})
        </div>
        Lançamento:{{filme.release_date | formatDate}}
      </div>

      <div class="subtitle-filme">{{filme.overview}}</div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions class="justify-space-around">
      <div class="my-2">
        <router-link  class="link" :to="{name:'detalhesmovie',params:{id:filme.id}}">
            <v-btn
              color="primary"
              dark
              large
            >
              Detalhes
            </v-btn>
            </router-link>
           
          </div>
              <v-btn icon @click.prevent="favoritar(filme)">
            <v-icon  size="50">mdi-heart</v-icon>
          </v-btn>
    </v-card-actions>
     
  </v-card>
 
   </v-row>
       <v-divider class="mx-4"></v-divider>

     <div class="text-center">
    <v-pagination @click.native="paginar"
      v-model="paginas"
      :length="500"
      :total-visible="7"
    ></v-pagination>
  </div>
</v-container>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    props:{
        filmes:Array
    },
    filters: {
        Upper(value) {
        return value.toUpperCase();
        },
        formatDate(value){
            return new Date(value).toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' })
        }
    },
    data(){
    return{
        paginas:0,
        page:0,
        search:'',
        detalhes:'',
        alerta:false,
        apicarFavorito:false,
        favoritos:[]
    }
  },
  mounted(){
    this.paginas = this.$store.getters.totalPages
   },

  methods:{
    ...mapActions(['listarFilmes,filmesFavoritos']),
     paginar(e){
      this.page= e.toElement.innerHTML;
      this.$store.commit('paginarFilme',this.page);
      this.$store.dispatch('listarFilmes',this.$store.getters.paginarFilme)
    },
     buscarFilme(){
       if(this.search.length == ''){
         this.alerta = true
       }else{
      this.$store.commit('buscarFilme',this.search);
      this.$store.dispatch('buscarFilme',this.$store.getters.buscarFilme)
      this.$router.push('moviesearch')
       }
   
    },
     favoritar(filme){
      const vfavarito = v => v.id === filme.id
      const addfavorito = this.favoritos.filter(vfavarito).length == 0
      if(addfavorito){
        this.favoritos.push(filme)
      }
      this.$store.dispatch('filmesFavoritos',this.favoritos)
    }
  }
  
}
</script>
<style >
    .card-filmes{
    max-height: 728px;
    overflow: hidden;
    }
    .subtitle-filme{
    height: 105px;
    max-height: 105px;
    overflow: hidden;
    }
    .link{
    TEXT-DECORATION: NONE!important;
    }
    .barra-search{
    justify-content: end;
    align-items: end;
    }


</style>