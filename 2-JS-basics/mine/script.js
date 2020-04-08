// ******************** //

// BASICS
/*
var first_name = "John";
console.log(first_name);

var last_name = "Smith";
var age = 28;

var full_age = true;
console.log(full_age);

var job;
console.log(job);

job = "teacher";
console.log(job);

 var _3years = 3;
var john_mark = "john and mark";
//var if = 23;
var _if = 23;
*/

// ******************** //

/*
var first_name = "john";
var age = 28;
var coersion = first_name + ' ' + age;
console.log(coersion);

alert(coersion);

var last_name = prompt("what is his last name?");
console.log(first_name + ' ' + last_name);
*/

// ******************** //

// CODING CHALLENGE 1
/*
function BMI(mass, height){
    return mass / (height * height);
}

var john_mass = 78 , john_height = 1.90
var mark_mass = 67 , mark_height = 1.62

var john_bmi, mark_bmi;

john_bmi = BMI(john_mass, john_height);
mark_bmi = BMI(mark_mass, mark_height);

console.log("John's BMI: " + john_bmi);
console.log("Mark's BMI: " + mark_bmi);

var is_mark_higher_bmi = mark_bmi >= john_bmi;
console.log(is_mark_higher_bmi);
*/

// ******************** //
/*
var first_name = "john";
var civil_status = "single";

switch (civil_status){
    case "single":
        console.log("Civil status: " + civil_status);
        break;
    case "married":
        console.log("Civil status: " + civil_status);
        break;
    default:
        console.log("Civil status not found");
}

var age = prompt("What's your age?");

switch (true){
    case age < 18:
        console.log("Under age");
        break;
    case age < 100:
        console.log("Adult");
        break;
    default:
        console.log("You're probably dead");
}
*/

// ******************** //

// CODING CHALLENGE 2
/*
var john_avg = ( 89 + 120 + 103) / 3;
var mark_avg = (116 +  94 + 123) / 3;
var mary_avg = ( 97 + 134 + 102) / 3;
console.log("John: " + john_avg);
console.log("Mark: " + mark_avg);
console.log("Mary: " + mary_avg);

switch (true){
    case john_avg > mark_avg && john_avg > mary_avg:
        console.log("John's team wins with " + john_avg + " average score");
        break;
    case mark_avg > john_avg && mark_avg > mary_avg:
        console.log("Mark's team wins with " + mark_avg + " average score");
        break;
    case mary_avg > john_avg && mary_avg > mark_avg:
        console.log("Mary's team wins with " + mary_avg + " average score");
        break;
    default:
        console.log("That was a tie for first");
}
*/

// ******************** //

// FUNCTIONS
/*
function CalculateAge(birth_year){
    return 2020-birth_year;
}

function YearsUntilRetirement(year, first_name){
    var age = CalculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(first_name + " retires in " + retirement + " years.");
    }
    else {
        console.log(first_name + " is already retired.");
    }
}

var john_birth = 1990;
var mike_birth = 1948;
var jane_birth = 1969;

var john_age = CalculateAge(john_birth);
var mike_age = CalculateAge(mike_birth);
var jane_age = CalculateAge(jane_birth);
console.log(john_age, mike_age, jane_age);

YearsUntilRetirement(john_birth, "John");
YearsUntilRetirement(mike_birth, "Mike");
YearsUntilRetirement(jane_birth, "Jane");

var what_do_you_do = function(job, first_name){
    switch(job){
        case "teacher":
            return first_name + " teaches kids how to code";
        case "driver":
            return first_name + " drives a cab in Lisbon";
        case "designer":
            return first_name + " designs beautiful websites";
        default:
            return first_name + " does something else";
    }
}

console.log(what_do_you_do("teacher", "John"));
console.log(what_do_you_do("designer", "Jane"));
console.log(what_do_you_do("retired", "Mark"));
*/

// ******************** //
/*
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

names[1] = "Benn";
names[names.length] = "Mary";

console.log(names);
console.log(names.length);

var john = ["John", "Smith", 1990, "teacher", "single"];
console.log(john);
john.push("blue");
john.unshift("Mr.");
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var is_designer = john.indexOf("designer") === -1 ? "Not a designer" : "Is a designer";
console.log(is_designer);
*/

// ******************** //

// CODING CHALLENGE 3
/*
function GetTip(bill){
    switch(true){
        case bill < 50:
            return bill * .20;
        case bill <= 200:
            return bill * .15;
        default:
            return bill * .10;
    }
}

var bills = [124, 48, 268];
var tips = [];
var totals = [];
for (i=0; i<bills.length; i++){
    tips.push(GetTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);
*/

// ******************** //

// OBJECTS
/*
var john = {
    first_name: "John",
    last_name : "Smith",
    birth     : 1990,
    family    : ["Jane", "Mark", "Bob", "Emily"],
    job       : "teacher",
    is_married: false
};
console.log(john.first_name);
console.log(john["last_name"]);

john.job = "designer";
john["is_married"] = true;
console.log(john);

var jane = new Object();
jane.name = "Jane";
jane.age  = 28;
console.log(jane);
*/

// ******************** //
/*
var john = {
    first_name: "John",
    last_name : "Smith",
    birth     : 1994,
    family    : ["Jane", "Mark", "Bob", "Emily"],
    job       : "teacher",
    is_married: false,
    CalcAge   : function(current_year){
        this.age = current_year - this.birth;
    }
};
john.CalcAge(2020);

console.log(john);
*/

// ******************** //

// CODING CHALLENGE 4
/*
function Person(fullName, mass, height){
    GetBMI = function(){return mass/height/height;}
    
    this.fullName = fullName;
    this.mass = mass;
    this.height = height;
    this.BMI = GetBMI();
}

var john = new Person('John Smith', 64, 1.85);
var mark = new Person('Mark Grober', 64, 1.85);

console.log(john);
console.log(mark);

if (john.BMI > mark.BMI){
    console.log(john.fullName + ' has higher BMI than ' + mark.fullName + '.\n(' + john.BMI + ' > ' + mark.BMI + ').');
}
else if (john.BMI < mark.BMI){
    console.log(mark.fullName + ' has higher BMI than ' + john.fullName + '.\n(' + mark.BMI + ' > ' + john.BMI + ').');
}
*/

// ******************** //

// LOOPS AND ITERATIONS

// CODING CHALLENGE 5

function printObject(obj){
    var propValue;
    for(var propName in obj) {
        propValue = obj[propName]
        console.log(propName + '\t:\t' + propValue);
    }
}

function Person(name, bills, porc_1, bill_1, porc_2, bill_2, porc_3){
    getTips     = function(){
        var tips = [];
        for (var i=0 ; i<bills.length ; i++){
            var bill = bills[i];
            switch (true){
                case bill < bill_1:
                    tips.push(bill * porc_1);
                    break;
                case bill < bill_2:
                    tips.push(bill * porc_2);
                    break;
                default:
                    tips.push(bill * porc_3);
            }
        }
        return tips;
    }
    getTotals   = function(tips){
        var totals = [];
        for (var i=0 ; i<bills.length ; i++){
            var bill = bills[i];
            var tip = tips[i];
            totals.push(bill + tip);
        }
        return totals;
    }
    this.name   = name;
    this.bills  = bills;
    this.tips   = getTips();
    this.totals = getTotals(this.tips);
}

function averageTip(tips){
    var sum = 0;
    var n = tips.length;
    for (var i=0 ; i<n ; i++)   sum += tips[i];
    return sum/n;
}

var johnBills = [124, 48, 268, 180, 42];
var john = new Person('John', johnBills, 0.20, 50, .15, 200, .10);
var markBills = [77, 375, 110, 45];
var mark = new Person('Mark', markBills, .20, 100, .10, 300, .25);

printObject(john);
console.log('\n');
printObject(mark);
console.log('\n');

john.avgTip = averageTip(john.tips);
mark.avgTip = averageTip(mark.tips);

if (john.avgTip > mark.avgTip)  console.log("John pays more");
else if (john.avgTip < mark.avgTip)  console.log("Mark pays more");
else console.log('both pays equal');

































































