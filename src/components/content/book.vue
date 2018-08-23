<template>
    <div class="content-3 content" :style="bookImgUrl">
        <p class="commont-p">精彩阅读</p>
        <i class="iconfont">&#xe62e;</i>
    </div>
</template>
<script>

export default {
  data () {
    return {
      bookImgUrl: {
        backgroundImage: 'url(' + require('../../assets/contentImg/book.jpg') + ')',
        backgroundSize: '200px 300px',
        opacity: '0.9'
      }
    }
  }
}
</script>

<style>
.content-3 {
    text-align: center;
    float: left;
    margin-left: 45px;
    margin-right: 50px;
    width: 300px;
    height: 400px;
}

</style>
