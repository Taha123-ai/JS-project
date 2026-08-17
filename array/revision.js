// function x(){
//     var a=10;
//   return function y(){
//         var b=20;
//         return function z(){
//             console.log(a)
//             console.log(b);

//         }
//         z();
//     }
//     y();
// }
// let zfunc=x();
// zfunc();
// // // console.log(b);
// console.log(a);
// var a=1 ?? 10;
// console.log(a);

// let arr=[1,2,3,4,5,6]
// // let num=arr.filter(val=>val%2===0);
// // console.log(arr.map(val=>val+1))
// // console.log(num1);
// const final=arr.map((num)=>{return num*2})
//                .map((num)=>{return num+1})
//                .filter((val)=>{return val%3===0})
//                .reduce(function(accumulator,currentvalue){return accumulator+currentvalue},0)
//                console.log(final);


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello p1 success")
    }, 2000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p2 fails")
        // resolve("p2 success")
    }, 3000)
})
const P3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 success")
    }, 4000);
})
// Promise.any([p1, p2, P3])
// Promise.all([p1, p2, P3])
// Promise.allSettled([p1, p2, P3])
Promise.race([p1, p2, P3])
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error) })
    .finally(()=>console.log("over"))










