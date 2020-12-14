/*
 * @Author: 吴晓斌
 * @Date: 2020-11-03
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-03 16:35:00
*/
//我的-功能分类

<template>
  <div class="category_container">
    <div class="gird--container">
      <van-grid :column-num="4" class="gird--item">
        <van-grid-item :to="'/myCourse'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#goal-_fileguanli" />
          </svg>
          <div class="gird--font">我的课程</div>
        </van-grid-item>
        <van-grid-item :to="'/myPlan'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#goal-_zixun" />
          </svg>
          <div class="gird--font">我的计划</div>
        </van-grid-item>
        <van-grid-item :to="'/myActivity'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#goal-_rili" />
          </svg>
          <div class="gird--font">我的活动</div>
        </van-grid-item>
        <van-grid-item :to="'/myCollection'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#goal-_shoucang1" />
          </svg>
          <div class="gird--font">我的收藏</div>
        </van-grid-item>
        <van-grid-item :to="'/myGoal'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#goal-_dingwei" />
          </svg>
          <div class="gird--font">我的目标</div>
        </van-grid-item>
        <van-grid-item :to="'/myWallet'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#goal-_fukuan" />
          </svg>
          <div class="gird--font">我的钱包</div>
        </van-grid-item>
        <van-grid-item :to="'/myOrder'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#goal-_dingdan" />
          </svg>
          <div class="gird--font">我的订单</div>
        </van-grid-item>
        <van-grid-item :to="'/helpCenter'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#goal-_kefu" />
          </svg>
          <div class="gird--font">帮助中心</div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'category',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.category_container{
  background: #ffffff;
  border: 1px solid rgba(206, 206, 206, 0.5);
}
.gird {
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
  &--font {
    margin-top: 10px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
  }
}
.icon {
  width: 30px;
  height: 30px;
}
</style>
