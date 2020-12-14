// vue.config.js
module.exports = {
  publicPath: '/', // 根路径
  outputDir: 'goal', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
  devServer: {
    host: 'localhost',
    port: 5418,
    open: true // 配置自动启动浏览器
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/_settings.scss";'
      }
    },
    requireModuleExtension: true
  }
}
