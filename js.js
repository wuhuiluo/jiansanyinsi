// call 判断数据类型 类数组转为数组

// const array = [1,2,3,4]
// const type = Object.prototype.toString.call(array)
// console.log(type) // [object Array]
// const array1 = {0: 'qwe',1: '12',length: '2'}
// const res = Array.prototype.slice.call(array1)
// console.log(res)

// indexOf 查找目标项返回下标 -1
// filter []
// sort   []
// reduce []
// push   length

// const array = [1,2,3,4]
// const res = array.indexOf(2) // 1
// console.log(res)
// const filterArray = array.filter((item,index) => {
//     return item % 2 === 0
// })
// console.log(filterArray)
// const sortAry = array.sort((a,b) => {
//     return b - a
// })
// console.log(sortAry)
// const reduceArray = array.reduce((prev,current,currentIndex,sourceAry) => {
//     return prev + current
// })
// console.log(reduceArray)
// const pushAry =  array.push(1)
// console.log(pushAry,array)

// const shuzu = [1,2,3,4,4,2,3]
// function unique(array) {
//     return Array.from(new Set(array))
// }
// const res = unique(shuzu)
// console.log(res)
// function unique(array) {
//     return [...new Set(array)]
// }
// const res = unique(shuzu)
// console.log(res)
// function unique(array) {
//     if(!Array.isArray(array)) {
//         throw new Error('not araray')
//     }
//     return array.filter((item,index) => {
//         return array.indexOf(item) === index
//     })
// }
// function unique(array) {
//     array = array.sort()
//     console.log(array)
//     let res = []
//     for(let i = 0 ; i < array.length ; i++) {
//         console.log(array[i])
//         if(array[i] !== array[i-1]) {
//             res.push(array[i])
//         }
//     }
//     return res
// }

// const res = unique(shuzu)
// console.log(res)

// const array = [
//   { name: "whl", age: "20" },
//   { name: "qwe", age: "20" },
// ];

// function unique(array,key) {
//     let result = []
//     let template = {}
//     for(let i = 0 ; i < array.length ; i++) {
//         console.log(key)
//         var keyName = array[i][key]
//         console.log(keyName)
//         if(template[keyName]) {
//             continue;
//         }
//         template[keyName] = true
//         result.push(array[i])
//         console.log(template)
//     }
//     console.log(template)
//     return result
// }
// function unique(array, key) {
//   let obj = {};
//   return array.reduce((prev, current) => {
//     obj[current[key]] ? "" : (obj[current[key]] = true && prev.push(current));
//     return prev;
//   }, []);
// }

// const res = unique(array, "age");
// console.log(res);

function getMax(array) {
  const result = array.sort();
  return array[result.length - 1];
}

const res = getMax([1,2,3,4,5])
console.log(res)
