<template>
    <div class="home-wwrapper">
        <div class="home-content">
          <Write></Write>
          <Movie></Movie>
          <Book></Book>
          <Music></Music>
        </div>
    </div>
</template>
<script>
import Write from '../content/write.vue'
import Movie from '../content/movie.vue'
import Book from '../content/book.vue'
import Music from '../content/music.vue'

export default {
  data () {
    return {}
  },
  components: {
    Write,
    Movie,
    Book,
    Music
  }
}
</script>
<style scoped>
.home-content {
  width: 100%;
  padding-top: 220px;
}
</style>
