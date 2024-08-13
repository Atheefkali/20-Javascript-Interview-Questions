// this is bitwise operataer
// let Age = 20;

// let ticket = Age > 18 ? "Your are Adult. price: 200 RS" : "you are child. price 100rs";


// console.log(ticket);


// this is javascript operater preceddence

// let x = 2 + 5 * 10; // the result is 70 but output will show 52 js engin exucute the code right to left
//  console.log(x);  //
//  let newX = ( 2 + 5 ) * 10;
//  console.log(newX);  //now the results will shown 70 beacuse we tell the way to calculate    


//  condition statmet
// 1. if else
// 2. switch case

// ----if else---
// if user age is above 18 outpit shown you big otherwise shown output your child
// let age =20;
// if (age => 18)
//     console.log("your big");
// else
// console.log("child");
    


/// if current time is gd morning or gd night checker
// 12Am(0) to 1Pm(13hours) --gd morning
// 1pm(13hours) to 5pm(17 hrs) -- gd afternoon
// 5pm(17hours) to 12 Am (0)  --  gd evening

// let CurTime = 15;

// if(CurTime >= 0 && CurTime <= 13);
//     console.log("Gd Morning");
// // else if(CurTime >= 13 && CurTime <= 17);
// //     console.log("Gd Afteroon");
// else
//     console.log("Gd Evening");

// let time = 21;
// if (time >= 0 && time <= 13)
//     console.log("good morning");

// else if(time >= 13 && time <=17)
//     console.log("good afternoon");
// else
//     console.log("good evening");


    
// switch case
// let fname = 10;
// let dfname = "amhar"
// switch(fname > 4){
//     case 1:
//         console.log("name: ", + fname);
//     case 2:
//         console.log("wrong name");
//     default:
//         console.log(fname);
   
// }

// practical switch

// let grade = "A"

// switch(grade){
//     case "A":
//         console.log("distinction");
//         break;
//     case "B":
//         console.log(" maried");
//         break;
//     default: 
//         console.log("Just passs"); 
        
// }

// let marks = 73;
// let category;

// if (marks >= 0 && marks < 35) {
//     category = 'pass';
//     console.log("pass");
// } else if (marks >= 35 && marks <= 65) {
//     category = 'normalPass';
//     console.log("normalpass");
// } else if (marks > 65 && marks <= 100) {
//     category = 'distinction';
//     console.log("distinction");
// } else {
//     category = 'unknown';
// }

// switch (category) {
//     case 'pass':
//         console.log("pass");
//         break;
//     case 'normalPass':
//         console.log("normal pass");
//         break;
//     case 'distinction':
//         console.log("distinction");
//         break;
//     default:
//         console.log("unknown results");
// }


//assingments given cyberdude video 28 

// let price = 70000;
// let device;

// if(price >= 10000 && price <= 60000){
//        device ='android mobile'
// }else if(price >= 5000 && price <= 10000){
//         device = 'classic phone'

// }else if(price >= 60000){
//         device ='iphone'
// }else {
//     device ='low budget'
// }

// switch (device){
//     case 'android mobile':
//          console.log("buy android Mobile");
//          break;
//     case 'classic phone':
//         console.log('buy classic phone');
//         break;
//     case 'iphone':
//         console.log("buy ihpones");
//         break;
//     default:
//         console.log("low budget");
// }

   

/// for loop

// for( i = 0; i <= 5; i++ ){
//     console.log("number is: ", i);
// }


// while loops
// let i =20;
// while(i >= 1){
//     if(i % 2 !== 0){
//         console.log("two number: " + i);
//     }
//     i--;
// }

//  do while

// let i = 0;
// do{
//     if(i % 2 !== 0){
//         console.log("while number: " + i);
//     }
//     i++;
// }while(i <= 10);


// for in   loop

// const Person ={
//     name : 'Atheef',
//     age : 20,
//     sex :'male'
// }
// for (let key in Person){
//     console.log( key + ":", Person[key]);
// }

// let color = ['red','blue','yellow']

// for(let key in color){
//     console.log(color[key]);
// }

// javascript object &&  OOB object oriented program

// let deatails = {
//     name:"Atheef",
//     Age : 20,
//     address:{
//         province:" kalmunai",
//         city: "sainthamaruthu",
//     },
//     isstudy: true,
//     hooby: ["playing games", "go friends", "swimming" ],

//    greeting: function(){
//         let massage = `my name is ${this.name}, i love ${this.hooby}`;
//         console.log(massage);
//    }
// };

// deatails.greeting()

//  some keyword  
// (`) backtick
// ($) expression
// (this) multy perpose function

// when you create a function inside the object  thats called "method "

// factory function

// function createpeerson(name){
//     return{
//         name: name,
//         greeting: function(){
//             let msg = `My name is ${this.name}`;
//             console.log(msg);

//         }
//     };
// }

// let Atheef = createpeerson("Atheef");
// let amhar = createpeerson("Amhar");
// Atheef.greeting();
// amhar.greeting();

// constructor factory

// function Person(name){  // pascal case -> MyFirstName
//     this.name = name;
//     this.greeting =function(){
//         console.log(`my name is ${this.name}`);
//     }
// }
// let person = new Person("Atheef");   // new  keyword make 3 changes  1. create an empty array 2. store thiskeyword and names that array   

// person.greeting();



// dynamic object

// let Person = {
//     name : "Atheef"
// }
// Person.age = 20;
// Person.greeting =function(){}

// delete Person.greeting;

// console.log(Person);

// 
//  40 video finished

//  premitive data type and reference data type

// example

// let x=10;   // now x is indepent variable

// let y = x;  // now y is indepent variable

//  x = 20;

//  referecne type

// let x = {
//     value :20
// };

// let y = x;

// x.value = 30;


// lets build an shopping card 

// let Cart ={
//     value : 5

// }

// function updateCard (card){
//     card.value++;
// }
// updateCard(Cart);
// console.log("Card avalibe",Cart);



// Enumerating Properties of an Object

// const user ={
//     Name :'Atheef',
//     getFullName(){
//         console.log(`my name is ${this.name}`);
//     },

// }
// // for(let key in user)
// //     console.log(key, user[key]);

// for (let key of user);
//     console.log(key);

// cloning  an javscript object
// the easy way is too create to clone an object using spread
// operater


// const User = {
//     name: 'Atheef',
//     getfullName (){
//         console.log(`my name is ${this.name}`);
//     }
// }
//  let another = {...User}  // this is an spread operater
//  console.log(another);   
// let another ={}; 
// for (letkey in User ){
//     another[key] =User[key]
// }


// garbage Colloction

// after the code run time after the code will stopped 


// javascript math object

//  console.log(Math.ceil(1.3));  //reture the minus value to plus number 

//  45 finished


// javastring string object 

// let FirstName = "Amhar"
// console.log("this is normal string " + FirstName);
// const stname =  new String("Atheef")

// console.log("this is String Object "+stname);

// // 
// let para = 'my Name is Atheef Amhar'
// let check = /[A-Z]/g;


// let found = para.match(ch`eck)            

// console.log( found);             

// 46 finished   ////////

// 47 start 

//  templet literals

// let name = "Atheef";
// const msg = `hello ${name}, "learnig is strong you  
 
//  "keep learning"`

// console.log(msg);

// 48 start

// date  object

// let date = Date();
// console.log(date);  //you can refer mdn site 

//  48 start

// javascript array in depth

// adding elemnt in array

// let Add =["fruits","1", true, "Athef"]

// // there is 3 method to add an array

// // 1. push
// Add.push("Amhar")
// console.log( "this is an Push method" ,Add);

// 2. unshift
// Add.unshift("First Element");  // this method add value in first element
// console.log("this is an unshift method",Add);
// 3. splice

// Add.splice(1,0,"new 1","new 2")

// console.log("this is an Splice method",Add);



// finding element in Array

// let  items = ["Atheef", "Amhar", "Apple", "Orange"]

// console.log(items.indexOf("Amhar") !== -1);

// ther is an other method

// console.log( "this is an Include Method : ",items.includes("Amhar"));
 
// finding lement in reference type in array


// let Orders =[
//     {id : 1, name: "Smart phone", quantity: 1 }, 
//     {id : 2, name: "Apple phone", quantity: 2 }, 
//     {id : 3, name: "Nokkia phone", quantity: 3 }, 
//     {id : 4, name: "Orange phone", quantity: 4 }, 
//     {id : 5, name: "Grapes phone", quantity: 3}
// ]
// let results = Orders.find((Order) => Order.name === "Orange phone"
// );
// console.log(results);

//  2 subject cleared 52 finding element on reference type


// 54 start

// removing an element in javascript 
//  using Pop, Shift, splice

// let number = [1, 2, 3, 4];
  
// number.pop()//removing last element in array


// number.shift() // removing last element in javascript

// number.splice(2,1) // remove specific element
// console.log(number)



//  emptying javascript array 55 video


// let number = [1, 2, 3, 4];
// method 1

// number = []  // we can use this future devolopment

// method 2

// number.length = 0;
             
// method 3
 
//  number.splice(0, number.lengthop)


// // method 4
// while(number.length) number.pop()

// console.log(number);


// 56 
//  combain & extracting Elements in Array concat anfd slice

// let shopping = ["egg", "oil", "pepper" ];
// let Missing = ["Sauce", "onion", "chilli"];

// let add =  shopping.concat(Missing) ;// concat

// // extract
// // let dish = add.slice(0,4)

// // using spread operater
// let spread =  [...shopping, ...Missing];


// console.log(add);
// // console.log("this is extract ",dish);

// console.log("this is spread",spread);

// 57 finished
    
// // array iterating method
// const dailyRoutine = ["wake up", "take Bath", "Eat", "Sleep"] ;

// // for(let Routine of dailyRoutine)console.log(Routine);

// // for each

// dailyRoutine.forEach(function(Routine,Routineindex){
//     console.log(Routineindex,Routine);
// } )

// 59 start

// Joining & Splitting JavaScript Arrays 


// const dailyRoutine = ["wake up", "take Bath", "Eat", "Sleep"] ;

// let joined = dailyRoutine.join(", ");
// console.log(joined);

// let fname = "Amhar Atheef" ;
// let spl = fname.split(" ")
// let firstname = spl[0];
// let sname =spl[1];
// console.log(`my fisrt name is ${firstname} and last name is ${sname}`);


// let title = "this is my post"
// let spl = title.split(" ")
// let final = spl.join('-')

// console.log(final);


// 60 video

// Sorting a JavaScript Array (With Examples) 

// const student =[3, 18, 1];
// student.sort(function(a, b){
//     return a-b;
// });
// console.log(student);

// const students = [
//     {id: 3, name: "Atheef"},
//     {id: 18, name: "Amhar"},
//     {id: 1, name: "Hassan"},
// ];

// students.sort(function(a,b){
//     // a < b => -1
//      if(a.name< b.name)
//         return -1
//     // a > b => 1 
//     if(a.name > b.name) return 1;

//     // a === b => 0
//     return 0;
// })
// console.log(students);


// 61 start
//  Primitives: Testing a JavaScript Array (With Examples) 

// const Cus_age = [24, 16, 27, 60, 5, 15];
// let check = Cus_age.some(function (value, index, array) {
//     return value >= 18;
// });

// console.log("Person Allowed:", check);


// const number = [2,4]

// let check = number.every(function(value){
//     return value % 2  === 0;
    
// })
// console.log(check);
// some ()
// const number = [1,2,3,4,5]

// let check = number.some(function(value){
//     return value % 2  === 0;
    
// })
// console.log(check);


// #62 - Testing Objects in a JavaScript Array (With Examples) 

// const items = [
//     {id: 1, name: "mobiles", isDeliver: true},
//     {id: 2, name: "tablet", isDeliver: false},
//     {id: 3, name: "charger", isDeliver: true},
//     {id: 4, name: "backcover", isDeliver: false},
// ]

// let check_products = items.every(function(value){
//     return value.isDeliver = true
// })

// console.log(check_products);

// #63 - Filtering a Javascript Array (With Examples)

//   const Cus_age = [24, 16, 27, 60, 5, 15];
//  let adults = Cus_age.filter(function(value){
//     return value >=18;
// })

// console.log("is adults", adults);

// const cart_items = [
//     {id: 1, name: "samsung", cost: "10000"},
//     {id: 2, name: "iphone", cost: "20000"},
//     {id: 3, name: "redmi", cost: "15000"},
// ];
// let budget = cart_items.filter(function(value){
//     return value.cost <= 10000
// })

// console.log("your budget phone ",budget);


// 64 - Finding a Javascript Array - find()// findindex()  

// const cart_items = [
//     {id: 1, name: "samsung", cost: "10000"},
//     {id: 2, name: "iphone", cost: "20000"},
//     {id: 3, name: "redmi", cost: "15000"},
// ];
// let budget = cart_items.find(function(value){
//     return value.cost <= 10000
// })
// console.log("your budget phone ",budget);



// #65 - Javascript Arrays: Map()

// const number = [1,2,3,4,5];
// let multiply = number.map(function(value){
//     return value * 2

// })
// console.log(multiply);
// const people = [
//     {id: 1, name: "Amhar", salry: "15000"},
//     {id: 2, name: "Atrheef", salry: "20000"},
//     {id: 3, name: "hassan", salry: "34500"}
// ]

// let combine = people.map(function(value){
//     return [value.name,  value.salry].join(" ");

// })

// console.log(combine);

// another exaple

// let name_salry = people.map(function(value){
//     let Full = [value.name , value.salry].join(" ");
//     let obj ={id: value.id, Full: Full}
//     return obj;
// })

// console.log(name_salry);


// 66 - Javascript Arrays: Chaining Methods


// sort it using lowest price
// const cart_items = [
//     {id: 1, name: "samsung", cost: 10000},
//     {id: 2, name: "iphone", cost: 20000},
//     {id: 3, name: "redmi", cost: 15000},
// ];
// let products = cart_items.sort(function(a,b){
//     return a.cost-b.cost
// })
// console.log(products);

// sort it by title ascending

// let acending = cart_items.sort(function(a,b){
//     if(a.name < b.name) return -1;
//     if(a.name > b.name) return 1;
// })

// console.log(acending);
// filter products less then 8000

//  

// map it like this: // android phone -rs 7500

// let mapping = cart_items.map(function(value){
//     return value.name + " - " + value.cost;
// })
// console.log(mapping);  

// 67 - Javascript Arrays: reduce() Method

// const donation = [45,65,32,75,4983];

// let ruduced = donation.reduce(function(previousValue,currentValue){
//     return previousValue + currentValue;
// })
//     console.log(ruduced);

// const Shoppingcart = [
//     {id: 1, name:"Shoes", cost: 500},
//     {id: 2, name:"Bata", cost: 250},
//     {id: 3, name:"Bag", cost: 300},
// ]

// // function Adcost(previousValue, currentValue){
//     return previousValue + currentValue.cost
// }
// let total = Shoppingcart.reduce(Adcost,0)
// this 0 is an initial value


//this is es6 

// const addcost = (previousValue, currentValue)=>previousValue + currentValue.cost;
// let total = Shoppingcart.reduce(addcost,0)
// console.log("this is es6 Tota: ",total);
// console.log("your total amount is :",total);


// 68 - JavaScript: Difference between sort(), filter(), map(), reduce() methods -


// const  numbers = [32,50,45,60,75]

// sort()

// let results =numbers.sort()
// console.log(results);

// find()

// let result = numbers.find((value)=>{
//     return value > 50
// })

// console.log(result); // it will only show first results

//filter()
// let result = numbers.filter((value)=>{
//     return value > 50
// })

// console.log(result); // it will only show first results


// map ()

// let result = numbers.map((value)=>{

//     return "$" + value;
// })

// console.log(result); // it will only show first results


// reduce()

// let result = numbers.reduce((value)=>{
//      return "$" + value;
// })
    
// console.log(result); // it will only show first results
    

// #69 - JavaScript Arrays: Interview Questions (Solution)



// 1. Create an Array object - (In Atleast 3 methods)
// let arr1 = ["Apple", "orange", "Banana"] // 1st method

// // method 2 
//  let arr2 = [] 

//  arr2[0] = "name: Atheef"

//  mtehod 3 

// let arr3 = new Array (1,"new one 3 ");

// console.log("this is method 1",arr1);
// console.log("this is method 2",arr2);
// console.log("this is method 3",arr3);



// q--2 Take the below array and copy it using the slice method and the for loop method

// let array = [1, 2, 3, 4, 5];

// slice
// let question2 =array.slice()

// console.log(question2);

// forloop

// let tamparray = []

// for(let i = 0; i < array.length; ++i ){
//     tamparray[i] = array[i]
// }

// console.log(tamparray);

// Q3 Empty this array

// method 1
// let array = [1, 2, 3, 4, 5];
// let obj= {id: 1};
// let other = undefined;
// let fname ="atheef"
// array.length = 0;
// console.log(array);

// method 2 using while

// while(array.length){
//     array.pop()
// }

// console.log(array);


// method 3 

// array.splice(0,array.length);
// console.log(array); 

// Q4   What type is an Array set to

// let results = Array.isArray(array)

// console.log(results);

//  Q6 Add an item to the end of an array

// let fruits =["Apple", "Orange", "banana"] 

// fruits.push("grapes")

// console.log(fruits);


// Q7  Find the index position of d in this array

// var arr = ["a", "b", "c", "d"];



// console.log(arr.indexOf("d"));

//  Q8 What will be returned if you look for the index of something that does not exist?

// console.log(arr.indexOf("z"));



// Q9  Write a function to check if milk exists in your array

// let items = ["milk", "bread", "sugar"];

// function checkproducts(products){

//     let index = items.indexOf(products);

//     if (index == -1){
//         console.log("item Does Not exist");
//     }else {
//     //exist 
//     items.splice(index, 1);
//     console.log("item Exist");
//     console.log(items);
//     }
// }

// checkproducts("milk");


// Q11 List the ways to loop over an array

//for
//for-in
//for-of
//for-each
//while



//  Q 12 Write some code to put these numbers in order (Ascending & Descending)

// let numbers = [1, 12, 2, 23, 77, 7, 33, 5, 99, 234];

// let acen = numbers.sort((a,b) => a-b)
// console.log( "this is an acending order",acen);

// let decent = numbers.sort((a,b) => b-a)
// console.log( "this is an decenting order",decent);



// Q 13 Write some code to place this list in alphabetical order 

// let letters = ["a", "z", "e", "y"];

// let correctOrder = letters.sort()

// console.log(correctOrder);



// Q14  What is the length of these arrays

// var arr1 = [, , ,];

// var arr2 = new Array(3);

// var arr3 = [1, 2, 3, 4, 5];

// var array = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log(array.length);

//Q 15 What are the results of these splice and slice methods

// var a = ["zero", "one", "two", "three"];
// var names = ["jason", "john", "peter", "karen"];

// var sliced = a.slice(1, 3);
// var spliced = names.splice(1, 3);

// console.log("this is sliced", sliced);
// console.log("this is spliced", spliced);



//Q 16 What are the console logs of these shift and unshift methods

// var a = [];  // no element array

// // We take an empty array and

// a.unshift(1);  // push [1]
// a.unshift(22); // push [22,1]
// var b = console.log(a);
// a.shift(); //[22, 1] => [1]
// var c = console.log(a);
// a.unshift(3, [4, 5]); //[1] => [3,[4,5],1]
// var d = console.log(a);
// a.shift(); //[[4,5],1]]
// var e = console.log(a);
// a.shift(); // [[4,5],1]] => [1]
// var f = console.log(a);
// a.shift(); //[1]
// var g = console.log(a);




// Q17 Using reduce add all these numbers

// var numbers = [1, 2, 3, 4, 5, 6];

// let total = numbers.reduce((a,b)=>{
//     return a + b;
// }, 0)

// console.log(total);



// Q18 Flatten this array to one single array using reduce


// var array = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
//   ];

// let flatteen = array.flat(Infinity)

// console.log( "this is an method 1 ",flatteen);

// let flatteen2 = array.reduce(function(a,b){
//     return a.concat(b)
// })
// console.log("this is an method 2 ", flatteen2);


// Q 19 Filter this array to return just the dogs

// var animals = [
//     { name: "Jason", species: "rabbit" },
//     { name: "Jessica", species: "dog" },
//     { name: "Jacky", species: "owl" },
//     { name: "Luke", species: "fish" },
//     { name: "Junior", species: "rat" },
//     { name: "Thomas", species: "cat" },
//   ];

// let find = animals.map((val)=> val.species
// )

// console.log(find);
