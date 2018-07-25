let router = require('koa-router')();
let db = require("./sql/async_db");

let query = db.query; 
async function queryUser(uname, upwd) {
    let sql = "select * from userinfo where uname = ? and upwd = ?" ;
    let user = await query(sql, [uname, upwd]);
    return user;
}

router.post("/api/welcome", async(ctx)=>{
    let uname = ctx.request.body.name;
    let upwd = ctx.request.body.pwd;
    let user = await queryUser(uname, upwd);
    console.log(user);
    if(user !== undefined){
        ctx.body = "welcome !";
    }else{
        ctx.body = -1;
    }
});

module.exports = router ;