## JWT是什么
jwt (Json Web Token) 是一个规范，用于客户端和服务端传递安全可靠的信息。

## 首先了解cookie
1. 服务端通过设置Response.Headers中的Set-Cookie把cookie发送给客户端，其中可以设置HttpOnly保证客户端无法通过脚本访问cookie;
2. 客户端获取到cookie，在Request.Headers.Cookie中把cookie发送回服务器；
3. ajax请求会自动带上同源的cookie，不会带上不同源的cookie，需要前端设置withCredentials为ture,后端设置Header的方式让ajax带上不同源的cookie；

## jwt的组成部分
jwt主要由3个部分组成，分别为头部，载荷和签名
### 头部
头部用来描述jwt的基本信息，比如：
````javascript
{
  type: 'jwt',
  alg: 'sha256'
}
````
这里就包含了类型信息和数据是如何加密的信息

将此JSON进行base64的编码会成为一段字符串，就像这样
```
eyJ0eXBlIjoiand0IiwiYWxnIjoiQmFzZTY0LWhtYWNTSEEyNTYifQ==
```
这个字符串就是JWT的头部

### 载荷
````javascript
{
  iss: '', // 发行方
  sub: '', // 主题
  aud: '', // 接收方 
  exp: '', // 过期时间
  nbf: '', // not before 之前的时间不能处理，当前的时间必须是在这个时间之后
  iat: '', // 发行时间，创建时间
  jti: ''  // jwt id
}
````
这些选项都是可选的，你也可以加入自己想加入的数据，比如用户的id

这个JSON同样进行base64的编码，像Header一样，字符串作为JWT的载荷部分

### 签名
首先我们需要自定义一个字符串作为secret作为服务器的私钥，比如：'HelloWorldMilk'

我们把头部和载荷用 '.' 进行一个拼接，比如：头部.载荷

接下来用拼接过的字符串和secret进行一个加密处理，这个加密是不可逆的，比如sha256，加密过的字符串就是我们的签名了

最后再进行一个拼接，组成 **头部.载荷.签名** 这个就是完整的JWT了。

### 完成JWT之后的具体流程
1. 客户端发出登录请求;
2. 服务端进行账号密码验证通过后，把JWT通过Response.Headers.Set-Cookie发送给客户端，当然我们可以设置HttpOnly来提高这个cookie的安全性;
3. 客户端接收到cookie后每次发生请求都会携带此cookie；
4. 服务端接收到请求后验证jwt是否合法，过期。比如：对头部和载荷中的数据进行验证，然后把客户端的头部和载荷重新生成签名和之前的签名比对。

### 关于安全性
1. secret作为服务器的私钥是较为安全的，完全不暴露在客户端
2. 如果客户端恶意篡改头部和载荷，那么我们在服务器端接收到jwt时会重新对客户端jwt的头部，载荷进行重新的加密处理，如果和客户端传来的签名不同，那么可以确定信息被篡改，不接受请求即可

### nodejs相关代码
类型转换
````javascript
// string 类型转 base64
function StringToBase64 (params) {
  return new Buffer(params).toString('base64');
}

// base64 转 string
function Base64ToString (params) {
  return new Buffer(params, 'base64').toString();
}
````
相关包
1. 加密：[crypto-js](https://github.com/brix/crypto-js)
2. [jwt-simple](https://github.com/hokaccha/node-jwt-simple)

### 参考文档
1. [JWT](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32)
2. [JSON Web Token - 在Web应用间安全地传递信息](http://blog.leapoahead.com/2015/09/06/understanding-jwt/)
3. [八幅漫画理解使用JSON Web Token设计单点登录系统](http://blog.leapoahead.com/2015/09/07/user-authentication-with-jwt/)
4. [Header Set-Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie)
5. [Header Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cookie)
6. [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)

