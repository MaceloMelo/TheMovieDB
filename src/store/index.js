import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    filmes:[],
    total_pages:[],
    page:1,
    search:'',
    favoritado:[]
  },
  getters: {
    todosFilmes(state){
      return state.filmes
    },
    totalPages(state){
      return state.paginas
    },
    paginarFilme(state){
      return state.page
    },
    buscarFilme(state){
      return state.search
    },
    filmesFavoritos(state){
      return state.favoritado = JSON.parse(localStorage.getItem('favoritos' || '[]'))

    },

  },
  mutations: {
    listarFilmes(state,filmes) {
      state.filmes = filmes
    },
    totalPages(state,total_pages) {
      state.total_pages = total_pages
    },
    paginarFilme(state,page) {
      state.page = page
    },
    buscarFilme(state,search) {
      state.search = search
    },
    filmesFavoritos(state,payload) {
      state.favoritado = payload
    },


  },
  actions: {
   async listarFilmes( context ) {
       await Vue.prototype.$http.get(`movie/popular?api_key=process.env.VUE_APP_API_KEY&language=pt-PT&page=${this.state.page}`,{
        }).then(res =>{
          context.commit('listarFilmes',res.data.results)
          context.commit('totalPages',res.data.total_pages)
       }).catch((err) => console.error(err));
      }, 
   async buscarFilme( context ) {
       await Vue.prototype.$http.get(`search/movie?api_key=process.env.VUE_APP_API_KEY&language=pt-PT&query=${this.state.search}`,{
        }).then(res =>{
        context.commit('buscarFilme',res.data.results)
       }).catch((err) => console.error(err));
      },
   filmesFavoritos( {commit},payload ) {
     commit('filmesFavoritos',payload)
     localStorage.setItem('favoritos',JSON.stringify(payload))
    },
   removerFavoritos( {commit},payload ) {
     commit('filmesFavoritos',payload)
     localStorage.setItem('favoritos',JSON.stringify(payload))

    },
  },

})
