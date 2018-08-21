<template>
    <div class="content-2 content" :style="movieImgUrl">
        <p class="commont-p">电影推荐</p>
        <i class="iconfont">&#xe60c;</i>
    </div>
</template>
<script>
export default {
  data () {
    return {
      movieImgUrl: {
        backgroundImage: 'url(' + require('../../assets/contentImg/movie.jpg') + ')',
        backgroundSize: '200px 300px'
      }
    }
  }
}
</script>

<style>
.content-2 {
    float: left;
    text-align: center;
    margin-right: 50px;
    margin-bottom: 50px;
    width: 300px;
    height: 400px;
    background-color: #fff;
}
</style>
