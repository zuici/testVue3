module.exports = {
  configureWebpack:{
      resolve:{
         alias: {
            //已经配置@ 为src
            'assets':'@/assets',
            'components':'@/components',
            'mock':'@/mock',
            'network':'@/network',
            'pages':'@/pages',
            'views':'@/views'
         }
      }
  }
}