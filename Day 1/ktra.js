// for (let i = 0; i < 101; i++) {
//     if (i % 2 == 0 & i % 7 == 0 & i % 3 == 0) {
//         console.log(i);

//     }
// }

//  let name = prompt("Nhập tên");
// // console.log("ten toi là " + name);
// let name1 = prompt("Nhập tên");
// // console.log("ten toi là " + name1);
// let name2 = prompt("Nhập tên");
// // console.log("ten toi là " + name2);
// let name3 = prompt("Nhập tên");
// // console.log("ten toi là " + name3);
// let name4 = prompt("Nhập tên");
// // console.log("ten toi là " + name4);



// let nameList = [name, name1, name2, name3, name4];
// console.log(nameList);


// let btn = document.getElementById("btn");
// btn.addEventListener("click", function() {
// console.log("ten toi là " + name);
// console.log("ten toi là " + name1);
// console.log("ten toi là " + name2);
// console.log("ten toi là " + name3);
// console.log("ten toi là " + name4);

// })


let box = document.getElementById("box");
let number = document.getElementById("number");
let topNumber = document.getElementById("topNumber");


let btn = document.getElementById("btn");
box.style.width = "120px";
box.style.height = "120px";
box.style.backgroundColor = "red";


// btn.addEventListener("click", function () {
//     //  box.style.borderRadius = "50%";
 


//     if (box.style.borderRadius == "0%") {
//         box.style.borderRadius = "50%"
//     } else {
//         box.style.borderRadius = "0%";
//     }
// })


btn.addEventListener("click", function () {
    console.log(number.value);
    console.log(topNumber.value);

    box.style.top = topNumber.value + "px";
    box.style.marginLeft = number.value + "px";
  });
