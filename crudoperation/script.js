// let orderlist = document.querySelector("#orderlistid")
// let orderlist = document.querySelector(".loading")
// console.log(orderlist.nodeName);
// console.log(orderlist.nodeType);
// console.log(orderlist.nodeValue);
// console.log(orderlist instanceof Node);


// let notice1 = document.createElement("h3")
// notice1.textContent = "Assalamwalekum"
// notice1.classList.add("pappu")
// notice1.id = "idnotice1"
// notice1.style.color = "white"
// // notice1.before(heading);

// // let heading=document.getElementsByClassName("heading")
// let heading = document.querySelector(".heading")
// heading.before(notice1)

// let notice2 = document.createElement("h2")
// notice2.textContent = "Crud-operation"
// notice2.id = "notice2id"
// notice2.style.color = "Red"
// heading.after(notice2)

// let olheading = document.createElement("h1")
// olheading.textContent = "..Skills.."
// olheading.style.color = "Green"
// orderlist.before(olheading);


// // let li1=document.createElement("li")
// // li1.style.color="white"
// // li1.textContent="HTML"
// // let li2=document.createElement("li")
// // li2.style.color="white"
// // li2.textContent="CSS"
// // let li3=document.createElement("li")
// // li3.style.color="white"
// // li3.textContent="JS"
// // orderlist.appendChild(li1)
// // orderlist.appendChild(li2)
// // orderlist.appendChild(li3)

// let arr = ["HTML", "CSS", "JS", "REACT", "EXPRESS.JS", "NODE.JS", "MONGODB"];

// // let fragment=document.createDocumentFragment();
// let arr2 = [];
// arr.forEach((element, index) => {
//     // console.log(element);
//     let li = document.createElement("li");
//     li.style.color = "white"
//     li.textContent = element;
//     arr2[index] = li;
//     // fragment.append(li)

// });
// // console.log(fragment);
// console.log(arr2);
// arr2.forEach((e, index) => {
//     orderlist.append(e)
// })
// orderlist.append(arr2)
// // orderlist.append(fragment);

// let cuurentindex=0;
// let lasthindiitem=null;
// let myTimer=setInterval(() => {
//     // li.remove()
//     if(lasthindiitem){
//         lasthindiitem.remove();
//     }
//      if (cuurentindex >= orderlist.children.length) {
//         clearInterval(myTimer);
//         return; // Exit early so the code below doesn't run and crash
//     }
//     let li=document.createElement("li")
//     li.style.color = "Red"
//     li.textContent = "HINDI"
//     let currchild=orderlist.children[cuurentindex];
//     currchild.after(li);
//     lasthindiitem=li;
//     cuurentindex++;
    
// }, 1000)








