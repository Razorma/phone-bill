const textBill = textBillTotal();

let billTypeText = document.querySelector(".billTypeText");
const addToBillBtn = document.querySelector(".addToBillBtn");
const totalBill =  parseFloat(document.querySelector('.totalOne').textContent);
const totalDivTwo = document.querySelector(".totalDivTwo");
const callTotalOne = document.querySelector('.callTotalOne')
const smsTotalOne = document.querySelector('.smsTotalOne') 
let totalOne = document.querySelector('.totalOne');

addToBillBtn.addEventListener('click',function(){
  const billType = billTypeText.value;
  textBill.calculateBill(billType);
  const { calls, sms, total } = textBill.getTotals();
  callTotalOne.innerHTML = calls;
  smsTotalOne.innerHTML = sms;
  totalOne.innerHTML = total;
  const totalDivTwo = document.querySelector(".totalDivTwo");
  totalDivTwo.classList = `totalDivTwo ${textBill.getColor()}`;

});

const resetBillBtn = document.querySelector(".resetBillBtn");
resetBillBtn.addEventListener('click',function add(){
  let total = 0;
    callTotalOne.innerHTML = total.toFixed(2);
    smsTotalOne.innerHTML = total.toFixed(2);
    totalOne.innerHTML = total.toFixed(2);
    billTypeText.value = "";
    let totalOneValue= parseFloat(document.querySelector('.totalOne').textContent);
    const totalDivTwo = document.querySelector(".totalDivTwo");
    if (totalOneValue >= 50) {
      totalDivTwo.classList.remove("warning");
      totalDivTwo.classList.add("danger");
    } else if (totalOneValue >= 30) {
      totalDivTwo.classList.remove("danger");
      totalDivTwo.classList.add("warning");
    } else {
      totalDivTwo.classList.remove("warning", "danger");
    }
    textBill.resetTotals()
})