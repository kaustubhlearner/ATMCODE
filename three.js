let prompt = require("prompt-sync")();
console.log("Welcome Here Do you want to continue \n1.Yes\n2.No  ");
let a = prompt("Please Choose your otpion :-")
a=a.toLowerCase()
if (a == "yes" || a==1){
    console.log("1.January\n2.February\n3.March\n4.April\n5.May\n6.June\n7.July\n8.August\n9.September\n10.October\n11.November\n12.December " );
    let month = prompt("Enter the Month:- ")
    month = month.toUpperCase()
    if (month == 1 || month == "JAN") {
        console.log("welcome to janunary month");
    }
    else if (month == 2 || month == "FEB") {
        console.log("welcome to february month");
    }
    else if (month == 3 || month == "MAR") {
        console.log("welcome to March month");
    }
    else if (month == 4 || month == "APR") {
        console.log("welcome to april month");
    }
    else if (month == 5 || month == "MAY") {
        console.log("welcome to may month");
    }
    else if (month == 6 || month == "JUN") {
        console.log("welcome to june month");
    }
    else if (month == 7 || month == "JUL") {
        console.log("welcome to july month");
    }
    else if (month == 8 || month == "AUG") {
        console.log("welcome to august month");
    }
    else if (month == 9 || month == "SEP") {
        console.log("welcome to september month");
    }
    else if (month == 10 || month == "OCT") {
        console.log("welcome to october month");
    }
    else if (month == 11 || month == "NOV") {
        console.log("welcome to november month");
    }
    else if (month == 12 || month == "DEC") {
        console.log("welcome to december month");
    }
    else {
        console.log("enter the valid month");
    }
}
else if(a=="no" || a==2){
    console.log("Thank  you can visit again");
}
else{
    console.log("Please choose valid  Option");
}