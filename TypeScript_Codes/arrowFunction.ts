// ******************************************** Arrow Function **********************************************************

// ()=>{   
//     console.log("This is an Arrow function");
// }


// function discount_20(){
//     console.log("This is a Normal Fucntion");
// }

// const arrowFunction = ()=>{
//     console.log("This is an Arrow function");
// }
// arrowFunction();


const arrowFunctionResult = (number1: number, number2:number)=>{
    let result = number1 * number2;
    return result;
}
console.log("Result - ",arrowFunctionResult(10,20));
