//get a reference to the calculate button
const calculateButton = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotal = document.querySelector(".billTotal");
console.log(billTotal.innerHTML)
//get a reference to the billString
const billStringElement = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
function totalPhoneBill(){
    var counter1 = 0;
    var counter2 = 0;
//  * this function should read the string value entered - split it on a comma.
    let allPhone = billStringElement.value.split(',')
//  * loop over all the entries in the the resulting list
    for(var i=0;i<allPhone.length;i++){
//  * check if it is a call or an sms and add the right amount to the overall total
      if(allPhone[i].trim() === 'call'){
         counter1++;
       }else if(allPhone[i].trim() === 'sms'){
        counter2++;
       };
     };
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
     let money = counter1*2.75+counter2*0.65;
     billTotal.innerHTML = money.toFixed(2)
};
//link the function to a click event on the calculate button
calculateButton.addEventListener('click',totalPhoneBill)