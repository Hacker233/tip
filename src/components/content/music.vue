<template>
    <div class="content-4 content" :style="musicImgUrl">
        <p class="commont-p">我爱音乐</p>
        <i class="iconfont">&#xe614;</i>
    </div>
</template>
<script>
export default {
  data () {
    return {
      musicImgUrl: {
        backgroundImage: 'url(' + require('../../assets/contentImg/music-1.jpg') + ')',
        backgroundSize: '300px 200px',
        opacity: '0.9'
      }
    }
  }
}
</script>

<style>
.content-4 {
    text-align: center;
    float: left;
    width: 300px;
    height: 400px;
}

</style>
