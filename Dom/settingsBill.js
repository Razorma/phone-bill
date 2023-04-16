const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
const radioBillAddBtnWithSettings = document.querySelector(".radioBillAddBtnWithSettings");
const updateSettings = document.querySelector(".updateSettings");
const totalCostElem2 = document.querySelector(".totalCostElem2");
const totalSettings = document.querySelector(".totalSettings");
const calculateRadioBillTotal = radioBillTotalSettings()
   
  updateSettings.addEventListener('click',function(){
    calculateRadioBillTotal.setCallCost(parseFloat(callCostSetting.value))
    calculateRadioBillTotal.setSmsCost(parseFloat(smsCostSetting.value))
    calculateRadioBillTotal.setWarningLevel(parseFloat(warningLevelSetting.value))
    calculateRadioBillTotal.setDangerLevel(parseFloat(criticalLevelSetting.value))
    
    var totalCost =calculateRadioBillTotal.getTotals().total;
    if (totalCost >= calculateRadioBillTotal.getDangerLevel()) {
        totalCostElem2.classList.remove("warning");
        totalCostElem2.classList.add("danger");
      } else if (totalCost >= calculateRadioBillTotal.getWarningLevel()) {
        totalCostElem2.classList.remove("danger");
        totalCostElem2.classList.add("warning");
      } else {
        totalCostElem2.classList.remove("warning", "danger");
      }
  });
radioBillAddBtnWithSettings.addEventListener('click', function(){
  const callTotalSettings = document.querySelector(".callTotalSettings");
  const smsTotalSettings = document.querySelector(".smsTotalSettings");
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        calculateRadioBillTotal.calculateBill(billItemType)
        let {calls, sms, total} = calculateRadioBillTotal.getTotals()
        callTotalSettings.innerHTML = calls;
        smsTotalSettings.innerHTML = sms;
        var totalCost = calls + sms;
        totalSettings.innerHTML = total;
        const totalCostElem2 = document.querySelector(".totalCostElem2");
        var totalCost =calculateRadioBillTotal.getTotals().total;
        if (totalCost >= calculateRadioBillTotal.getDangerLevel()) {
            totalCostElem2.classList.remove("warning");
            totalCostElem2.classList.add("danger");
            calculateRadioBillTotal.setCallCost(0)
            calculateRadioBillTotal.setSmsCost(0)
          } else if (totalCost >= calculateRadioBillTotal.getWarningLevel()) {
            totalCostElem2.classList.remove("danger");
            totalCostElem2.classList.add("warning");
          } else {
            totalCostElem2.classList.remove("warning", "danger");
          }
    }
});

const resetRadioBillBtnSettings = document.querySelector(".resetRadioBillBtnSettings");
resetRadioBillBtnSettings.addEventListener('click',function(){
  let total = 0;
  const callTotalSettings = document.querySelector(".callTotalSettings");
  const smsTotalSettings = document.querySelector(".smsTotalSettings");
  const totalSettings = document.querySelector(".totalSettings");

  callTotalSettings.innerHTML = total.toFixed(2);
  smsTotalSettings.innerHTML = total.toFixed(2);
  totalSettings.innerHTML = total.toFixed(2);
  

  callCostSetting.value ="";
  smsCostSetting.value ="";
  warningLevelSetting.value="";
  criticalLevelSetting.value="";

  totalCostElem2.classList.remove("warning", "danger");
   calculateRadioBillTotal.setCallCost(0)
   calculateRadioBillTotal.setSmsCost(0)
   calculateRadioBillTotal.resetTotals();
  
})