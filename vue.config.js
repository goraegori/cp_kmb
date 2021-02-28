const fs = require('fs')

module.exports = {
  pwa: {
    name: '국방모바일보안',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    appleMobileWebAppCapable:'yes'
  },
  devServer:{
    host:'0.0.0.0',
    public: 'doudo.kr:8080',
    disableHostCheck:true,
    https: true,
    https: {
      key: fs.readFileSync('../cert/privkey.pem'),
      cert: fs.readFileSync('../cert/cert.pem'),
      ca: fs.readFileSync('../cert/chain.pem'),
    },
  },
	outputDir:'docs',
	publicPath:'',
  transpileDependencies: [
    'vuetify'
  ]
}
