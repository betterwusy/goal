/*
 * @Author: 吴晓斌
 * @Date: 2020-11-01
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-01 18:50:00
*/
//首页-动态-类别

<template>
  <div class="category_container">
    <div class="gird--container">
      <van-grid :column-num="4" class="gird--item">
        <van-grid-item :to="'/allCourses'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#goal-ziyuan5" />
          </svg>
          <div class="gird--font">全部课程</div>
        </van-grid-item>
        <van-grid-item :to="'/hotTopic'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#goal-jiaoliu" />
          </svg>
          <div class="gird--font">热议话题</div>
        </van-grid-item>
        <van-grid-item :to="'/encyclopediaKnowledge'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#goal-ziyuan" />
          </svg>
          <div class="gird--font">百科知识</div>
        </van-grid-item>
        <van-grid-item :to="'/urbanDynamics'">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#goal-ziyuan8" />
          </svg>
          <div class="gird--font">同城动态</div>
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
  width: 40px;
  height: 40px;
}
</style>
