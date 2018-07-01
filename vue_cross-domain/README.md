# vue_cross-domain

## Build Setup

``` bash
# create project
vue init webpack vue_cross-domain

# if you clone this project next ->
npm init

# serve with hot reload at localhost:8080
npm run dev
```

```bash
跨域接口地址: http://www.thenewstep.cn/test/testToken.php

参数: username, password

token: f4c902c9ae5a2a9d8f84868ad064e706

请求类型: post

请求头: Content-type:application/json
```

在 postman 中测试接口，当用接口地址 `http://www.thenewstep.cn/test/testToken.php` 时，显示

```bash
{
  "success": 0,
  "msg": "访问不合法！"
}
```

我们在 `body` 中新增两条数据，一条 `username`、一条 `password`，再次 send，显示 “token错误”。

我们在 headers 里设置一下 token，再访问接口，就正确了：

```bash
{
  "success": 1,
  "msg": "请求成功！"
}
```

## 配置

我们在 `App.vue` 中使用 `fetch`，但是会显示错误，不能跨域，所以我们查找一下跨域的方式--[proxytable](https://www.cnblogs.com/congxueda/p/7087144.html)

在 `config/index.js` 中配置 proxyTable：

```bash
proxyTable: {
  '/apis': {
    // 测试环境
    target: 'http://www.thenewstep.cn',  // 接口域名
    changeOrigin: true,  //是否跨域
    pathRewrite: {
      '^/apis': ''   //需要rewrite重写的,
    }
  }
}
```

配置之后重启项目。

```js
created() {
  // fetch
  fetch('/apis/test/testToken.php', {
    method: 'post',
    body: "hello"
  })
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data)
  })
}
```

`console.log(data)` 等到的结果是 `{success: 0, msg: "访问不合法！"}`

所以就像我们在 postman 中配置一样配置 fetch 内的内容。

所以完整的使用 fetch 请求跨域数据就是：

```bash
fetch('/apis/test/testToken.php', {
  method: 'post',
  headers: { token: 'f4c902c9ae5a2a9d8f84868ad064e706'},
  body: JSON.stringify({
    username: 'luyaj',
    password: '123123'
  })
})
.then(res => {
  return res.json()
})
.then(data => {
  console.log(data)
})
```

完整的使用 axios 实现跨域：

```js
import axios from 'axios'
axios.defaults.headers['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
axios.defaults.headers.post['Content-type'] = 'application/json'
Vue.prototype.$axios = axios

const info = {username: 'luyaj', password: '123123'}
this.$axios.post('/apis/test/testToken.php', info)
  .then(data => console.log(data))
```
