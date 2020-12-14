<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@media screen and (min-width:600px){
    #app{
        height: 100%;
        max-width: 600px;
        margin: 0 auto;
        background: rgb(234,236,235);
    }
}
html,body{
  height: 100%;
  background: rgb(234,236,235);
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba($color: #c8c8c8, $alpha: 1);
    &:hover {
      background-color: rgba($color: #a8a8a8, $alpha: 1);
    }
    &:active {
      background-color: rgba($color: #a8a8a8, $alpha: 1);
    }
  }
}
#layout {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow-y: hidden;
    overflow-x:hidden;
    background: white;
    & > div {
        width: 100%;
        min-height: 100vh;
    }
}
#frame {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow-x:hidden;
    overflow-y:hidden;
}
</style>
