/*
//1.ways to print in javascript
console.log('Hello World');
alert('me')
document.write("hello world")

//2.Javascript console api
console.log('Hello World');
console.warn('warning')
console.error('error')
console.warn("This is a warning")

//3.variable in JS
//varaible are container to save data value

var number1=34;
var number2=56;
console.log(number1+number2);


//4.data type in JavaScript
var str1 = "This is a String";
var num1 = 5042;

//5. Obk]jects (key value pair)
var marks = {
    ravi: 34,
    shu: 54,
    harry: 47
}
console.log(marks);
console.log(str1);

//Boolean
var a = true;
var b = false;
console.log(a, b);

var und = undefined
var avd
console.log(avd)
console.log(und)
var n = null
console.log(n);
/*
At a very high level, there are two type of data types in JavaScript
1.Primitive data types: undef,null,numb,string,boole,symbol
2.Reference data types:object,arrays.

var arr =[12,3,4,3,5,2]
console.log(arr)

//comparison
var a=10;
var b=12;
console.log(a<b)
console.log(true&true);
console.log(!true);
console.log(!0);


function avg(a,b){
    c= (a+b)/2;
    return c;
}
c1=avg(5,7)
console.log(c1)

//conditional
//if elseif else
var arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

var arr=[1,2,3,4,5,6,7,8,9,10];
arr.forEach(function(element){
    console.log(element);
})

let scope within block it is same as var 
const is constant cant change changing give error

let j=0
while(j<4){
j++;
console.log(j)
}

let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr.length);
arr.shift()
console.log(arr)
arr.unshift("aws")
console.log(arr)
console.log(toString())

let myDate =new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDate())
console.log(myDate.getHours())


//Dom manipulation
let elem=document.getElementById('click');
console.log(elem)
let elemClass=document.getElementsByClassName("container")
console.log(elemClass)
elemClass[0].style.background="red"
console.log(elem.innerHTML);

function clicked(){
    console.log("button clicked")
}
window.onload=function(){
    console.log("document loaded")
}

//event in JS
click.addEventListener('click',function(){
    console.log("clicked on button ")
})
click.addEventListener('mouseover',function(){
    console.log("mouse on button")
})
click.addEventListener('mouseout',function(){
    console.log("mouse out of contsiner")
})

click.addEventListener('mouseup',function(){
    console.log("Mouse up when clicked")
})
click.addEventListener('mousedown',function(){
    console.log("Mouse down clicked")
})
*/

//user signup
const uid="abc123";
var fullname="vishal shukla";
var email="vishal@gmail.com";
var password="qwe";
var confirmpassword="qwe";
var courseCount=0;
var isLoggedInFromGoogle=false;


//prompt("enter your name");
console.log(uid);
console.log(fullname);
console.log(email);
console.log(password);

console.log(`
    With Unique ID:${uid}
    User is:${fullname}
    and his email is:${email}
    and uses his password:${password}
`)

//conditional

temperature=40;
if(temperature>40) {
console.log("its hot")
}
else{
console.log("fine")
}

//purchase
var isLoggedIn=true;
var isEmailVerified=true;
var cardInfo=false;
if(isLoggedIn){
    console.log("Logged in sucess")
    if(isEmailVerified){
        console.log("Email verified")
        if(cardInfo){
            console.log("You can purchase");
        }
    }
}

