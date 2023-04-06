// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
const totalBill =  parseFloat(document.querySelector('.totalOne').textContent);
const totalDivTwo = document.querySelector(".totalDivTwo");
//add an event listener for when the add button is pressed

addToBillBtn.addEventListener('click',function(){
  const callTotalOne = document.querySelector('.callTotalOne')
   let callTotalOneValue = parseFloat(document.querySelector('.callTotalOne').textContent);
   const smsTotalOne = document.querySelector('.smsTotalOne')
   let smsTotalOneValue= parseFloat(document.querySelector('.smsTotalOne').textContent);
   let totalOne = document.querySelector('.totalOne');
    const billType = billTypeText.value;
 //in the event listener check if the value in the bill type textbox is 'sms' or 'call'
    if(billType.trim() === 'call'){
      callTotalOneValue+=2.75
      callTotalOne.innerHTML = callTotalOneValue;
    }else if(billType.trim() === 'sms'){
      smsTotalOneValue+=0.75
      smsTotalOne.innerHTML = smsTotalOneValue
    };
// * add the appropriate value to the running total
// * display the latest total on the screen
    totalOne.innerHTML = smsTotalOneValue + callTotalOneValue;

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
});


// * add nothing for invalid values that is not 'call' or 'sms'.

