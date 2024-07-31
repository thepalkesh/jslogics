/* ---------------- check Triangle type with three parameter ---------------- */



const TriangleCheck=(a,b,c)=>{

     if(a===b && b===c && c===a)return "equilateral triangle"
     if(a===b || b===c || a===c) return "isosceles triangle"
     return "scalene triangle";
};








console.log(TriangleCheck(3,3,3)) //output "equilateral triangle"
console.log(TriangleCheck(3,5,3)) //output "isosceles triangle"
console.log(TriangleCheck(3,7,8)) //output "scalene triangle"
