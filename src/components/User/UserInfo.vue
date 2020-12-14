/*
 * @Author: 吴晓斌
 * @Date: 2020-11-01
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-02 21:15:00
*/
//我的-用户信息组件

<template>
  <div class="userInfo_container">
    <div class="baseInfo_container">
      <van-row type="flex">
        <van-col span="6">
          <van-image width="60" height="60" round :src="userInfo.userImg" />
        </van-col>
        <van-col span="16">
          <van-row type="flex" style="margin:5px 0;"><span style="font-size:20px;">{{ userInfo.userName }}</span></van-row>
          <van-row type="flex" style="margin:10px 0;">
            <van-button class="kgLevelBtn" type="primary" size="mini" round>KG.{{ userInfo.kgLevel }}</van-button>
            <van-button class="vipLevelBtn" type="info" size="mini" round>{{ userInfo.vipLevel }}</van-button>
          </van-row>
        </van-col>
        <van-col span="2">
          <van-row type="flex" style="margin:15px 0;">
            <div><van-icon slot="icon" class-prefix="goal" name="arrow-right" size="20" /></div>
          </van-row>
        </van-col>
      </van-row>
    </div>
    <div class="moreInfo_container">
      <van-grid :column-num="4" class="home_gird--item">
        <van-grid-item :to="'/mySubscription'">
        <div class="home_gird--number_font">{{ userInfo.mySubscriptionCount }}</div>
        <div class="home_gird--title_font">关注</div>
        </van-grid-item>
        <van-grid-item :to="'/myFan'">
        <div class="home_gird--number_font">{{ userInfo.myFanCount }}</div>
        <div class="home_gird--title_font">粉丝</div>
        </van-grid-item>
        <van-grid-item :to="'/myDynamic'">
        <div class="home_gird--number_font">{{ userInfo.myDynamicCount }}</div>
        <div class="home_gird--title_font">动态</div>
        </van-grid-item>
        <van-grid-item :to="'/myCarrollCoin'">
        <div class="home_gird--number_font">
          {{ userInfo.myCarrollCoinCount }}<svg style="width:16px;height:16px" aria-hidden="true"><use xlink:href="#goal-jinbi" /></svg>
        </div>
        <div class="home_gird--title_font">卡路里币</div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  data () {
    return {
      userInfo: {
        userImg: require('../../assets/touxiang.png'),
        userName: 'BinN_Wu',
        kgLevel: 10,
        vipLevel: '年费会员',
        mySubscriptionCount: 1,
        myFanCount: '1k',
        myDynamicCount: 200,
        myCarrollCoinCount: 112
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.userInfo_container{
  background-color: #fff;
}
.baseInfo_container{
  padding: 0 20px;
}
.levelBtn{
  width: 50px;
}
.vipLevelBtn{
  width: 70px;
}
.home_gird {
  &--container {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 2px 0 rgba(206, 206, 206, 0.5);
    user-select: none;
  }
  &--item {
    width: 100%;
    height: 100%;
  }
  &--number_font {
    margin-top: 10px;
    font-size: 18px;
  }
  &--title_font {
    margin-top: 10px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: gray;
  }
}
</style>
