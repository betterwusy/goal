/*
 * @Author: 吴晓斌
 * @Date: 2020-11-01
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-01 08:19:00
*/
//首页-动态Item

<template>
  <div class="subscribe_container">
    <div class="dynamicInfo_container">
      <div class="dynamicInfo_head">
        <van-row type="flex">
          <van-col span="4">
            <van-image class="dynamicImgBox" width="50" height="50" round :src="data.userImg" />
          </van-col>
          <van-col span="14" style="padding-left:10px">
            <van-row type="flex" style="margin:5px 0;"><span>{{ data.dynamicUser }}</span></van-row>
            <van-row type="flex" style="margin:10px 0;"><span style="font-size:12px;color:gray">{{ data.subscibeNumber }}人关注了 ta</span></van-row>
          </van-col>
          <van-col span="6">
            <van-button class="subscribeBtn" round>关 注</van-button>
          </van-col>
        </van-row>
      </div>
      <div class="dynamicInfo_body">
        <div class="dynamicInfo_content">
          <span style="display:block;font-size:16px;padding:12px">{{ data.dynamicContent }}</span>
          <van-image style="margin-left:12px;" width="300" height="300" :src="data.dynamicImg" />
        </div>
      </div>
      <div class="dynamicInfo_footer">
        <div class="dynamicInfo_funErea">
          <div style="margin-top:10px">
            <van-icon class="funEreaIcon" slot="icon" class-prefix="goal" name="dianzan" size="16" />
            <span style="font-size:12px;margin-right:20px;">{{ data.likeCount }}</span>
            <van-icon class="funEreaIcon" slot="icon" class-prefix="goal" name="pinglun1" size="16" />
            <span style="font-size:12px;margin-right:20px;">{{ data.commentCount }}</span>
            <van-icon class="funEreaIcon" slot="icon" class-prefix="goal" name="shoucang" size="16" />
            <span style="font-size:12px;margin-right:20px;">{{ data.starCount }}</span>
          </div>
          <div style="padding-right:20px;margin-top:10px">
            <van-icon slot="icon" class-prefix="goal" name="fenxiangcopy" size="16" />
          </div>
        </div>
        <div class="dynamicInfo_comment">
          <span style="font-size:14px;padding:0 12px">{{ data.commentUser }}：</span>
          <span style="font-size:14px;color:gray">{{ data.commentContent }} </span><br>
          <span style="display:block;padding:12px;font-size:14px;color:gray;">查看全部评论</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscibeItem',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dynamicInfo_container{
  padding: 5px;
  margin-top: 5px;
  background-color: #fff;
}
.dynamicInfo_head{
  padding: 10px;
  font-size: 14px;
}
.dynamicImgBox{
  vertical-align: middle;
}
.subscribeBtn{
  margin-top: 10px;
  margin-left: 10px;
  font-size: 14px;
  width: 70px;
  height: 31px;
  background-color: rgba(47, 255, 64, 0.205);
  color: #5dc261;
  border-radius: 15.5px;
  line-height: 31px;
}
.dynamicInfo_content{
  background-color: #fff;
}
.dynamicInfo_funErea{
  display: flex;
  justify-content: space-between;
}
.dynamicInfo_comment{
  padding: 20px 0;
}
.funEreaIcon{
  margin:0 8px 0 12px;
}
</style>
