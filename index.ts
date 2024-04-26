#! /usr/bin/env node
import inquirer from "inquirer";

const Currency: any = {
    USD: 1,  //Base curreny 
    EUR: 0.91,
    GBP: 0.76,
    INR: 76.57,
    PKR: 280,
};
let  user_answer = await inquirer.prompt(
    [
        {
           name: "from",
           type: "list",
           message: "Enter from Currency",
           choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        },
        {
            name: "to",
            types: "list",
            message: "Enter to Currency",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        },
        {
            name: "amount",
            types: "number",
            message: "Enter to Amount",
            choices: "",
        }   
    ]
);

let fromAmount = Currency[user_answer.from]
let toAmount = Currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);