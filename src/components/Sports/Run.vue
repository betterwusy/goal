/*
 * @Author: 吴晓斌
 * @Date: 2020-11-04
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-04
*/
//运动-跑步

<template>
  <div class="run_container">
    <div class="record_container">
      <div class="title">
        <span>累计跑步距离 </span>
        <van-icon slot="icon" class-prefix="goal" name="arrow-right" size="18"/>
      </div>
      <div class="recordNumber">
        <van-row type="flex">
          <van-col span="18">
            <span style="font-size:40px;font-weight:bold;">1702.34</span>
            <span> 公里</span>
          </van-col>
          <van-col>
            <span style="color:gray;line-height:60px;">等级 R8</span>
          </van-col>
        </van-row>
      </div>
      <div>
        <van-progress :percentage="80" stroke-width="4" :show-pivot="false" color="#5dc261"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Sports',
  data () {
    return {
      sportRanking: 1,
      userImg: require('../../assets/touxiang.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.run_container{
  padding: 20px;
  background-color: #fff;
}
.record_container{
  height: 100px;
}
.title, .recordNumber{
  margin-top: 10px
}
</style>
