
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
event.preventDefault();

const addMoney = getInputFieldValueById('input-add-money');

if(addMoney <= 0 || isNaN(addMoney)){
    alert('Please enter a valid amount');
    return;
}

const balance = getTextFieldValueById('account-balance');
const newBalance = addMoney + balance;
document.getElementById('account-balance').innerText = newBalance.toFixed(2);


const historyItem = document.createElement('div');
 historyItem.classNames = 'bg-base-100 w-full sm:w-96 shadow-xl border p-4';
    
 const currentDateTime = new Date().toString();
 const donationLocation = "Feni, Bangladesh";
 const donationPurpose = "famine-2024";
     
historyItem.innerHTML = `
<p class="font-bold">${newBalance.toFixed(2)} Taka is donate for ${donationPurpose} at ${donationLocation}</p>
<p class="text-sm">Date: ${currentDateTime}</p>
`
    
const historyContainer = document.getElementById('history-list');
historyContainer.appendChild(historyItem);
})



