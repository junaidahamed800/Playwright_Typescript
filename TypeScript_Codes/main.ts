import { discount_20 } from "./discount.ts";
import {discount_data} from "./discount_testData.ts"

// *************************************** let, const, string, number, boolean, any ******************************************

// let username:string = "Admin_Junaid";
// username = "User_Junaid";
// console.log(username);

// const password:string = "Junaid@123";
// console.log(password);

// let age:number = 32;
// console.log(age);

// let isLive:boolean = true;
// console.log(isLive);

// let isLive:any = false;
// console.log(isLive);

// ************************************************** if - else-if - else ****************************************************

// let isLoggedIn:Boolean = false;
// if(isLoggedIn){
//     console.log("Login Successful");
// }
// else{
//     console.log("Login failed");
// }

// let score:number = 69;
// if(score>=90){
//     console.log("Grade-A");
// }
// else if(score>=80 && score<=90){
//     console.log("Grade-B");
// }
// else if(score>=70 && score<=80){
//     console.log("Grade-C");
// }
// else{
//     console.log("Grade-F");
// }

// **************************************************** Functions ***************************************************************

// function discount(){
//     console.log("this function is a discount calculator");
// }
// discount();

// let discount_percentage:number = 20;
// let total_amount:number = 1000;

// function discount_20(discount: number,amount:number){
//     let final_amount:number = amount - amount*discount/100;
//     return final_amount;
// }

// console.log("Final Amount after discount is: ",discount_20(discount_percentage,total_amount));


// ********************************************* Import & Export - Functions & Files ********************************************

console.log("Final Amount after discount is: ",discount_20(discount_data.discount_percentage,discount_data.total_amount));