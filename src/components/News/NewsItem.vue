/*
 * @Author: 吴晓斌
 * @Date: 2020-11-04
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-04 15:01:00
*/
//新闻-新闻Item

<template>
  <div class="newsItem_container">
    <div class="newsInfo_container">
      <van-row type="flex">
        <van-col span="16">
          <div style="height:50px;padding:5px;">
            <span class="van-multi-ellipsis--l2" style="font-size:18px">{{ data.title }}</span>
          </div>
          <div style="padding:5px;">
            <van-row type="flex">
              <van-col span="8"><span style="font-size:12px;color:gray;">{{ data.commentCount }}评论</span></van-col>
              <van-col span="14"><span style="font-size:12px;color:gray;">{{ data.publishTime }}前</span></van-col>
              <van-col><div><van-icon slot="icon" class-prefix="goal" name="chacha" size="12" /></div></van-col>
            </van-row>
          </div>
        </van-col>
        <van-col span="8">
          <van-image style="margin-left:10px" width="100" height="80" :src="data.newsPic"></van-image>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
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
.newsItem_container{
  width: 100%;
  background-color: #fff;
}
.newsInfo_container{
  width: 90%;
  padding: 10px 0;
  margin: 0 auto;
  border-bottom: 1px solid lightgray
}
</style>
