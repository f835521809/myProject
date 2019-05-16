<template>
  <div class="wraper">
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <FormItem label="用户名" prop="username">
        <Input type="text" v-model="formCustom.username"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input type="password" v-model="formCustom.password"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formCustom')">登录</Button>
        <Button  style="margin-left: 8px"  @click="handlezhuce('formCustom')">注册</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { Button, Form, FormItem, Input, Icon } from "iview";
import "iview/dist/styles/iview.css";
import axios from "axios";

const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please enter your password"));
  } else {
    callback();
  }
};
const validateUsername = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please enter your username"));
  } else {
    callback();
  }
};

export default {
  name: "Login",
  components: {
    Button,
    Form,
    FormItem,
    Input,
    Icon
  },
  data() {
    return {
      formCustom: {
        username: "",
        password: ""
      },
      ruleCustom: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      console.log(this.formCustom.password);
      this.$refs[name].validate(valid => {
        if (valid) {
          axios
            .get("http://localhost:3000/login", {
              params: {
                username: this.formCustom.username,
                password: this.formCustom.password
              }
            })
            .then(res => {
              console.log(res);
              alert(res.data.msg);
            });
        } else {
          console.log("Fail!");
        }
      });
      this.$router.push({path:'/Page'})

    },
    handlezhuce(name) {
      console.log(this.formCustom.password);
      this.$refs[name].validate(valid => {
        if (valid) {
          axios
            .get("http://localhost:3000/zhuce", {
              params: {
                username: this.formCustom.username,
                password: this.formCustom.password
              }
            })
            .then(res => {
              console.log(res);
              alert(res.data.msg);
            });
        } else {
          console.log("Fail!");
        }
      });
    }
  }
};
</script>

<style>
.wraper {
  padding: 0 15px;
}
.ivu-form {
  margin-top: 25px;
}
</style>
