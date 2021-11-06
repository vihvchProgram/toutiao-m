module.exports = {
  pages: {
    index: {
      // 入口
      entry: 'src/main.js'
    }
  },
  // lintOnSave: false, // 關閉語法檢查
  // 開啟代理服務器
  devServer: {
    before: function (app) {
      app.get('get_data', (req, res) => {
        res.send({
          mobile: '',
          code: ''
        })
      })
    },
    proxy: {
      '/ate': {
        target: 'http://localhost:8000',
        // target: 'http://ttapi.research.itcast.cn',
        // target: 'http://app-message.itcast.cn',
        // target: 'https://toutiao.m.lipengzhou.com',
        // 用於重寫路徑 (透過 正則匹配條件)
        pathRewrite: {
          '^/ate': ''
        },
        // 用於支持websocket
        ws: true,
        // 用於控制請求頭中的host值
        changeOrigin: true
      }
    }
  }
}
