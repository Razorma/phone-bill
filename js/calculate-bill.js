

function totalPhoneBill(billString) {
  var counter1 = 0;
  var counter2 = 0;

  let allPhone = billString.split(',');
  for (var i = 0; i < allPhone.length; i++) {
    if (allPhone[i].trim().toLowerCase() === 'call') {
      counter1++;
    } else if (allPhone[i].trim().toLowerCase() === 'sms') {
      counter2++;
    }
  }

  let total = counter1 * 2.75 + counter2 * 0.75;
  let dangerLevel = '';

  if (total >= 30) {
    dangerLevel = 'danger';
  } else if (total >= 20) {
    dangerLevel = 'warning';
  }

  return {
    total: total.toFixed(2),
    dangerLevel: dangerLevel
  };
}



