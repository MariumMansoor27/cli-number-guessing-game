#! /usr/bin/env/ node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 10 + 1);
const guessnum = await inquirer.prompt([
    {
        name: "userGuessNum",
        type: "number",
        message: "please guess any number",
    },
]);
if (guessnum.userGuessNum === randomNum) {
    console.log("congratulation you guess the right number");
}
else {
    console.log("sorry you guess the wrong number");
}
