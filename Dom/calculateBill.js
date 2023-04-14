const calculateButton = document.querySelector(".calculateBtn");
const resetButton = document.querySelector(".resetBtn");
const billTotal = document.querySelector(".billTotal");
const billStringElement = document.querySelector(".billString");
calculateButton.addEventListener('click', function () {
    const totalDiv = document.querySelector(".totalDiv");
    var calculatePhoneBill = totalPhoneBill(billStringElement.value).total;
    billTotal.innerHTML = calculatePhoneBill
  
    var level = totalPhoneBill(billStringElement.value).dangerLevel
  
    if (level === 'danger') {
      totalDiv.classList.remove("warning");
      totalDiv.classList.add("danger");
    } else if (level === 'warning') {
      totalDiv.classList.remove("danger");
      totalDiv.classList.add("warning");
    } else {
      totalDiv.classList.remove("warning", "danger");
    }
  })
  
  resetButton.addEventListener('click', function () {
    let total = 0;
    billStringElement.value = '';
    billTotal.innerHTML = total.toFixed(2);
    const totalDiv = document.querySelector(".totalDiv");
    totalDiv.classList.remove("warning", "danger");
  
  })