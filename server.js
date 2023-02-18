// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const app = express();
// const port = 3001;
// // 允许跨域请求
// app.use(cors());
//
// app.all('*',function(req, res, next) {
//     //处理跨域
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Headers","X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1');
//     //res.header("Content-Type","*");  /**/
//     next();
// })
//
// // 代理请求
// app.get('/api/data', (req, res) => {
//     axios.get('https://api.example.com/data')
//         .then((response) => {
//             res.send(response.data);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// });
//
// app.post('/api/register', async (req, res) => {
//     //    console.log(req.body);
//
//     const users = await User.findOne({
//         username: req.body.username,
//         // password:req.body.password,
//     })
//     if (users) {
//         return res.send({
//             message: '该用户已存在'
//         })}
//     const user = await User.create({
//         username: req.body.username,
//         password: req.body.password,
//     })
//     res.send({
//         user,
//         message:'ok'
//     })
// })
//
// // 启动代理服务器
// app.listen(port, () => {
//     console.log(`Proxy server listening at http://localhost:${port}`);
// });






// app.use(require('cors')())// 处理跨域 ……
// app.get('/api/followers/:uid', async (req, res) => {
//     const uid = req.params.uid;
//     const response = await axios.get(`https://api.bilibili.com/x/relation/stat?vmid=${uid}`);
//     const data = response.data;
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
//     res.json({
//         followers: data.data.follower
//     });
// });
//


