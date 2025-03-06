

var total = 500;

var userName = prompt("Enter your name")
var Biology = +prompt("Enter your Biology Marks")
var ComputerSceince = +prompt("Enter your Computer Sceince Marks")
var Maths = +prompt("Enter your Maths Marks")
var Economics = +prompt("Enter your Economics Marks")
var Practical = +prompt("Enter your Practical Marks")



var obtaintSubjectMarks = Biology + ComputerSceince + Maths + Economics;

var percentage = obtaintSubjectMarks / total * 100;

console.log("Congratulations! " + userName + " your result is " + percentage + "%")
