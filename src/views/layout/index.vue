<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <!-- /子路由出口 -->

    <!-- 底部導航欄 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首頁</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/qa/">問答</van-tabbar-item>
      <van-tabbar-item icon="video-o" to="/video/">視頻</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my/">我的</van-tabbar-item>
    </van-tabbar>
    <!-- /底部導航欄 -->
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
