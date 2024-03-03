// import { sqrt } from 'mathjs';
var arr = [1 , 2 ,3 ,4 ,5 ,6, 7, 8, 9]
//ex1
function so_nt(n){
    var cnt = 0;
    if(n < 2) return false;
    else{
        for(var i = 2 ; i <= Math.sqrt(n); i++){
            if(n % i==0) cnt++;
        }
        if(cnt == 0) return true;
        else return false;
    }
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
console.log(c)
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
console.log(arr)
//ex10
console.log("ex10");
arr = arr.filter((item)=>item%2==0);

console.log(arr);