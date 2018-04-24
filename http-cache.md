

---------------------------------->
第一次
<----------------200---------------
RES:
Expires/Cache-Control (同时设置 Cache-Control > Expires)
Last-Modified
Etag



刷新页面触发请求，去找一个资源(URL地址不变时候)
计算 Cache-Control 和本地时间是否超时
不超时 -> 取强缓存
-------------不发请求------------->



如果已超时 -> 发生请求
---------------------------------->
REQ:
If-Modified-Since: Last-Modified
If-None-Match: Etag

<----------------304---------------



---------------------------------->
REQ:
If-Modified-Since: Last-Modified
If-None-Match: Etag

<----------------200---------------


https://www.cnblogs.com/lyzg/p/5125934.html#_label0
https://segmentfault.com/a/1190000009005195?utm_source=tag-newest

文章收集
https://segmentfault.com/a/1190000010433473
