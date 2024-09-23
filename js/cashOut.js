document.getElementById('btn-add-money')
.addEventListener('click', function(event) {
  event.preventDefault();
  

const cashOut = getInputFieldValueById('input-add-money');
  
const balance = getTextFieldValueById('cash-out');
const newBalance = balance - cashOut;
document.getElementById('cash-out').innerText = newBalance;

})



