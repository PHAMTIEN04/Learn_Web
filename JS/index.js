console.log("Hello Word") //in ra man hinh
var age = 15;
var name = "Tien";
var isMale = true;

function AddInt(a,b){// khai bao function
    return a+b;
}
console.log(AddInt(2,3))//goi function

//mang 
const arr = [1,2,3,4,5,6];
// Array Function
// Syntax : arr.<function>(variable)
// => : Dieu kien
// ex : => item == 3
arr.map((item) => {
    console.log(item);//
})

// find
const result = arr.find((item) => item == 3);
console.log(result);
//filter
const result_1 = arr.filter((iteam) => iteam < 3);
console.log(result_1);
