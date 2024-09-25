var str1 = "Mahesh       ";
var str2 = "         msd";
// var r1 =str1.trimEnd();
// console.log(r1);
// var r2=str2.trimStart();
// console.log(r1);
// var con=r1.concat(" ",r2)
// console.log(con);
// r3=con.toUpperCase();
// console.log(r3);
var res=str1.trimEnd().concat(" ",str2.trimStart()).toUpperCase();
console.log(res);

