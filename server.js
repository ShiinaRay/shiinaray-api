const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
// 允许跨域请求
// const cors = require('cors');
// app.use(cors());

app.all('*',function(req, res, next) {
    //处理跨域
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    //res.header("Content-Type","*");
    next();
})

//test axios bilibili api
// axios.get('https://api.bilibili.com/x/relation/stat?vmid=796556')
//     .then((response) => {
//         console.log(response);
//         console.log(response.data);
//         console.log(response.data.data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// 代理请求
// app.get('/api/stat', (req, res) => {
//     axios.get('https://api.bilibili.com/x/relation/stat?vmid=796556')
//         .then((response) => {
//             res.send(response.data.data);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// });

app.get('/stat/:uid', (req, res) => {
    axios.get('https://api.bilibili.com/x/relation/stat?vmid='+req.params.uid)
        .then((response) => {
            res.send(response.data.data);
        })
        .catch((error) => {
            console.error(error);
        });
});

// 启动代理服务器
app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});

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

module.exports = app;

