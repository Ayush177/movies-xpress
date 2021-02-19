<template>
    <div>
        <div>
            <b-form-input v-model="searchStr" placeholder="Filter movies by title" class="mb-3"></b-form-input>
        </div>
        <b-card-group columns>
            <span v-for="(movie) in movieDetail" :key="movie.id">
            <b-card
                :title="movie.Title"
                :img-src="movie.Poster"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
                @click="clicked(movie.imdbID)"
                v-if="!movie.Error"
            >
                <b-card-text>
                <p  class="text-secondary"><span class="pr-3">{{ movie.Year }}</span>  <span class="pr-3">{{ movie.Runtime }}</span> {{ movie.Language }}</p>
                <p>{{ movie.Plot }}</p>
                <h5>Imdb Rating: <strong>{{ movie.imdbRating }}</strong></h5>
                </b-card-text>

                <template #footer>
                    <b-button @click.stop.prevent="updateFav(movie.imdbID)" :variant="favorite.includes(movie.imdbID) ? 'success' :'primary'">
                        <b-icon icon="suit-heart" aria-hidden="true" v-if="!favorite.includes(movie.imdbID)"></b-icon>
                        <b-icon icon="suit-heart-fill" aria-hidden="true" variant="danger" v-else></b-icon>
                        {{ favorite.includes(movie.imdbID) ? 'Added to Favorite' : 'Add to Favorite' }}
                    </b-button>
                </template>
            </b-card> 
            </span>
        </b-card-group>
    </div>
</template>
<script>
import _ from 'lodash'
export default {
    props: {
        movies: {
            required: true
        }
    },
    data(){
        return {
            favorite: [],
            searchStr: '',
            movieDetail: this.movies,
        }
    },
    watch: {
        searchStr(newVal){
        this.checkSearchStr(newVal)
        }
    },
    methods: {
        checkSearchStr: _.debounce(function(string) {
            this.movieDetail=this.movies.filter(movie => movie.Title.toLowerCase().includes(string.toLowerCase()));
        }, 400),
        updateFav(id){
            if(this.favorite.includes(id)){
                const index = this.favorite.indexOf(id);
                if (index > -1) {
                    this.favorite.splice(index, 1);
                }
            }
            else
                this.favorite.push(id);
        },
        clicked(id){
            this.$router.push({ name: 'details', params: { imdbID: id } })
        }
    }
}
</script>