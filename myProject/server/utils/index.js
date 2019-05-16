const md5=require('md5')

module.exports.tokenCreator=function(uid){
     let jwt=JSON.stringify({
          alg:'md5',
          typ:"jwt",
          iss:'1610c',
          jti:uid,
          tim:new Date().getTime()
     })
     return md5(jwt)
}