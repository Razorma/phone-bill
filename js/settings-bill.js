
function radioBillTotalSettings(){ 
    var callCost = 0;
    var smsCost = 0;
  
    var callsTotalSetting = 0;
    var smsTotalSetting = 0;
    var warningTotal = 0;
    var criticalTotal = 0;


    function setCallCost(callCostSettings){
      callsTotalSetting = callCostSettings
    }
    function getCallCost(){
      return callsTotalSetting
    }
    function setSmsCost(smsCostSettings){
      smsTotalSetting = smsCostSettings
    }
    function getSmsCost(){
      return smsTotalSetting
    }
    function setWarningLevel(warningSettings){
      warningTotal = warningSettings
    }
    function getWarningLevel(){
      return warningTotal
    }
    function setDangerLevel(dangerSettings){
      criticalTotal = dangerSettings
    }
    function getDangerLevel(){
      return criticalTotal
    }

    function calculateBill(billItemType) {
      if (billItemType === "call") {
        callCost += callsTotalSetting
      } else if (billItemType === "sms") {
        smsCost += smsTotalSetting;
      }
    }
  
    function getTotals() {
      return {
        calls: callCost.toFixed(2),
        sms: smsCost.toFixed(2),
        total: (callCost + smsCost).toFixed(2),
      };
    }
  
    function getColor() {
      const totalCost = callCost + smsCost;
      if (totalCost >= criticalTotal) {
        return "danger";
      } else if (totalCost >= warningTotal) {
        return "warning";
      } else {
        return "";
      }
    }
    function resetTotals() {
      callCost = 0;
      smsCost = 0;
    }
  
    
      
      return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setDangerLevel,
        getDangerLevel,
        calculateBill,
        getTotals,
        getColor,
        resetTotals,
      };
      
  }


