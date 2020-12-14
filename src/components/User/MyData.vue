/*
 * @Author: 吴晓斌
 * @Date: 2020-11-02
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-02 21:50:00
*/
//我的-运动/健康数据

<template>
  <div class="myData_container">
    <div class="myMotionData_container">
      <div style="display:flex;justify-content: space-between;">
        <span style="font-size:18px">运动数据</span>
        <van-icon slot="icon" class-prefix="goal" name="arrow-right" size="16" />
      </div>
      <div style="margin:10px 0"><span style="color:gray;font-size:12px">总运动</span></div>
      <div>
        <span style="font-weight:bold;font-size:20px">{{ mydata.exerciseTime }}</span>
        <span style="font-size:14px"> 分钟</span>
      </div>
      <div style="margin:10px 0"><span style="color:gray;font-size:10px">本周消耗 {{ mydata.caloriesConsumption }} 千卡</span></div>
    </div>
    <div class="myHealthData_container">
      <div style="display:flex;justify-content: space-between;">
        <span style="font-size:18px">健康数据</span>
        <van-icon slot="icon" class-prefix="goal" name="arrow-right" size="16" />
      </div>
      <div style="margin:10px 0"><span style="color:gray;font-size:12px">心率</span></div>
      <div>
        <span style="font-weight:bold;font-size:20px">{{ mydata.heartRate }}</span>
        <span style="font-size:14px"> 次/分</span>
      </div>
      <div style="margin:10px 0"><span style="color:gray;font-size:10px">上次记录 {{ mydata.lastRecord }} 天前</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'category',
  data () {
    return {
      mydata: {
        exerciseTime: 8158,
        caloriesConsumption: 476,
        heartRate: 107,
        lastRecord: 8
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.myData_container{
  margin-top: 2px;
  display: flex;
  justify-content: space-around;
}
.myMotionData_container, .myHealthData_container{
  background: #ffffff;
  padding: 20px 20px;
  width: 50%;
  border: 1px solid rgba(206, 206, 206, 0.5);
  border-radius: 10px;
}
</style>
