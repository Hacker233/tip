<template>
    <div class="content-2">
        <img :src="movieImgUrl" alt="">
    </div>
</template>
<script>
import movieImgUrl from '../../assets/contentImg/movie.jpg'
export default {
  data () {
    return {
      movieImgUrl: movieImgUrl
    }
  }
}
</script>

<style>
.content-2 {
    float: left;
    margin-right: 50px;
    margin-bottom: 50px;
    width: 300px;
    height: 400px;
    background-color: #fff;
}
.content-2 img {
    width: 300px;
    height: 400px;
}
</style>
