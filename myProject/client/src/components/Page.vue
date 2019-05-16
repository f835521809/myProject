<template>
    <div class="box">
        <dl v-for="(val,i) in shopcarlist"
            :key="i">
  <span class="checkbox" :class="{checked:opencheckbox[i].open}"
                @click="onecheck(i)"></span>
           <dd>               
           <img src="http://lkhuploadimage.oss-cn-beijing.aliyuncs.com/product/5%E4%BB%B6%E5%A5%97.jpg">
          </dd>
           <dt>
                    <span>{{val.title}}</span>
                    <p>{{val.price}}元</p> 
                <div>
                    <button @click="reduce(i)">-</button>
                    <span>{{val.num}}</span>
                    <button @click="add(i)">+</button>
                </div>
           </dt>
        </dl>
        <div class="num">
            <span class="checkbox" :class="{checked:allcheckopen}" @click="allcheck"></span>全选 共计￥{{sumprice}}
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      shopcarlist: [
        { title: "糖", price: 3, id: 4, num: 5 },
        { title: "玉米", price: 5, id: 1, num: 17 },
        { title: "辣条", price: 3, id: 2, num: 6 }
      ],
      opencheckbox: [],
      allcheckopen: false,
      sumprice: 0
    };
  },
  created() {
    this.shopcarlist = JSON.parse(localStorage.getItem("shopcar")) || [];
    this.opencheckbox = this.shopcarlist.map(item => ({
      open: false,
      price: item.price * item.num
    }));
  },
  methods: {
    reduce(i) {
      let obj = this.shopcarlist[i];
      obj.num--;
      obj.num = obj.num <= 1 ? 1 : obj.num;
      this.setdata(i);
    },
    add(i) {
      let obj = this.shopcarlist[i];
      obj.num++;
      this.setdata(i);
    },
    setdata(i) {
      this.opencheckbox[i].price =
        this.shopcarlist[i].num * this.shopcarlist[i].price;
      this.addsumprice();

      localStorage.setItem("shopcar", JSON.stringify(this.shopcarlist));
      this.bus.$emit("chagenum");
    },
    allcheck() {
      this.allcheckopen = !this.allcheckopen;
      this.opencheckbox.forEach(item => {
        item.open = this.allcheckopen;
      });
      this.addsumprice();
    },
    onecheck(i) {
      this.opencheckbox[i].open = !this.opencheckbox[i].open;
      this.allcheckopen = this.opencheckbox.every(item => item.open);
      this.addsumprice();
    },
    addsumprice() {
      this.sumprice = 0;
      this.opencheckbox.forEach(item => {
        if (item.open) {
          this.sumprice += item.price;
        }
      });
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.box dl {
  display: flex;
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
}
.box dl dd {
  margin-left: 15px;
}
.box dl dt {
  margin-left: 15px;
}
.box dl dt p{
   font-size: 18px;
   font-weight: bold;
}
.checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
}
button {
  width: 20px;
  height: 20px;
}
.checked {
  background: #000;
}
img {
  width: 100px;
  height: 100px;
}
.num {
  margin-top: 10px;
  background: peru;
  height: 40px;
  line-height: 40px;
}
</style>

