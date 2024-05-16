var fullName ="John 'Doe'\n" 
+ " is a 'great"
+ " is digger" 

console.log(fullName);

let a = 1;
let b = 2;
if (a < b){
    console.log("a is less than b");
} else{
    console.log("a is greater than b");
}

let result = a < b && a+b >4 ;
console.log(result);

var myString ="i am leesin am";
console.log(myString.length);

console.log(myString.search("am",1));

console.log(myString.slice(5,10));

console.log(myString.replace(/am/g,"am not"));

console.log(myString.toUpperCase());

console.log(myString.toLowerCase());

console.log(myString.trim())

console.log(myString.split(" "));

console.log(a.toString());

var languages = ["javaScript" , "python" , "java" , "c++"];

console.log(languages);
console.log(languages.toString());
console.log(languages.join());
console.log(languages.pop());   
console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());
console.log(languages.push("javaScript","python","java","c++"));
console.log(languages.splice(0,0,"C#", "Ruby"));
console.log(languages);

console.log(languages.slice(-1.-4));


function togglePasswordVisibility() {
    var passwordField = document.getElementById("myPasswordField");
    var togglePasswordButton = document.getElementById("togglePasswordButton");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePasswordButton.textContent = "🕶️";
    } else {
        passwordField.type = "password";
        togglePasswordButton.textContent = "👁️";
    }
}

function getAccessPage(){
    var link = "https://www.google.com";
    window.location.href = link;
}