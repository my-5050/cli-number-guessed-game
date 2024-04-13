#! /usr/bin/env node

import inquirer from "inquirer"
//This is number guessing game: computer will generated a random number, user will guess the right number 


const randomnumber = Math.floor(Math.random()*10+1); 
 
const answer=await inquirer.prompt([{

    name:"userguessednumber",
 
    type:"number",
    
    message:"please guess a number b/w 1 to 10"


},]);
// conditional statements:

if (answer.userguessednumber === randomnumber){ 
   console.log(answer,"randomnumber",randomnumber);
   console.log("congratulation! you guessed the right number")
}
else {console.log(answer,"randomnumber",randomnumber)
   console.log("opps! sorry you guessed the wrong number")
}
