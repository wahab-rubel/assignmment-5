
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
event.preventDefault();

const addMoney = getInputFieldValueById('input-add-money');

const balance = getTextFieldValueById('account-balance');
const newBalance = addMoney + balance;
document.getElementById('account-balance').innerText = newBalance.toFixed(2);

})



