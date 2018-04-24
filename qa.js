/*
* @Author: WUZHILONG860
* @Date:   2018-03-02 15:47:40
* @Last Modified by:   WUZHILONG860
* @Last Modified time: 2018-03-02 16:01:22
*/
var a = 100;
function fn() {
    alert(a);
    var a = 200;
    alert(a);
}
fn();
alert(a);

// var a;
// a = 100
// fn = ()
//     var a;
//     alert(a)
//     a = 200
//     alert(a)
// alert(a)

var obj1 = {name: 'obj1', fn: function() {
    console.log(this.name);
}};
var obj2 = {name: 'obj2'};
var obj3 = {name: 'obj3'};
obj1.fn();
var newFn = obj1.fn;
newFn();
newFn.call(obj2);
obj3.fn = newFn;
obj3.fn();

var obj1 = undefined
var obj2 = undefined
var obj3 = undefined
var newFn = undefined
obj1 = {name: 'obj1', fn: function() {
    console.log(this.name);
}};
obj2 = {name: 'obj2'};
obj3 = {name: 'obj3'};
obj1.fn(); // callside - obj1 ==> 'obj1'
newFn = obj1.fn;
newFn(); // callside - window ==> window.name(empty string)
newFn.call(obj2); // callside - obj2 ==> 'obj2'
obj3.fn = newFn;
obj3.fn(); // callside - obj3 ==> 'obj3'






