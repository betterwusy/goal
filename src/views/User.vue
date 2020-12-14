/*
 * @Author: 吴晓斌
 * @Date: 2020-11-01
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-02 12:25:00
*/
//我的

<template>
  <div class="user_container">
    <van-sticky>
      <!--顶部导航栏-->
      <van-nav-bar style="padding:20px;">
        <template #left>
          <span class="title">我的</span>
        </template>
        <template #right>
          <van-icon class="title-icon" slot="icon" class-prefix="goal" name="shezhi" size="22"/>
          <van-icon class="title-icon" slot="icon" class-prefix="goal" name="saoma" size="18" />
          <van-icon class="title-icon" slot="icon" class-prefix="goal" name="icon-test1" size="22" :badge="myMessageCount"/>
        </template>
      </van-nav-bar>
    </van-sticky>
    <user-info />
    <my-data />
    <swipe-box />
    <category />
    <!-- 撑开高度 -->
    <div style="height:60px;" />
  </div>
</template>

<script>
import UserInfo from '@/components/User/UserInfo'
import MyData from '@/components/User/MyData'
import SwipeBox from '@/components/User/SwipeBox'
import Category from '@/components/User/Category'

export default {
  name: 'user',
  components: {
    UserInfo,
    MyData,
    SwipeBox,
    Category
  },
  data () {
    return {
      myMessageCount: '99+'
    }
  }
}
</script>

<style lang="scss" scoped>
  .user_container{
    min-height: 100vh;
    margin: 0 auto;
  }
  .title{
    font-weight:bold;
    font-size:25px;
    margin-left:10px;
  }
  .title-icon{
    margin-left: 20px;
    position: relative;
  }
</style>
