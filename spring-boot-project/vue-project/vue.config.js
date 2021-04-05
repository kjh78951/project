/**
 * outputDir은 npm run build로 빌드 시 파일이 생성되는 위치,
 * indexPath는 index.html 파일이 생성될 위치를 지정,
 * devServer는 Back-End , 즉 Spring Boot의 내장 was의 주소를 작성하면 됩니다.
 */
const webpack = require('webpack');

module.exports = {
  outputDir: "../src/main/resources/static",
  indexPath: "../static/index.html",  
  devServer: {  
    proxy: "http://localhost:8080"  
  },
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Vue Argon Design',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
