
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
event.preventDefault();

const addMoney = getInputFieldValueById('input-add-money');

const balance = getTextFieldValueById('account-balance');
const newBalance = addMoney + balance;
document.getElementById('account-balance').innerText = newBalance.toFixed(2);


    const historyItem = document.createElement('div');
     historyItem.classNames = 'bg-base-100 w-96 shadow-xl border';
  
     
     historyItem.innerHTML = `
     <p class="font-bold">${newBalance.toFixed(2)} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
     <p class="text-xl font-bold">${new Date().toLocaleDateString()}</p>
     `
     
     const historyContainer = document.getElementById('history-list');
     historyContainer.appendChild(historyItem);
})



