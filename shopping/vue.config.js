// 修改别名
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'assets': '@/assets',
      }
    }
  }

}
