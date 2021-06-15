import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNkZWQ0Y2Q0OTZlZTU2ZDQ2NTZhZTVhOGE3NzFhNCIsInN1YiI6IjYwYzE3ZDkxZDM0ZWIzMDAyOWQ2ZmRmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ufpm4fhB8aMrgM6v0L4ji2RGLMRJlyMT76jwK-8oAYM';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
Vue.use({
    install(Vue){
        Vue.prototype.$http= axios
    }
})