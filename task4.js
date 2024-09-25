var s1="murthy";
console.log(s1);
var s2="koteswaramma";
console.log(s2);
// var r1=s1.slice(0,3);
// console.log(r1);
// var r2=s2.slice(-3);
// console.log(r2);
// var r3=r1.concat(r2);
// console.log(r3);
// var r4=r3[0].toUpperCase()+r3.slice(1,5)+r3[5].toUpperCase();
// console.log(r4);
var r=(s1[0].toUpperCase()+s1.slice(1,3)).concat(s2.slice(-3,-1)+s2[s2.length-1].toUpperCase());
console.log(r);

// var r = (s1[0].toUpperCase() + s1.slice(1, 3)).concat(s2[s2.length - 1].toUpperCase() + s2.slice(-3, -1));
// console.log(r);

