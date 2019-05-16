<template>
<div>
  <div class="wrapper">
        <swiper :options="swiperOption" class="swiper-container" >
        <!-- slides -->
        <swiper-slide class="swiper-item" v-for='item of banner' :key='item.id'>
            <img class='swiper-img' :src='item.image' />
        </swiper-slide>
    </swiper>
  </div>
  <div class="test">
      <div class="testNav">
        <div
          :class="{'selected':tab === 1,'testTitle':true}"
          @click="changTab(1)"
        >人气</div>
        <div
          :class="{'selected':tab === 2,'testTitle':true}"
          @click="changTab(2)"
        >销量</div>
        <div
          :class="{'selected':tab === 3,'testTitle':true}"
          @click="changTab(3)"
        >综合</div>
      </div>
      <div class="container">
          <div v-if="tab===1">
              <div v-for="item in list" :key="item.id" class="dls">
                 <img :src="item.PicFile">
                 <h2>{{item.Name}}</h2>
                 <h4>{{item.Description}}</h4>
                 <span>{{item.Rent}}元</span>
                 <button @click="btn(item)">加入购物车</button>
              </div>
          </div>
          <div v-if="tab===2">
              <dl v-for="item in list1" :key="item.id" class="uls">
                <dd>
                  <img :src="item.photos">
                </dd>
                <dt>
                  <h4>{{item.productName}}</h4>
                  <p>{{item.subTitle}}</p>
                </dt>
              </dl>
          </div>
          <div v-if="tab===3">
               <dl v-for="item in list2" :key="item.id" class="uls">
                <dd>
                  <img :src="item.photos">
                </dd>
                <dt>
                  <h4>{{item.productName}}</h4>
                  <p>{{item.subTitle}}</p>
                </dt>
              </dl>
          </div>
        </div>
       </div>
</div>

</template>
 <script src="//cdn.bootcss.com/vue/2.1.0/vue.js" type="text/javascript" charset="utf-8"></script>
<script src="//cdn.bootcss.com/vue-resource/1.0.3/vue-resource.js" type="text/javascript" charset="utf-8"></script>
<script>
import "swiper/dist/css/swiper.css";
import Footer from './Footer'
import { constants } from 'fs';
export default {
  data() {

    return {
      tab: 1,
      banner: [],
      list: [],
      list1: [],
      list2: [],
      swiperOption: {
        //循环
        loop: true,
        //每张播放时长3秒，自动播放
        autoplay: 2000,
        //滑动速度
        speed: 1000
        // delay:1000
      }
    };
   
  },

  created() {
    this.$http
      .get("http://39.105.98.45/api/v1/banners/bannerList")
      .then(function(data) {
        this.banner = data.body.data.currentUser;
      });
    this.$http
      .get("http://39.105.98.45/api/v1/product/setMealInfoList")
      .then(function(data) {
        this.list = data.body.data.currentUser;
      });
    this.$http
      .post("http://39.105.98.45/api/v1/product/productList?isHot=0")
      .then(function(data) {
        this.list1 = data.body.data.currentUser;
      });
    this.$http
      .post("http://39.105.98.45/api/v1/product/productList?isHot=1")
      .then(function(data) {
        this.list2 = data.body.data.currentUser;
      });
  },
  methods: {
    changTab(index) {
      this.tab = index;
    },
    btn(item){
       var id=item.ID;
       this.$router.push({path:'/Login'})
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  flex: 1;
}

.swiper-item {
  width: 100%;
  height: 100%;
}

.swiper-img {
  width: 100%;
}
.nav {
  margin-top: 10px;
}
.test {
  width: 100%;
  margin-top: 5px;
}
.testNav {
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  display: flex;
}
.testTitle {
  flex: 1;
  text-align: center;
  font-size: 20px;
}
.selected {
  color: #87caee;
  border-bottom: 3px solid #87caee;
}
.dls {
  width: 100%;
  margin-top: 15px;
  border: 1px solid #ccc;
}
.dls img {
  width: 100%;
}
.dls h2 {
  margin-top: 10px;
}
.dls h4 {
  margin-top: 5px;
  font-size: 15px;
}
.uls {
  width: 97%;
  display: flex;
  padding-top: 16px;
  padding-bottom: 24px;
  padding-left: 11px;
}

.uls dd img {
  width: 100%;
  height: 100%;
}
.uls dt {
  margin-left: 15px;
}
</style>
