/*const profile={
    fullName:"Shardha khapra",
    isFollow:false,
    isMessage:false,
    posts:"195",
    followers:569000,
    following:4,
    details:"Apna college ex-microsoft DRDO to educate someone is highest privilege",
    
};

console.log(profile)*/

//  let mode   =   "dark";
//  let color;
 
//  if (mode ===  "dark"){
//     color   =   "black";
//  }

//  if(mode    === "light"){
//     color   =   "white";
//  }

//  console.log(color);

// let age =18;
// if (age>=18){
//     console.log("you can drive");
// }
// else{
//     console.log("you  cannot drive");
// }

// let age =  99;

// if(age<=17) {
//     console.log("minor");
// }

// else if(age>=18 && age <60) {
//     console.log("major");
// }

// else if(age>=60 && age<90)    {
//     console.log("senior");
// }

// else if(age>=90 && age<100)    {
//     console.log("it is time sir");
// }

// else{
//     console.log("you are dead"); 
// }

// let age= 2;
// let result =    age>=18?"adult":"not adult";
// console.log(result);

// let number =   prompt("Enter a number");
// if(number%5===0){
//     console.log(number,"is a multiple of 5");
// }
// else{
//     console.log(number,"is not a multiple of 5");
// }

// let marks = prompt("Enter your score (0-100)");
// if(marks>0 && marks<49){
//     console.log("this students grades are F");
// }
// else if(marks>=50 && marks<=59){
//     console.log("This students grades are D");
// }
// else if(marks>=60 && marks<=69){
//     console.log("This students grades are C" );
// }
// else if(marks>=70 && marks<=79){
//     console.log("This students grades are B");
// }
// else if(marks>=80 && marks<=89){
//     console.log("This students grades are A");
// }
// else{
//     console.log("This students grades are A+");
// }

// for(let i=1;i<=10000;i++){
//     console.log("Awais");
// }
// console.log("loop has terminated");

// let sum=0;
// for(i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log("sum=",sum);

// for(let i=1;i<=5;i++){
//     console.log("i=",i);
// }
// console.log(i);
// let i=1;
// while(i<=5){
//     console.log("loop is running");
//     i++;
// }

// let i=1;
// do{
//     console.log("AWAIS JUTT");
//     i++;
// }while(i<=5);
// let str="Javascript";
// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size=",size);

// let students    =   {
//     name:   "Awais jameel",
//     result: 3.8,
//     Age:    19,
//     isPass: true,
// }
// for(let i in students)   {
//     console.log(i);
// }

// let i=0;
// for(i=0;i<=100;i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }

// let gamenumber=30;

// let user=prompt("Guess the real number");
// console.log(user);
// while(user!=gamenumber){
//     user=prompt("you entered wrong number");
// }
// console.log("Congratulations! you won the game");

//  let str="Apni coding";
//  let str2='2nd method';

// console.log(str[10]);

// let specialstring=`this is a template literal`;
// console.log(typeof specialstring);

// let obj={
//     item:"pen",
//     price:10,
// };
// let output=`the cost of ${obj.item} is ${obj.price}rupees`;
// console.log(output);

// let str=("apni\ncoding");
// console.log(str.length);

// let str=`   apna coding         `;
// console.log(str.trim());

// let str=`01234567890`;
// console.log(str.slice(1,6));

// let str2=`hello`;
// console.log(str2.slice(0,4));

// let str=`apna`;
// let str2=`coding`;
// let res=str.concat(str2);
// console.log(res);

// let str=`hello`;
// console.log(str.replace(`lo`,`p`));

// let str=`i love js`;
// console.log(str.charAt(3));

// let user=prompt("Enter your full name");
// let str=`@`;
// let res=str+user+user.length;
// console.log(res);

// let num=1;
// if(num>=0){
//     console.log(`positive number`);
// }
// if(num<0){
//     console.log(`negative number`);
// }

// let user= prompt(`Enter a number`);
// if(user<=40)   {
//     console.log(`fail`)
// }
// else if(user>=60){
//     console.log(`grade B`)
// }
// else if(user>=80){
//     console.log(`grade A`)
// }

// for(num=1;num<=10;num++)   {
//     console.log(num)
// }

// let i=1;
// while(i<= 15)   {
//     console.log(i);
//     i+=2;
// }

// let marks=10;
// let marks2=20;
// let marks3=30;
// let marks4=40;
// let marks5=50;

// let students={
//     std:97,
//     std2:34,
//     std3:3,
//     std4:45,
//     std5:65,
// }

// let marks=[97,32,45,82,54];
// console.log(marks);

// for(let i=0; i<marks.length; i++){
//     console.log(marks[i]);
// }

// let marks=[85,97,44,37,76,60];
// let sum=0;
// sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5];
// console.log(sum/6);

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// let avg=sum/marks.length;
// console.log(avg);

// let items=[250,645,300,900,50];
// let idx=0;
// for(let val of items){
//     let offer=val   /  10;
//     items[idx]=items[idx]-offer;
//     console.log(`value after offer =${items[idx]}`)
//     idx++;
// }

// let items=[250,645,300,900,50];
// for(let i=0; i<items.length; i++){
//     let offer=items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);

// let fooditems=["potato","apple","litchi","tomato"];
// console.log(fooditems);
// let deleteditem=fooditems.pop();
// console.log(deleteditem);
// console.log(fooditems);

// let fooditems=["65","09","34","21"];
// console.log(fooditems);
// console.log(fooditems.toString());

// let marvel=["ironman","hulk","thor"];
// marvel.unshift("loki")
// let when=marvel.shift()
// console.log(when);
// let dc=["batman","superman"];
// let x=["wolverine","charles"];
// let heroes=marvel.concat(dc,x);
// console.log(heroes)

// let marvel=["ironman","hawkeye","hulk","thor","blackwidow"];
// console.log(marvel);
// console.log(marvel.slice(0,2));

// let arr=[1,2,3,4,5,6]
// arr.splice(1,2,786,787);
// console.log(arr)

// let arr=["bloomberg","microsoft","uber","google","ibm","netflix"];
// console.log(arr.shift())
// console.log(arr);

// let arr=["bloomberg","microsoft","uber","google","ibm","netflix"];
// arr.splice(2,1,"ola");
// console.log(arr);

// let arr=["bloomberg","microsoft","uber","google","ibm","netflix"];
// arr.splice(6,0,"amazon");
// console.log(arr);

// function myfunction() {
//     console.log("welcome to apni coding");
//     console.log("we are learning!");
//     console.log("welcome to apni coding");
//     console.log("we are learning!");
// }
// myfunction();
// myfunction();
// myfunction();
// myfunction();
// myfunction();
// myfunction();

// function myfunction(msg){
//     console.log(msg);
// }
// myfunction("i love you");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Message sent! I’ll get back to you shortly.");
    form.reset();
  });
});