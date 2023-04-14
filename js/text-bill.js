// // get a reference to the textbox where the bill type is to be entered
// let billTypeText = document.querySelector(".billTypeText");
// //get a reference to the add button
// const addToBillBtn = document.querySelector(".addToBillBtn");
// //create a variable that will keep track of the total bill
// const totalBill =  parseFloat(document.querySelector('.totalOne').textContent);
// const totalDivTwo = document.querySelector(".totalDivTwo");
// //add an event listener for when the add button is pressed

// addToBillBtn.addEventListener('click',function(){
//   const callTotalOne = document.querySelector('.callTotalOne')
//    let callTotalOneValue = parseFloat(document.querySelector('.callTotalOne').textContent);
//    const smsTotalOne = document.querySelector('.smsTotalOne')
//    let smsTotalOneValue= parseFloat(document.querySelector('.smsTotalOne').textContent);
//    let totalOne = document.querySelector('.totalOne');
//     const billType = billTypeText.value;
//  //in the event listener check if the value in the bill type textbox is 'sms' or 'call'
//     if(billType.trim().toLowerCase() === 'call'){
//       callTotalOneValue+=2.75
//     }else if(billType.trim().toLowerCase() === 'sms'){
//       smsTotalOneValue+=0.75

//     };
// // * add the appropriate value to the running total


//     callTotalOne.innerHTML = callTotalOneValue.toFixed(2);
//     smsTotalOne.innerHTML = smsTotalOneValue.toFixed(2);
//     var totalCost = callTotalOneValue + smsTotalOneValue;
//     totalOne.innerHTML = totalCost.toFixed(2);
// // * display the latest total on the screen

//     let totalOneValue= parseFloat(document.querySelector('.totalOne').textContent);
//     const totalDivTwo = document.querySelector(".totalDivTwo");
//     if (totalOneValue >= 50) {
//       totalDivTwo.classList.remove("warning");
//       totalDivTwo.classList.add("danger");
//     } else if (totalOneValue >= 30) {
//       totalDivTwo.classList.remove("danger");
//       totalDivTwo.classList.add("warning");
//     } else {
//       totalDivTwo.classList.remove("warning", "danger");
//     }
// });




// const resetBillBtn = document.querySelector(".resetBillBtn");
// resetBillBtn.addEventListener('click',function add(){
//   let total = 0;
//   const callTotalOne = document.querySelector('.callTotalOne')
//    let callTotalOneValue = parseFloat(document.querySelector('.callTotalOne').textContent);
//    const smsTotalOne = document.querySelector('.smsTotalOne')
//    let smsTotalOneValue= parseFloat(document.querySelector('.smsTotalOne').textContent);
//    let totalOne = document.querySelector('.totalOne');

//    callTotalOne.innerHTML = total.toFixed(2);
//     smsTotalOne.innerHTML = total.toFixed(2);
//     totalOne.innerHTML = total.toFixed(2);
//     billTypeText.value = "";
//     let totalOneValue= parseFloat(document.querySelector('.totalOne').textContent);
//     const totalDivTwo = document.querySelector(".totalDivTwo");
//     if (totalOneValue >= 50) {
//       totalDivTwo.classList.remove("warning");
//       totalDivTwo.classList.add("danger");
//     } else if (totalOneValue >= 30) {
//       totalDivTwo.classList.remove("danger");
//       totalDivTwo.classList.add("warning");
//     } else {
//       totalDivTwo.classList.remove("warning", "danger");
//     }
// })





// get a reference to the textbox where the bill type is to be entered
let billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
const totalBill =  parseFloat(document.querySelector('.totalOne').textContent);
const totalDivTwo = document.querySelector(".totalDivTwo");
//add an event listener for when the add button is pressed
const callTotalOne = document.querySelector('.callTotalOne')
   let callTotalOneValue = parseFloat(document.querySelector('.callTotalOne').textContent);
   const smsTotalOne = document.querySelector('.smsTotalOne')
   let smsTotalOneValue= parseFloat(document.querySelector('.smsTotalOne').textContent);
   let totalOne = document.querySelector('.totalOne');
    const billType = billTypeText.value;
addToBillBtn.addEventListener('click',function(){
  
 //in the event listener check if the value in the bill type textbox is 'sms' or 'call'
    if(billType.trim().toLowerCase() === 'call'){
      callTotalOneValue+=2.75
    }else if(billType.trim().toLowerCase() === 'sms'){
      smsTotalOneValue+=0.75

    };
// * add the appropriate value to the running total


    callTotalOne.innerHTML = callTotalOneValue.toFixed(2);
    smsTotalOne.innerHTML = smsTotalOneValue.toFixed(2);
    var totalCost = callTotalOneValue + smsTotalOneValue;
    totalOne.innerHTML = totalCost.toFixed(2);
// * display the latest total on the screen

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




const resetBillBtn = document.querySelector(".resetBillBtn");
resetBillBtn.addEventListener('click',function add(){
  let total = 0;
  const callTotalOne = document.querySelector('.callTotalOne')
   let callTotalOneValue = parseFloat(document.querySelector('.callTotalOne').textContent);
   const smsTotalOne = document.querySelector('.smsTotalOne')
   let smsTotalOneValue= parseFloat(document.querySelector('.smsTotalOne').textContent);
   let totalOne = document.querySelector('.totalOne');

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
})