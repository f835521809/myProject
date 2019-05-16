<template>
    <div>
       <div class="box">
           <dl @click="jump">
               <dd>
                   <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1399278012,453658987&fm=26&gp=0.jpg" alt="">
               </dd>
               <dt>注册/登录</dt>
           </dl>
       </div>  
      
       <ul>
         <li>我的账号</li>
         <li>修改密码</li>
         <li>修改账号</li>
         <li>我的订单</li>
         <li>续交租金</li>
         <li>合同续签</li>
        </ul> 
    </div>
</template>
<script>
export default {
  methods: {
    jump() {
      this.$router.push({ path: "/Login" });
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #fb6f21, #f36537, #ef5e43);
  margin: 0 auto;
}
.box dl {
  width: 100%;
  text-align: center;
}

.box dl dd img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: 25px;
}
.box dl dt {
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  color: #fff;
}
ul {
  width: 100%;
  height: 100%;
  padding: 0 15px;
}
ul li {
  height: 44px;
  border-bottom: 1px solid #ccc;
  line-height: 44px;
  font-weight: bold;
}
</style>
