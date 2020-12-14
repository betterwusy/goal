/*
 * @Author: 吴晓斌
 * @Date: 2020-11-03
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-03 16:11:01
*/
//我的-轮播图

<template>
  <div class="swipeBox_container">
    <div style="padding: 0 5px; margin-top:2px">
      <van-swipe :autoplay="3000">
        <van-swipe-item
          v-for="(image, index) in images" :key="index"
          show-indicators="false"
        >
          <img width="100%" height="100px" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwipeBox',
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
