const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require("./config/key.js").mongoURL;
const user = require("./routes/api/user");
const bodyParser = require('body-parser');

const port = process.env.port || 5000;

//数据库连接
mongoose.connect(db,{useNewUrlParser:true}).then(()=>{
    console.log("数据库连接顺利");
}).catch((error) =>{
    console.log(error);
});
// 解析 application/json
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});
//router
app.get("/",(req,res) => {
    res.send("hello world");
})
app.use("/api/user",user);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
