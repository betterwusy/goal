/*
 * @Author: 吴晓斌
 * @Date: 2020-11-01
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2020-11-01 14:00:00
*/
//公共组件-底部导航栏

<template>
  <div class="navbar--container">
    <transition name="fade" mode="out-in">
      <router-view /> <!-- 路由匹配到的组件将显示在这里 -->
    </transition>
    <!--底部导航栏-->
    <div class="fixed_tabbar--container">
      <van-tabbar active-color="#000" inactive-color="gray" route :fixed="false" class="fix_pc--container">
        <van-tabbar-item to="/index">
          <span>首页</span>
          <template #icon>
            <van-icon slot="icon" class-prefix="goal" name="shouye" size="25" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/plan">
          <span>计划</span>
          <template #icon>
            <van-icon slot="icon" class-prefix="goal" name="jihua" size="25" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/sports">
          <span>运动</span>
          <template #icon>
            <van-icon slot="icon" class-prefix="goal" name="yundong" size="25" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/news">
          <span>新闻</span>
          <template #icon>
            <van-icon slot="icon" class-prefix="goal" name="xinwen1" size="25" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/user">
          <span>我的</span>
          <template #icon>
            <van-icon slot="icon" class-prefix="goal" name="wode" size="25" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomNav'
}
</script>

<style lang="scss" scoped>
.fixed_tabbar--container{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
.fix_pc--container{
  max-width: 600px;
  margin: 0 auto;
}
</style>
