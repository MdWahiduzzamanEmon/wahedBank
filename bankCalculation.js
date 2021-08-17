/* 
document.getElementById('deposit-btn').addEventListener('click', function () {
    const Ammount = inputFields("depositAmmount");
    textFields("deposit-total",Ammount,"deposit");
    return Ammount;
})
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const Ammount=inputFields("withdrawAmmount");
     
    textFields("widthdraw-total",Ammount,"withdraw");
    return Ammount;
})
//getting inputFields
function inputFields(inputFieldsId) {
    const inputField = document.getElementById(inputFieldsId);
    const inputFieldAmmount = parseFloat(inputField.value);
    inputField.value = "";
    return inputFieldAmmount;
}
//balance update
function textFields(amountValues,Ammount,add) {
    const amount = document.getElementById(amountValues);
    const amountValue = parseFloat(amount.innerText);
    if (Ammount > 0) {
        document.getElementById("alert_text").classList.add('hidden');
        amount.innerText = amountValue + Ammount;
        //balance
        const balance = document.getElementById("balance");
        const balanceNumber = parseFloat(balance.innerText);
        if (add == "deposit") {
            balance.innerText = balanceNumber + Ammount;
        } else {
            if (balanceNumber < Ammount) {
                document.getElementById("balance_alert_text").classList.remove('hidden');
                amount.innerText = "000";
            } else {
                document.getElementById("balance_alert_text").classList.add('hidden');
                balance.innerText = balanceNumber - Ammount;
            }         
        }
    } else {
        document.getElementById("alert_text").classList.remove('hidden');
    }
} */

/* --------------------------------- 2nd way -------------------------------- */
document.getElementById('deposit-btn').addEventListener('click', function () {
    inputFields("depositAmmount",'deposit-total',"deposit");
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    inputFields("withdrawAmmount",'widthdraw-total',"withdraw");
})


function inputFields(amount,textValue,ValueCalc) {
    //input field
    const inputField = document.getElementById(amount);
    const inputFieldNumber = Number(inputField.value);
    inputField.value = "";

    //text Fields

    const ammount = document.getElementById(textValue);
    const ammountNumber = Number(ammount.innerText);
    
    if (inputFieldNumber > 0) {
        document.getElementById("alert_text").classList.add('hidden');


        ammount.innerText = ammountNumber + inputFieldNumber;

        //balance

        const balance = document.getElementById('balance');
        const balanceNumber = Number(balance.innerText);
 
        if (ValueCalc == "deposit") {
            balance.innerText = balanceNumber + inputFieldNumber;
        } else {
            if (balanceNumber < inputFieldNumber) {
                document.getElementById("balance_alert_text").classList.remove('hidden');
                ammount.innerText = "000";

            } else {
                document.getElementById("balance_alert_text").classList.add('hidden');
                balance.innerText = balanceNumber - inputFieldNumber;
            }
        
        }
    } else {
         document.getElementById("alert_text").classList.remove('hidden');
    }
    
    




    return inputFieldNumber;
}