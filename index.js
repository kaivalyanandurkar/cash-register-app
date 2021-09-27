const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-give");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")


const availableNotes = [2000,500,100,20,10,5,1]


checkButton.addEventListener("click", validateBillAndCashAmount);
function validateBillAndCashAmount() 
{


    hideMessage(); 

    const billamount = Number(billAmount.value);
    const cashamount = Number(cashGiven.value);
      if (cashamount > 0 && billamount > 0) {
        if (cashamount > billamount) {
          const amountToBeReturned = cashamount - billamount;
          calculateChange(amountToBeReturned);
        } 
        if(cashamount === billamount){
             showMessage("Bill paid");
        }
        if(cashamount < billamount){
            showMessage("Do you wanna wash plates?");
            
        }
      } else if(billamount < 0 || billamount === 0){
        console.log("invalid");
        showMessage(" Invalid input.");
     
      }else {
        console.log("invalid");
        showMessage(" Invalid input.");
        
      }
    };
        


function calculateChange(amountToBeReturned){
    for (let i =0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]); 
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

}

function hideMessage(){
    message.style.display = "none";  
};

function showMessage(msg){
        message.style.display = "block";
        message.innerText = msg;
};