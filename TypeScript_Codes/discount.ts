export function discount_20(discount: number,amount:number){
    let final_amount:number = amount - amount*discount/100;
    return final_amount;
}