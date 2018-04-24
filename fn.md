一个数组 par 中存放有多个人员的信息，每个人员的信息由年龄 age 和姓名 name 组成，如{age: 2, name: 'xx'}。请写一段 JS 程序，对这个数组按年龄从小到大进行排序。


let par = [
    {
        age: 12,
        name: 'John'
    },
    {
        age: 11,
        name: 'Doe'
    },
    {
        age: 5,
        name: 'Jame'
    }
]

function sort(a, b) {
    return a < b ? a : b
}

let sorted = []
for (let i = 0; i++; i <= par.length -1) {

}
