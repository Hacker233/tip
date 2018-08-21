<template>
    <div class="content-4">
        <img :src="musicImgUrl" alt="">
    </div>
</template>
<script>
import musicImgUrl from '../../assets/contentImg/music.jpg'
export default {
  data () {
    return {
      musicImgUrl: musicImgUrl
    }
  }
}
</script>

<style>
.content-4 {
    float: left;
    width: 300px;
    height: 400px;
    background-color: #fff;
}
.content-4 img {
    width: 300px;
    height: 400px;
}
</style>
