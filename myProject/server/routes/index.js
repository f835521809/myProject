var express = require('express');
var router = express.Router();
var mongo = require("mymongo1610")
/* GET home page. */
router.get('/login', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://localhost:8080')
  mongo.find('login', { username: req.query.username }, function (err, result) {
    if (err) {
      res.json({ code: 0, msg: error })
    } else {
      if (result.length == 0) {
        res.json({ msg: "没有该用户，请先注册" })
      } else {
        mongo.find('login', req.query, function (err, result) {
          if (err) {
            res.json({ code: 0, msg: error })
          } else {
            if (result.length > 0) {
              res.json({ msg: "登陆成功" })
            } else {
              res.json({ msg: "用户名或密码错误" })
            }
          }
        });
      }
    }
  });
});

router.get('/zhuce', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://localhost:8080')
  mongo.find('login', { username: req.query.username }, function (err, result) {
    if (err) {
      res.json({ code: 0, msg: "error" })
    } else {
      if (result.length > 0) {
        res.json({ msg: "用户名被占用，请重新输入" })
      } else {
        mongo.insert("login", req.query, function (err) {
          if (err) {
            res.json({ code: 0, msg: error })
          } else {
            res.json({ code: 1, msg: "注册成功" })
          }
        })
      }
    }
  });
});

router.get('/api/getconfig',function(req,res){
     res.json({
           code:0,
           msg:'成功'
     })
})

router.post('/api/postconfig',function(req,res){
  res.json({
        code:0,
        msg:'失败'
  })
})

module.exports = router;

