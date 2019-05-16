<template>
 <div>
   <div class="ul">
       <router-link to="/view/shouye" tag="dl" active-class="active">
          <dt><i class="iconfont icon-shouye"></i></dt>
          <dd>首页</dd>
       </router-link>
       <router-link to="/view/shop" tag="dl" active-class="active">
          <dt><i class="iconfont icon-gouwuche"></i></dt>
          <dd>购物车</dd>
       </router-link>
       <router-link to="/view/mine" tag="dl" active-class="active">
          <dt><i class="iconfont icon-weibiaoti2fuzhi12"></i></dt>
          <dd>我的</dd>
       </router-link>
   </div>
 </div>
</template>

<script>
import "../../static/font/iconfont.css";
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.ul {
  width: 100%;
  height: 50px;
  background: #ccc;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  dl {
    text-align: center;
    dt i {
      font-size: 20px;
    }
    dd {
      font-size: 15px;
    }
  }
}
.active {
  color: aqua;
}
</style>
