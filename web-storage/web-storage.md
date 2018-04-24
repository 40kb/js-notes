`cookie` `session` `sessionStorage` `localStorage` `indexDB`

跨域限制? cookie sessionStorage localStorage indexDB
大小?
优点?
特点?
  cookie
    每次发送 HTTP/S 请求，不管是真的什么资源都会自动带上 cookie。
    不能存敏感信息，浏览器端获取cookie很容易（非要存那就得加密）
    整个浏览器都可以数据共享（存在磁盘上）
    cookie有path概念，子路径可以访问父路径 cookie，父路径不能访问子路径 cookie
    cookie在设置的有效期内有效，默认为浏览器关闭
    cookie在同源且符合path规则的文档之间共享

  sessionStorage
    是用户从打开回话窗到关闭会话窗这一段时间有效，关闭之后存的数据就会被删除（只有当前窗口共享数据）

  localStorage
    localStorage 会一直存在浏览器中 除非人工清除
    整个浏览器都可以数据共享（存在磁盘上）
    localStorage在同源文档之间共享


缺点?
应用?
  cookie 用作身份认证（第一次请求服务器时候，服务器会写一个身份ID，后面再请求服务器时候，服务器会根据这个身份ID来辨别用户）


`Web Storage` 能够解决用户开启多个 "浏览器窗口/标签" 的同步问题

### cookie
通常网站为了辨别用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
通常第一次请求服务器给客户端浏览器发送了一个 Cookie，浏览器以后的每次请求中都会自动带着这个 Cookie 上来。


sessionStorage是设计用来保存浏览器会话这个时间段的客户端数据的。换句话说数据只在用户还在网站浏览的时候才保存起来。

https://hongqinma.github.io/2016/11/01/s012-Cookie%E3%80%81Session-%E5%AD%98%E5%82%A8/