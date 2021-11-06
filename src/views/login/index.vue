<template>
  <div class="login-container">
    <!-- 頂部導航欄 -->
    <van-nav-bar
      class="app-nav-bar"
      title="註冊 / 登入"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /頂部導航欄 -->

    <!-- 登入表單 -->
    <!--
      基於Vant的表單驗證:
      1. 使用 van-form組件 包裹所有的 表單項van-field
      2. 給van-form綁定submit事件, 當表單提交的時候會觸發submit事件
      3. 只有表單驗證通過, 才會去調用submit
      4. 使用Field的rules屬性定義校驗規則
    -->
    <van-form @submit="onLogin">
      <van-field
        v-model="user.mobile"
        label="手機號"
        left-icon="phone-o"
        placeholder="請輸入手機號"
      />
      <van-field
        v-model="user.code"
        label="驗證碼"
        left-icon="award-o"
        placeholder="請輸入驗證碼"
      >
        <template #button>
          <van-button
            class="send-btn"
            size="small"
            rond
          >發送驗證碼</van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button
          class="login-btn"
          type="info"
          block
          >登入</van-button>
      </div>
    </van-form>
    <!-- /登入表單 -->

  </div>
</template>

<script>
import { login } from '@/api/user'
import { Toast } from 'vant'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手機號
        code: '' // 驗證碼
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin () {
      Toast.loading({
        message: '登入中...', // 提示文本
        forbidClick: true, // 禁止背景點擊
        duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
      })
      // 1. 找到數據接口
      // 2. 封裝請求方法
      // 3. 請求調用登入
      try {
        const res = await login(this.user)
        // 4. 處理響應結果
        console.log('登入成功', res)
        Toast.success('登入成功')
      } catch (err) {
        console.log('登入失敗', err)
        Toast.fail('登入失敗, 手機號或驗證碼錯誤')
      }
    }
  }
}
</script>

<style scoped lang="less">
  .login-container {
    .send-btn {
      width: 76px;
      height: 23px;
      background-color: #ededed;
      .van-button__text {
        font-size: 11px;
        color: #666666;
      }
    }
    .login-btn-wrap {
      padding: 26px 16px;
      .login-btn {
        background-color: #6db4fb;
        border: none;
        .van-button__text {
          font-size: 15px;
        }
      }
    }
  }
</style>
