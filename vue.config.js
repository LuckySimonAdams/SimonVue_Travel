const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '~styles': path.resolve('src/assets/styles')
        // '~images': path.resolve('src/assets/images')
      }
    }
  }
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:80'
  //     }
  //   }
  // }
}
