const savings=(all_payment,livingCost)=>{
    if(typeof all_payment == "object" && typeof livingCost == "number"){
        let sum = 0;
        for(let i=0;i<all_payment.length;i++){
            let element = all_payment[i];
            if(element >= 3000){
                const amount = element - (element * 0.20);
                sum+=amount;
            }
            else{
                sum+=element;
            }
        }
        const sav = sum-livingCost;
        if(sav < 0){
            return "earn more";
        }
        else{
            return sav;
        }
    }
    else{
        return "Invalid Input";
    }
}

const all_payment = [900, 2700, 3400];
const livingCost = 10000;
const saving = savings(all_payment,livingCost);
console.log(saving);