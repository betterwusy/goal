/*
 * @Author: 吴晓斌
 * @Date: 2020-11-04
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-04 10:02:00
*/
//新闻

<template>
  <div class="news_container">
    <van-sticky>
      <!--顶部导航栏-->
      <van-nav-bar style="padding:20px;">
        <template #left>
          <span class="title">新闻</span>
        </template>
        <template #right>
          <van-icon class="title-icon" slot="icon" class-prefix="goal" name="sousuo" size="22" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <!--标签栏-->
    <van-tabs v-model="active" color="gray" animated :swipeable="true" title-active-color="#000">
      <van-tab title="关注" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
        <div v-for="(item, index) in newsList" :key="index">
          <news-item :data="item" />
        </div>
      </van-tab>
      <van-tab title="重要" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
        <div v-for="(item, index) in newsList" :key="index">
          <news-item :data="item" />
        </div>
      </van-tab>
      <van-tab title="篮球" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
        <div v-for="(item, index) in newsList" :key="index">
          <news-item :data="item" />
        </div>
      </van-tab>
      <van-tab title="足球" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
        <div v-for="(item, index) in newsList" :key="index">
          <news-item :data="item" />
        </div>
      </van-tab>
      <van-tab title="田径" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
        <div v-for="(item, index) in newsList" :key="index">
          <news-item :data="item" />
        </div>
      </van-tab>
      <van-tab title="其他" title-style="font-size: 16px;font-family: PingFangSC-Regular;">
        <div v-for="(item, index) in newsList" :key="index">
          <news-item :data="item" />
        </div>
      </van-tab>
    </van-tabs>
    <!-- 撑开高度 -->
    <div style="height:50px;" />
  </div>
</template>

<script>
import NewsItem from '@/components/News/NewsItem'

export default {
  name: 'News',
  components: {
    NewsItem
  },
  data () {
    return {
      active: 0,
      newsList: [
        {
          title: '4消息！广东曾想废掉书豪，篮协回应北京，阿布成全联盟榜样',
          commentCount: 4129,
          publishTime: '5分钟',
          newsPic: require('../assets/pic.png')
        },
        {
          title: '欧冠-拉莫斯百球皇马3-2国米 莱万双响拜仁6-2大逆转',
          commentCount: 9499,
          publishTime: '1小时',
          newsPic: require('../assets/pic.png')
        },
        {
          title: 'CBA-广东险胜北京收获6连胜 三星杯柯洁零封申真谞夺冠',
          commentCount: 5329,
          publishTime: '20分钟',
          newsPic: require('../assets/pic.png')
        },
        {
          title: '保利尼奥当选本轮MVP 中超-暴力鸟2球恒大3-1国安和苏宁争冠',
          commentCount: 9,
          publishTime: '6小时',
          newsPic: require('../assets/pic.png')
        },
        {
          title: 'NBA两套开赛方案出炉 字母争夺战打响！希罗维金斯成筹码',
          commentCount: 934,
          publishTime: '7分钟',
          newsPic: require('../assets/pic.png')
        },
        {
          title: '视频-周琦暂停时爆粗训话队友 百慕大锦标赛精彩十佳球',
          commentCount: 111,
          publishTime: '1天',
          newsPic: require('../assets/pic.png')
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .news_container{
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
