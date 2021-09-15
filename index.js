const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-give");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noofNotes = document.querySelectorAll(".no-of-notes")


const availableNotes = [2000,500,100,20,10,5,1]


checkButton.addEventListener("click", validateBillAndCashAmount);
function validateBillAndCashAmount() 
{


    hideMessage(); 


    
     if(billAmount.value>0) {
        if(cashGiven.value>=billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        }else{
            showMessage("Do you wanna wash plate?");

        }
    } else{
        showMessage("Invalid Bill Amount")
        
    }
};


function calculateChange(amountToBeReturned){
    for (let i =0; i<availableNotes.length; i++){
        const numberofNotes = Math.trunc(amountToBeReturned / availableNotes[i]); 
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noofNotes[i].innerText = numberofNotes;
    }

}

function hideMessage(){
    message.style.display = "none";  
}

function showMessage(msg){
        message.style.display = "block";
        message.innerText = msg;
}