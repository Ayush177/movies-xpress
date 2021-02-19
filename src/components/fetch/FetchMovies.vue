<template>
    <div>
        <b-row>
            <b-col cols="12" md="11" lg="11"  class="p-2">
                <b-form-input v-model="ids" placeholder="Enter IMDB ids separated by commas" @keydown.enter="collectIDs"></b-form-input>
            </b-col>
            <b-col cols="12" md="1" lg="1" class="text-center p-2">
                <b-button variant="primary" @click="collectIDs">Search</b-button>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        ids: '',
        movies: [],
      }
    },
    methods: {
        getMovies(id){
            axios
                .get(`http://www.omdbapi.com/?i=${id}&apikey=1380190c`)
                .then(res => this.movies.push(res.data))
        },
        collectIDs(){
            this.movies=[];
            const arrID = this.ids.split(',');
            arrID.map(e => e.trim());
            for(const id of arrID){
                this.getMovies(id);
            }
        }
    },
    watch: {
        movies(newVal){
            this.$emit('update',newVal)
        }
    }
  }
</script>