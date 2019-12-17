const path = require('path')

module.exports = {
  publicPath: './', // 避免打包运行一片空白
  configureWebpack: {
    resolve: {
      alias: {
        '~styles': path.resolve('src/assets/styles'),
        '~components': path.resolve('src/components')
        // '~images': path.resolve('src/assets/images')
      }
    },
    devServer: {
      host: '0.0.0.0',
      port: 9000,
      proxy: {
        '/api': {
          // 本地模拟数据
          /* target: 'http://localhost:8080',
          pathRewrite: {
            '^/api': '/mock'
          } */
          // 后端真实数据
          target: 'http://192.168.0.108:8080',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/SimonVue_Travel_Mock'
          }
        }
      }
    }
  }
}
