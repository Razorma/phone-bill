
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
  
  const callTotalTwo = document.querySelector(".callTotalTwo");
  const smsTotalTwo = document.querySelector(".smsTotalTwo");
  const totalTwo = document.querySelector(".totalTwo");

const radioBill = radioBillTotal();
radioBillAddBtn.addEventListener("click", function () {
    const checkedRadioBtn = document.querySelector(
      "input[name='billItemTypeRadio']:checked"
    );
    if (checkedRadioBtn) {
      const billItemType = checkedRadioBtn.value;
      radioBill.calculateBill(billItemType);
      const { calls, sms, total } = radioBill.getTotals();
      callTotalTwo.innerHTML = calls;
      smsTotalTwo.innerHTML = sms;
      totalTwo.innerHTML = total;
      const totalCostElem = document.querySelector(".totalCostElem");
      totalCostElem.classList = `totalCostElem ${radioBill.getColor()}`;
  
    }
  });

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
    
      radioBill.resetTotals()
      

})