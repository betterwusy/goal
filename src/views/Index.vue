/*
 * @Author: 吴晓斌
 * @Date: 2020-11-01
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-01 15:20:00
*/
//首页

<template>
  <div class="index_container">
    <van-sticky>
      <!--顶部导航栏-->
      <van-nav-bar style="padding:20px;">
        <template #left>
          <span class="title">首页</span>
        </template>
        <template #right>
          <van-icon class="title-icon" slot="icon" class-prefix="goal" name="person_add_alt_1-black-18dp" size="28" />
          <van-icon class="title-icon" slot="icon" class-prefix="goal" name="sousuo" size="22" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <!--标签栏-->
    <van-tabs v-model="active" color="gray" animated :swipeable="true" title-active-color="#000">
      <van-tab title="关注" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
        <ranking />
        <div v-for="(item, index) in dynamicList" :key="index">
          <subscribe-item :data="item" />
        </div>
      </van-tab>
      <van-tab title="动态" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
        <category />
        <div v-for="(item, index) in dynamicList" :key="index">
          <subscribe-item :data="item" />
        </div>
      </van-tab>
    </van-tabs>
    <div class="camera">
      <van-icon style="display:block;margin:14px 0 0 13px;" slot="icon" class-prefix="goal" name="xiangji2" size="28" color="#fff"/>
    </div>
    <!-- 撑开高度 -->
    <div style="height:50px;" />
  </div>
</template>

<script>
import Ranking from '@/components/Index/Ranking'
import Category from '@/components/Index/Category'
import SubscribeItem from '@/components/Index/SubscribeItem'

export default {
  name: 'Index',
  components: {
    Ranking,
    Category,
    SubscribeItem
  },
  data () {
    return {
      active: 0,
      dynamicList: [
        {
          userImg: require('../assets/touxiang.png'),
          dynamicUser: '月球上的人',
          dynamicContent: '10km打卡！明天继续加油~',
          dynamicImg: require('../assets/pic.png'),
          subscibeNumber: '6.6万',
          likeCount: 66,
          commentCount: 66,
          starCount: 66,
          commentUser: '在夜里失眠',
          commentContent: '爱了爱了！'
        },
        {
          userImg: require('../assets/touxiang.png'),
          dynamicUser: '月球上的人',
          dynamicContent: '10km打卡！明天继续加油~',
          dynamicImg: require('../assets/pic.png'),
          subscibeNumber: '6.6万',
          likeCount: 66,
          commentCount: 66,
          starCount: 66,
          commentUser: '在夜里失眠',
          commentContent: '爱了爱了！'
        },
        {
          userImg: require('../assets/touxiang.png'),
          dynamicUser: '月球上的人',
          dynamicContent: '10km打卡！明天继续加油~',
          dynamicImg: require('../assets/pic.png'),
          subscibeNumber: '6.6万',
          likeCount: 66,
          commentCount: 66,
          starCount: 66,
          commentUser: '在夜里失眠',
          commentContent: '爱了爱了！'
        },
        {
          userImg: require('../assets/touxiang.png'),
          dynamicUser: '月球上的人',
          dynamicContent: '10km打卡！明天继续加油~',
          dynamicImg: require('../assets/pic.png'),
          subscibeNumber: '6.6万',
          likeCount: 66,
          commentCount: 66,
          starCount: 66,
          commentUser: '在夜里失眠',
          commentContent: '爱了爱了！'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .index_container{
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
  .camera {
    position: fixed;
    bottom:70px;
    right:20px;
    z-index:999;
    background-color: #5dc261;
    border: 1px solid #5dc261;
    box-shadow: 0 5px 5px #888888;
    width:60px;
    height:60px;
    border-radius:50px;
  }
</style>
