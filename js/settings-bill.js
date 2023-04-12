// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
const radioBillAddBtnWithSettings = document.querySelector(".radioBillAddBtnWithSettings");
//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;
var warningCost = 0;
var criticalCost = 0;
// create a variables that will keep track of all three totals.
var callsTotalSetting = 0;
var smsTotalSetting = 0;
var warningTotal = 0;
var criticalTotal = 0;
//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click',function(){
    callCost = parseFloat(callCostSetting.value);
    smsCost = parseFloat(smsCostSetting.value);
    warningCost = parseFloat(warningLevelSetting.value);
    criticalCost = parseFloat(criticalLevelSetting.value);
    
    const totalCostElem2 = document.querySelector(".totalCostElem2");
    const totalSettings = document.querySelector(".totalSettings");
    var totalCost = parseFloat(totalSettings.innerHTML);
    if (totalCost >= criticalCost) {
        totalCostElem2.classList.remove("warning");
        totalCostElem2.classList.add("danger");
      } else if (totalCost >= warningCost) {
        totalCostElem2.classList.remove("danger");
        totalCostElem2.classList.add("warning");
      } else {
        totalCostElem2.classList.remove("warning", "danger");
      }
  });
  
//add an event listener for when the add button is pressed
function textBillTotal(){
    const callTotalSettings = document.querySelector(".callTotalSettings");
    const smsTotalSettings = document.querySelector(".smsTotalSettings");
    const totalSettings = document.querySelector(".totalSettings");
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }
    // update the correct total
    if (billItemType === "call"){
        callsTotalSetting += callCost
    }
    else if (billItemType === "sms"){
        smsTotalSetting += smsCost;
    }
    
    //update the totals that is displayed on the screen.
    callTotalSettings.innerHTML = callsTotalSetting.toFixed(2);
    smsTotalSettings.innerHTML = smsTotalSetting.toFixed(2);
    var totalCost = callsTotalSetting + smsTotalSetting;
    totalSettings.innerHTML = totalCost.toFixed(2);
    const totalCostElem2 = document.querySelector(".totalCostElem2");
    if (totalCost >= criticalCost) {
        totalCostElem2.classList.remove("warning");
        totalCostElem2.classList.add("danger");
        callCost =0;
        smsCost =0;
       
      } else if (totalCost >= warningCost) {
        totalCostElem2.classList.remove("danger");
        totalCostElem2.classList.add("warning");
      } else {
        totalCostElem2.classList.remove("warning", "danger");
      }
}
radioBillAddBtnWithSettings.addEventListener('click', textBillTotal);

const resetRadioBillBtnSettings = document.querySelector(".resetRadioBillBtnSettings");
resetRadioBillBtnSettings.addEventListener('click',function(){
  let total = 0;
  const callTotalSettings = document.querySelector(".callTotalSettings");
  const smsTotalSettings = document.querySelector(".smsTotalSettings");
  const totalSettings = document.querySelector(".totalSettings");

  callTotalSettings.innerHTML = total.toFixed(2);
  smsTotalSettings.innerHTML = total.toFixed(2);
    var totalCost = total.toFixed(2);
    totalSettings.innerHTML = total.toFixed(2);
    const totalCostElem2 = document.querySelector(".totalCostElem2");

      callCostSetting.value ="";
      smsCostSetting.value ="";
      warningLevelSetting.value="";
      criticalLevelSetting.value="";

      totalCostElem2.classList.remove("warning", "danger");
        callCost = 0;
        smsCost = 0;
        callsTotalSetting =0;
        smsTotalSetting =0;
})

