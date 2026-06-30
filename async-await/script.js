// let p1= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Hi Taha")
//     }, 10000);
// })
// let p2= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Payment successful!")
//     }, 20000);
// })

// async function Payment(status) {
//     try{
//     console.log("Assalamualikum!");
//     let name=await p1;
//     console.log(name)
//     const mssg=await p2;
//     console.log(mssg);}
//     catch(error){
//         console.log(error); 
//     }
// }
// Payment();

//fetch real api

const url="https://api.github.com/users/Taha123-ai";
async function datafunct(val) {
    try{
        let response=await fetch(url);
        let data= await response.json();
        console.log(data);
        console.log(data.login);
    }
    catch(err){
        console.log(err);
    }
}
datafunct();