<template>
    <div>
        <CardMovie :filmes="filmes"/>
    </div>
</template>
<script>
import CardMovie from '@/components/CardMovie.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    CardMovie
  },
  data(){
    return{
      }
    },
    computed:{
      filmes:function(){
        return this.$store.getters.todosFilmes.slice(0,15)
      }
    },
     created: function(){
        this.listarFilmes()
    },
    methods: {
      ...mapActions(['listarFilmes']),
      listarFilmes: function(){
        this.$store.dispatch('listarFilmes')
      }
     
    }

}
</script>
<style >
    
</style>