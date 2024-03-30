#!/usr/bin/env node
import inquirer from "inquirer";
// points we have to follow in our project:
//1) first with the help of inquirer we need to generate a question of asking a pin
//2) then generate list of options to select which action need to perform
//3) then with the use of if-else method perform action in list of operation
//4) add fastcash option in list and do same procedure to perform action
let myBalance = 50000; // Dollar
let myPin = 1234; //pin code set for account
// first part asking pin:-
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "ENTER YOUR 4 DIGIT PIN CODE:",
        type: "number",
    },
]);
// second part give options list to choose method
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "Check balance", "Fastcash"],
        },
    ]);
    console.log(operationAns);
    // if select withdraw option then ask new question of amout:-
    if (operationAns.Operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "ENTER YOUR AMOUNT ",
                type: "number",
            },
        ]);
        // if someone want to withdraw more money then current balance then run this operation:-
        if (amountAns.amount > myBalance) {
            console.log("Intufficient Balance");
        }
        // after withdraw its show your opertion is sucessful and remaining balance:-
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdraw succsesfully`);
        console.log(`your remaining current Balance is: ${myBalance}`);
        //if checkbalance option selected then show current balance :-
    }
    else if (operationAns.Operation === "Check balance") {
        console.log(`your balance is: ${myBalance}`);
        //if fastcash option selected then show a list of amount which coustmer want to withdraw:-
    }
    else if (operationAns.Operation === "Fastcash") {
        let fastcash = await inquirer.prompt([
            {
                name: "fast",
                message: "How much money you want to withdraw",
                type: "list",
                choices: ["2000", "4000", "6000"],
            },
        ]);
        if (fastcash.fast === "2000") {
            // if withdraw cash if equal to these amount then run this operation:-
            myBalance -= fastcash.fast;
            console.log(`${fastcash.fast} withdraw succsesfully`);
            console.log(`your current Balance is ${myBalance}`);
        }
        if (fastcash.fast === "4000") {
            myBalance -= fastcash.fast;
            console.log(`${fastcash.fast} withdraw succsesfully`);
            console.log(`your current Balance is ${myBalance}`);
        }
        if (fastcash.fast === "6000") {
            myBalance -= fastcash.fast;
            console.log(`${fastcash.fast} withdraw succsesfully`);
            console.log(`your current Balance is ${myBalance}`);
        }
    }
    // if pin is incorrect then show this command:-
}
else {
    console.log(" INCORRECT :- ENTER CORRECT PIN CODE PLEASE");
}
