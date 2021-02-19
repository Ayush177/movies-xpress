<template>
    <div>
        <the-navbar  class="pb-5" />
        <b-card class="shadow-lg mx-3 my-5 bg-white rounded" no-body>
            <b-row>
                <b-col cols="12" md="4" lg="4">
                    <img :src="movieDetail.Poster" class="w-100">
                </b-col>
                <b-col cols="12" md="8" lg="8" class="pt-2">
                    <div class="p-2">
                    <div>
                        <h2>{{ movieDetail.Title }}</h2>
                    </div>
                    <div>
                        <h5 :class="movieDetail.imdbRating > 7 ? 'text-success' : movieDetail.imdbRating > 4 ? 'text-warning' : 'text-danger'">IMDB Rating: {{ movieDetail.imdbRating }}</h5>
                    </div>
                    <div>
                        <h5 class="text-secondary"><span class="pr-3">{{ movieDetail.Year }}</span> <span class="pr-3">{{ movieDetail.Rated }}</span> {{ movieDetail.Genre }}</h5>
                    </div>
                    <div>
                        <p>Runtime: {{ movieDetail.Runtime }}</p>
                    </div>
                    <div>
                        <p>Box Office Collection: <strong>{{ movieDetail.BoxOffice }}</strong></p>
                    </div>
                    <div>
                        <h5>Plot</h5>
                        <p>{{ movieDetail.Plot }}</p>
                    </div>
                    <div>
                        <h5>Language</h5>
                        <p>{{ movieDetail.Language }}</p>
                    </div>
                    <div>
                        <h5>Actors</h5>
                        <p>{{ movieDetail.Actors }}</p>
                    </div>
                    <div>
                        <h5>Director</h5>
                        <p>{{ movieDetail.Director }}</p>
                    </div>
                    <div>
                        <h5>Awards</h5>
                        <p>{{ movieDetail.Awards }}</p>
                    </div>
                    </div>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>
<script>
import TheNavbar from '../nav/TheNavbar.vue';
import axios from 'axios'
export default {
    components: {
        TheNavbar
    },
    data(){
        return{
            movieDetail: {},
        }
    },
    mounted(){
        axios
            .get(`http://www.omdbapi.com/?i=${this.$route.params.imdbID}&apikey=1380190c`)
            .then(res => this.movieDetail=res.data)
    }
}
</script>