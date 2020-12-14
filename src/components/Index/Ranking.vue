/*
 * @Author: 吴晓斌
 * @Date: 2020-11-01
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-01 18:29:00
*/
//首页-关注-本周运动排名

<template>
  <div class="ranking_container">
    <van-row type="flex">
      <van-col span="20" style="margin:auto 0;">
        <span class="rankingTitle">本周运动排名&nbsp;&nbsp;</span>
        <span class="rankingNumber">{{ sportRanking }}</span>
      </van-col>
      <van-col span="4">
        <van-image width="30" height="30" round :src="userImg" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'rankingBox',
  data () {
    return {
      sportRanking: 1,
      userImg: require('../../assets/touxiang.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  .ranking_container{
    padding: 16px 4px 16px 24px;
    background-color: #fff;
  }
  .rankingInfo{
    padding: auto 0;
  }
  .rankingTitle{
    font-size: 16px;
  }
  .rankingNumber{
    font-size: 18px;
    color: #5dc261;
  }
</style>
