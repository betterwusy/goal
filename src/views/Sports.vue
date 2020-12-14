/*
 * @Author: 吴晓斌
 * @Date: 2020-11-04
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-04 15:13:00
*/
//运动

<template>
  <div class="sports_container">
    <van-sticky>
      <!--顶部导航栏-->
      <van-nav-bar style="padding:20px;">
        <template #left>
          <span class="title">运动</span>
        </template>
        <template #right>
          <van-icon class="title-icon" slot="icon" class-prefix="goal" name="sousuo" size="22" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <!--标签栏-->
    <van-tabs v-model="active" color="gray" animated :swipeable="true" title-active-color="#000">
      <van-tab title="跑步" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
        <run />
      </van-tab>
      <van-tab title="行走" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
      </van-tab>
      <van-tab title="骑行" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
      </van-tab>
      <van-tab title="健身" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
      </van-tab>
      <van-tab title="瑜伽" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
      </van-tab>
    </van-tabs>
    <!-- 撑开高度 -->
    <div style="height:50px;" />
  </div>
</template>

<script>
import Run from '@/components/Sports/Run'

export default {
  name: 'Sports',
  components: {
    Run
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .sports_container{
    min-height: 100vh;
  }
  .title{
    font-weight:bold;
    font-size:25px;
    margin-left:10px;
  }
  .title-icon{
    margin: 0 15px;
  }
</style>
