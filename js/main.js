var myNum = 10;
var myStr = "строка";
var myBool = true;
var myArr = [1,2,3,4,5];
var myObj = {
    first: "First Name",
    last: "Last Name"
};

var desimal2 = myNum.toFixed(2);

var i=0; 
console.log(++i);
console.log(i++);
console.log(i);

var myTest = 20;
myTest += 20;
console.log(myTest);
myTest -= 10;
console.log(myTest);
myTest *= 2;
console.log(myTest);
myTest /= 2;
console.log(myTest);
myTest %= 3; 
console.log(myTest);

console.log(Math.PI);
console.log(Math.round(89.279));
console.log(Math.random()*10);
console.log(Math.pow(3,5));

var strObj = {
    str: "Мама мыла раму, рама мыла маму",
};

strObj.length = strObj.str.length;
console.log(strObj);

var isRomaPos = strObj.str.indexOf('рама');
console.log(isRomaPos);

var strReplace = strObj.str.replace("мыла", "моет");
strReplace = strReplace.replace("рама","Рама"); 
strReplace = strReplace.replace("мыла", "держит");
console.log(strReplace);

strReplace = strReplace.toUpperCase();
console.log(strReplace);
strReplace = strReplace.toLowerCase();
console.log(strReplace);