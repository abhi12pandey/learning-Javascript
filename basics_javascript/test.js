console.log("ABHISHEK PANDEY")
// console.log("abhishek")
// let studentroll=1234
// console.table([studentroll])
// let a=90
// let b=89
// console.log(a+b)
// if(a==b)
//   console.log("yes ypu ")
// else
//   console.log("no mommies")
// let sum=0
// for(let i=1;i<=10;i++){
//   console.log(6*i)
//   sum=sum+i
//   // console.log(sum)

const { Console } = require("console");

  
  
// }
// console.log(sum)
// let score=undefined
// console.log(score)
// console.log(typeof(score))
// let convert= Number (score)
// console.log(typeof(convert))
// console.log(convert)
// let isbool="IPL"
// console.log(typeof(isbool))
// let isbool2= Number(isbool)
// console.log(isbool2)
// let hight=undefined
// // console.log(hight)
// let width=9.32
// let width1=Number(width)
// console.log(width1)
// console.log(typeof(width))
let y1=9;
let y2=++y1;
// let y2=y1;
console.log(y2);

//dates

let mydate =new Date()
console.log(mydate)
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toJSON());
console.log(mydate.toISOString());
console.log(mydate.toTimeString());
const date=new Date()
console.log(date.toLocaleString())
const ar=new Array(1,2,3,4,5)
//new is keyword;
console.log(ar);
console.log(ar[0])
console.log(ar.reverse())
ar.push(9)
console.log(ar)
ar.pop()
ar.pop()
console.log(ar)
ar.unshift(89)
console.log(ar)
let myarr=ar.join()
console.log(myarr)
console.log(typeof(myarr))
//include and index are method includes give true or false i.e boolean and give index//
//now slice and splice example sei smjho
//slice as simple hai ke usme jo bhi point usko remove kr deta hain but jo start+1 sei end point tk original doesnot change.
const arr1=[1,2,3,4,5,6,7,8,9];
console.log(arr1.slice(6,7));
console.log("arr1",arr1)
//splice two different section mai divide kr deta start point aur end point.
//original change start=start+1 sei end point tk; 
const arr2=[1,2,3,4,5,6,7,8,9]
console.log(arr2.splice(7,9))
console.log("arr2",arr2)
//other method;
// const arr1[i] arr2[j]=[1,2,3,4,5,6,7,8,9]
// console.log(arr1[i], arr2[j] )
ar.shift();
console.log(ar)
const arr3=[1,2,3,4,5,6,7,8,9]
arr3.unshift(10,11,12,13);
console.log(arr3.shift())
console.log(arr3)//shift method remove the first element of the array.
const my_hero=["akshay","srk","salman"];
const my_other=["rr","allu","hitesh","striver"];
my_other.push(my_hero)
console.log(my_other)
const my_hero_other=new Array(my_hero+my_other);
const my_hero_other1=my_hero.concat(my_other);
console.log(my_hero_other);
// console.log(my_hero_other(4))
console.log(my_hero_other1);
const myhero3 = [...my_hero, ...my_other];
console.log(myhero3)
const ekarr=[1,2,[2,3],4,5,6,7,8,9,[1,2,3,[4,5,6]]];
const real_ekarr=ekarr.flat(Infinity)
console.log(real_ekarr);
const bnarr=new Array("ABHISHEK")
console.log(Array.from("ABHISHEK"))
console.log(Array.from("saraswati shishu vidya mandir bagbera jamshedpur jharkhand india "))
console.log(Array.isArray(bnarr))
const score1=100;
const score2=300;
const score3=500;
console.log(Array.of(score1,score2,score3))
// object should declared under from method bcz it return [] empty array .and point to be noted that it should we use through key...//










//@@@@@@@@@@@@@@@OBJECT OBJECT @@@@@@@@@@@@@@@@@@@@@@@@@@//
const mysym=Symbol("key6 ye data type symbol")
 const Jsuser={
   name:"ABHSIHEK",
   "full name":"ABHISHEK KUMAR PANDEY",
  [mysym]: "mykey6",
   age:19,
   location:"jamshedpur",
   email:"ap6327460@gmail.com",
   phone:"986457",
   // skill:[web,java,c++,c,html,css,js,sql,mysql,tailwind,react]
 }
// console.log(Jsuser);
console.log(typeof(Jsuser[mysym]))
Jsuser.phone ="123456"
Jsuser.skill=["web","dsa"]
console.log(Jsuser)
Jsuser.email="78@hgdkj.com"
// Object.freeze(Jsuser)
Jsuser.email="78@hgdkllj.com"
console.log(Jsuser)
Jsuser.happy=function(){
  console.log("hellow dosto ! kiase ho applog sb")
}
console.log(Jsuser.happy())
Jsuser.happy2=function() {
  console.log(`hope app sb htik thak hong ,${this.name}`);
  
}
console.log(Jsuser.happy2())



const Jsuser1={
  email:"455%gh@gmail.com",
  fullname1:
{
  userfullname:{
    f1name:"ABHISHEK KUMAR PANDEY",
    lastname:"eklavya pandey"
  }
  }
}
console.log(Jsuser1.fullname1.userfullname.lastname)
console.log(Object.keys(Jsuser));
console.log(Object.values(Jsuser))

const obj1= {1: "a",2:"b"}
const obj2={2:"c",3:"d"}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)
////// object as singleton using 
//const tinpatin=new Objec{} singleton

const obj7={
  id:123,
  name:"sudhanshu",
  clg:"ucet jharkhand",
  add:"jharkhand"
}
console.log(Object.keys(obj7))
//hasownproperty int the object object.hasownroperty
const obj34={
  id2:1233,
  name:"pratik"
}
const {name}=obj34
console.log(name);
console.log(obj34.id2)
// console.log(id2)
const {id2:tokennumber}=obj34
console.log(tokennumber)


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@function@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   FUNCTION    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                                         F U N C T I O N                                                                                                   
