基本数据类型：
    String
    Number
    Boolean
    Undefined
    Null

引用数据类型：
    Object
    Array
    Set - ES6

如何判断是否为 array 类型？
```
    function isArray() {
        if ( typeof Array.isArray === 'undefined' ) {
            Array.isArray = function( arg ) {
                return Object.prototype.toString.call(arg) === '[object Array]'
            }
        }
    }
```

JS 的事件流模型
    - 事件冒泡
    - 事件捕捉
    - DOM 事件流

实现 extend(), bind()


