/**
 * PostCSS的配置文件
 * PostCSS是基於Node.js運行的一個處理CSS的工具
 * 所以它的配置文件也是運行在Node.js中
 */

// PostCSS配置文件需要導出一個對象
module.exports = {
  // 配置要使用的相關插件
  plugins: {
    // // 自動添加瀏覽器廠商聲明前綴，用來兼容不同的瀏覽器
    // // VueCLI已經在內部默認配置了autoprefixer
    // autoprefixer: {
    //   // browsers用來配置要兼容到的系統(瀏覽器)環境
    //   browsers: ['Android >= 4.0', 'ios >= 8']
    // },
    // 把px轉成rem
    'postcss-pxtorem': {
      // 設定轉換的根元素基準值 (一般設定為 寬/10)
      // 移動端頁面一般都是以iphone 6/7/8(邏輯像素 寬375點)為原型設計的
      // 1個點(邏輯像素) = 2個像素(物理像素)
      // Vant組件庫是基於 邏輯像素 寬375點 寫的
      // 所以實際上 整體還是基於 物理像素 寬750像素 設計的
      rootValue: 37.5,
      // 指定需要轉換的CSS屬性，'*'就是所有屬性都要轉換
      propList: ['*']
    }
  }
}
