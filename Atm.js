let prompt = require("prompt-sync")();
let balance = Number(prompt("Enter the balance:- "))
let remainingbalance = 0;
console.log("Welcome to ATM\nEnter your card");
console.log("Do you want to continue\n1.YES \n2.NO");
let n = (prompt("Choose the option :-"))
n = n.toLowerCase()
if (n == 1 || n == "yes") {
    console.log("Select your launguage\n1.english\n2.hindi");
    let launguageone = prompt("Select the launguage:- ");
    launguageone = launguageone.toLowerCase()
    if (launguageone == 1 || launguageone == "english") {
        let password = Number(prompt("Enter the password:- "))
        if (password === 12345) {
            console.log("Login sucessfull");
            console.log("choose the one option \n1.withdraw\n2.deposit\n3.balanceinquary");
            let option = prompt("select the option:-")
            option = option.toLowerCase()
            if (option == 1 || option == "withdraw") {
                let withdraw = Number(prompt("Enter the withdraw Amount :-  "))
                remainingbalance = balance - withdraw;
                console.log("Your transaction is successful");
                console.log( "REMAINING BALANCE:-",remainingbalance);
            }
            else if (option ==2 || option == "deposit"){
                let deposit = Number(prompt("Enter the Deposit Amount :-  "))
                remainingbalance = balance + deposit;
                console.log("Your transaction is successful");
                console.log("REMAINING BALANCE:-",remainingbalance);
            }
            else if (option==3 || option=="balanceinquary"){
                console.log(balance);
            }
        }
        else{
            console.log("Enter the valid password");
        }
    }
    else if (launguageone == 2 || launguageone == "hindi") {
        let password = Number(prompt("Password Daliye :- "))
        if (password === 12345) {
            console.log("Login sucessfull");
            console.log("choose the one option \n1.nikalna\n2.zma\n3.puchtach");
            let option = prompt("select the option:-")
            option = option.toLowerCase()
            if (option == 1 || option == "nikalna") {
                let withdraw = Number(prompt("Enter the withdraw Amount :-  "))
                remainingbalance = balance - withdraw;
                console.log("Your transaction is successful");
                console.log( "REMAINING BALANCE:-",remainingbalance);
            }
            else if (option ==2 || option == "zma"){
                let deposit = Number(prompt("Enter the Deposit Amount :-  "))
                remainingbalance = balance + deposit;
                console.log("Your transaction is successful");
                console.log("REMAINING BALANCE:-",remainingbalance);
            }
            else if (option==3 || option=="puchtach"){
                console.log(balance);
            }
        }
        else{
            console.log("Enter the valid password");
        }
    }

}
else if(n==2 || n== "no"){
    console.log("Thank you sir ,You can visit Again ");
}