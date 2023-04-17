//calculate-bill.tests.js

describe('totalPhoneBill', function() {
  it('should return the total phone bill and danger level for a given input string', function() {
    const result = totalPhoneBill('call,sms,call,call,sms,call,sms');
    assert.equal(result.total, '13.25');
    assert.equal(result.dangerLevel, '');
  });

  it('should handle input strings with whitespace correctly', function() {
    const result = totalPhoneBill(' call, sms , call, Call, SMS');
    assert.equal(result.total, '9.75');
    assert.equal(result.dangerLevel, '');
  });

  it('should set the danger level to "warning" when the total phone bill is between 20 and 30', function() {
    const result = totalPhoneBill('call,call,call,sms,sms,call,call,call,sms,sms,call');
    assert.equal(result.total, '22.25');
    assert.equal(result.dangerLevel, 'warning');
  });

  it('should set the danger level to "danger" when the total phone bill is 30 or more', function() {
    const result = totalPhoneBill('call,call,call,call,call,call,sms,sms,sms,sms,call,call,call,call,call,call,sms,sms,sms,sms');
    assert.equal(result.total, '39.00');
    assert.equal(result.dangerLevel, 'danger');
  });
});
