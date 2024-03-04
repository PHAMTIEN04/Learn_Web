// import { sqrt } from 'mathjs';
var arr = [1 , 2 ,3 ,4 ,5 ,6, 7, 8, 9];
//ex1
function so_nt(n){

    if(n < 2) return false;
    for(var i = 2 ; i <= Math.sqrt(n); i++){
            if(n % i==0) return false;
        }
    return true;

    
}
//ex2
console.log("ex2");
arr.map((item)=>{
    if(so_nt(item)) console.log(item);
})
//ex3
console.log("ex3");
arr.map((item) => {
    if(item%2==1) console.log(item);
})
//ex4
console.log("ex4");
arr.find((item)=>{
    if(so_nt(item)) console.log(item);
})
//ex5
console.log("ex5");
const c = arr.filter((item) => item%2 != 1);
console.log(c);
//ex6
console.log("ex6");
var sum = 0;
arr.map((item)=>{
    sum += item;
})
console.log(sum);
//ex7
console.log("ex7");
var sum = 0;
arr.filter((item)=>{
    if(item%2==1) sum+=item;
})
console.log(sum)
//ex8
console.log("ex8");
const d = arr.filter((item) => (so_nt(item)));
console.log(d);
//ex9
console.log("ex9");
arr.push(1,2,3,4,5,6,7,8,9,10);
console.log(arr);
//ex10
console.log("ex10");
arr = arr.filter((item)=>item%2==0);

console.log(arr);
// gom map
arr = [1 , 2 ,3 ,4 ,5 ,6, 7, 8, 9];
var arr_snt = [];
var arr_sl = [];
sum = 0;
arr.map((item)=>{
    sum+=item;
    if(so_nt(item)) arr_snt.push(item);
    if(item % 2 != 0) arr_sl.push(item);
})
console.log("Tinh tong:",sum);
console.log("So nguyen to:",arr_snt);
console.log("So le:",arr_sl);
//gom filter
arr_snt = [];
arr_sc = [];
sum = 0;
arr.filter((item)=>{
    if(so_nt(item)) arr_snt.push(item);
    if(item % 2 != 1) arr_sc.push(item);
    if(item % 2 != 0) sum += item;
})
console.log("Tinh tong so le:",sum);
console.log("So nguyen to:",arr_snt);
console.log("So chan:",arr_sc);
