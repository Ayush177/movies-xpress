<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="primary" sticky class="position-fixed w-100 mb-5">
    <b-navbar-brand href="/" class="navbar-brand">
      <b-row>
        <b-col>
            <img :src="logo_url" class="bg-white block p-0">
        </b-col>
        <b-col class="pt-2">
            <h2>Movies Xpress</h2>
        </b-col>
      </b-row>
    </b-navbar-brand>
  </b-navbar>
</div>

</template>

<script>
export default {
  data(){
    return{
      logo_url: 'https://1000logos.net/wp-content/uploads/2020/08/Imdb-Logo-2012.png',
    }
  },
}
</script>

<style scoped>
img {
  width: 75px;
}
</style>