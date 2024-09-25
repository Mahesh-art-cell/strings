//Practice
//--------------------------

// string lengh
var a="mahesh";
console.log(a.length);

// string charAt
var b="124565maheshs";
console.log(b.charAt(4));

// string charCodeat()
var c="mahesh124356";
console.log(c.charCodeAt(7));

// toLowerCase()
var d="maheshABCDERTSUG123487";
console.log(d.toLowerCase());

// toUpperCase
var e="MAHESH KTP andhrapradesh";
console.log(e.toUpperCase());
console.log(e[15].toUpperCase());

// trimStart()
var f="          mahesh";
console.log(f);
console.log(f.trimStart());

// trimEnd()
var g="mahesh                     ";
console.log(g.trimEnd());

// string concat()
var s1="mahesh";
var s2="how are you"
var res=s1.concat(" ",s2)
console.log(res);

// slice()
var str="hello world i am mahesh";
var res=str.slice(0,17);
console.log(res);
var r1=str.slice(-6);
console.log(r1);
var r2=str.slice(0,-9)
console.log(r2);

// string[]
var h="abcfyttdtdtdsts";
console.log(h[h.length-6]);

// string at()
var i="mahesh";
console.log(i.at(0));
//-------------------------------------

//Assignements
//-------------------------------------
//Task-1
var str1 = "Mahesh       ";
var str2 = "         msd";
var res=str1.trimEnd().concat(" ",str2.trimStart()).toUpperCase();
console.log(res);

//Task-2
var s = "i am TALLURI Mahesh from ktp";
var res = s.slice(5, 19).toLowerCase(),r=s.charAt(18);
console.log(res,r);

//Task-3
var c="M";
var r=c.concat(" ","Talluri").toUpperCase(),r1=r[r.length-2]
console.log(r,r1);

//Task-4
var s1="murthy";
console.log(s1);
var s2="koteswaramma";
console.log(s2);
var r=(s1[0].toUpperCase()+s1.slice(1,3)).concat(s2.slice(-3,-1)+s2[s2.length-1].toUpperCase());
console.log(r);

//Task-5
var st="      mahesh talluri   ";
var st1="msd"
var r=(st.trim().charAt(0).toUpperCase()+st.trim().slice(1,6)).concat(" ",st1.slice(0,2)+st1.charAt(2).toUpperCase());
console.log(r);

//Task-6
var s="hello there , how are you";
console.log(s);
var r=s.indexOf('are');
console.log(r);