<template >
<v-container>
    <v-row>
        <ul class="d-flex" v-for="(movie,index) in filme" :key="(movie,index)">
        <v-col cols="12">
          <v-card>
            <v-img
               :src="'http://image.tmdb.org/t/p/w500/'+ movie.backdrop_path"
              max-height="500" 
              class="grey darken-4"
            ></v-img>
            <h2 class="text-center p-3">
              {{movie.original_title | Upper}}
            </h2>
            <v-tabs vertical>
            <v-tab>
            Descrição
            </v-tab>
            <v-tab>
            Lançamento
            </v-tab>
            <v-tab>
                Qualificações
            </v-tab>
            <v-tab>
                Site
            </v-tab>
            <v-tab>
                IMDB
            </v-tab>
            <v-tab>
                IDIOMA
            </v-tab>
            <v-tab>
                TITULO ORIGIAL
            </v-tab>
            <v-tab-item>
                <v-card flat>
            <v-card-title class="text-h6">
            Sobre
          </v-card-title>
                <v-card-text>
                    <p class="text-justify pl-4 pr-4 pb-4">{{movie.overview}}</p>
                </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
            <v-card-title class="text-h6">
            Data
          </v-card-title>
                <v-card-text>
                    <p class="text-justify pl-4 pr-4 pb-4">{{movie.release_date}}</p>
                </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
            <v-card-title class="text-h5">
                Nota
          </v-card-title>
                <v-card-text>
                    <p>
                   {{movie.vote_average}} 
                    </p>
                </v-card-text>
            <v-card-title class="text-h5">
                Votações
          </v-card-title>
           <v-card-text>
                    <p>
                   {{movie.vote_count}}
                    </p>
                </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
            <v-card-title class="text-h5">
                Site do Filme
          </v-card-title>
                <v-card-text>
                    <p >
                   {{movie.homepage}}
                    </p>
                </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
            <v-card-title class="text-h5">
               Id Imdb
          </v-card-title>
                <v-card-text>
                    <p >
                   {{movie.imdb_id}}
                    </p>
                </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
            <v-card-title class="text-h5">
                Original
          </v-card-title>
                <v-card-text>
                    <p >
                    {{movie.original_language | Upper}}
                    </p>
                </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
            <v-card-title class="text-h5">
               Titulo Original
          </v-card-title>
                <v-card-text>
                    <p >
                    {{movie.original_title}}
                    </p>
                </v-card-text>
                </v-card>
            </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
        </ul>
    </v-row>
</v-container>
</template>
<script>
export default {
props:{
    id:Array
},  
  filters: {
        Upper(value) {
        return value.toUpperCase();
        },
  },
data(){
    return{
        filme:[]
    }
},

  async mounted () {
   await this.$http.get(`movie/${this.$route.params.id}?api_key=process.env.VUE_APP_API_KEY&language=pt-PT`)
      .then(res => {
        this.filme.push(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style >
    
</style>