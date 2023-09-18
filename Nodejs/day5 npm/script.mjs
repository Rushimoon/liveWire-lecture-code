import chalk from 'chalk';
import validator from 'validator';

console.log(chalk.blue("welcome"))

let num=9
   if(num>0)
   {
    console.log(chalk.blue.bgGreen.bold("no is positive"))
   }else if(num==0)
   {
    console.log(chalk.yellow("the num is zero"))
   }else{
    console.log(chalk.red("the num is negative"))
   }

   console.log( validator.isEmail('foom') )
//    validator.isEmail('foo@bar.com'); 

console.log(validator.isUppercase("iugiug"));
console.log(validator.isStrongPassword("Rm@1245")?chalk.green("strong password"):chalk.red("weak Password"))
