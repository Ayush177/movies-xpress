<template>
    <div>
        <the-navbar class="pb-5" />
        <fetch-movies class="px-3 pt-5" @update="update"/>
        <list class="pt-3 px-3" :movies="movies" v-if="movies.length"/>
    </div>
</template>
<script>
import FetchMovies from '../components/fetch/FetchMovies.vue';
import TheNavbar from '../components/nav/TheNavbar.vue';
import List from '../components/list/List.vue';
export default {
    components: {
        FetchMovies,
        TheNavbar,
        List,
    },
    data(){
        return{
            movies: [],
        }
    },
    methods: {
        update(movies){
            this.movies=movies;
        }
    }
}
</script>