// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
let callsTotal = 0;
let smsTotal = 0;
//add an event listener for when the add button is pressed
function textBillTotal(){
    const callTotalTwo = document.querySelector(".callTotalTwo");
    const smsTotalTwo = document.querySelector(".smsTotalTwo");
    const totalTwo = document.querySelector(".totalTwo");
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeRadio']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }
    // update the correct total
    if (billItemType === "call"){
        callsTotal += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwo.innerHTML = totalCost.toFixed(2);
    const totalCostElem = document.querySelector(".totalCostElem");

    if (totalCost >= 50) {
        totalCostElem.classList.remove("warning");
        totalCostElem.classList.add("danger");
      } else if (totalCost >= 30) {
        totalCostElem.classList.remove("danger");
        totalCostElem.classList.add("warning");
      } else {
        totalCostElem.classList.remove("warning", "danger");
      }
}
radioBillAddBtn.addEventListener('click', textBillTotal);


const resetRadioBillBtn = document.querySelector(".resetRadioBillBtn");
resetRadioBillBtn.addEventListener('click',function(){
  let total = 0;
    const callTotalTwo = document.querySelector(".callTotalTwo");
    const smsTotalTwo = document.querySelector(".smsTotalTwo");
    const totalTwo = document.querySelector(".totalTwo");

    callTotalTwo.innerHTML = total.toFixed(2);
    smsTotalTwo.innerHTML = total.toFixed(2);
    var totalCost = callTotalTwo + smsTotalTwo;
    totalTwo.innerHTML = total.toFixed(2);
    const totalCostElem = document.querySelector(".totalCostElem");

    if (totalCost >= 50) {
        totalCostElem.classList.remove("warning");
        totalCostElem.classList.add("danger");
      } else if (totalCost >= 30) {
        totalCostElem.classList.remove("danger");
        totalCostElem.classList.add("warning");
      } else {
        totalCostElem.classList.remove("warning", "danger");
      }
      callsTotal= 0 ;
      smsTotal = 0;

})