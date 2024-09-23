document.getElementById('btn-add-money')
.addEventListener('click', function(event) {
  event.preventDefault();
  

const cashOut = getInputFieldValueById('input-add-money');
  
const balance = getTextFieldValueById('cash-out');
const newBalance = balance - cashOut;
document.getElementById('cash-out').innerText = newBalance.toFixed(2);

});

// history function

const historyTab = document.getElementById('history-tab')
const donationTab = document.getElementById('donation-tab')
historyTab.addEventListener('click', function(){

    historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    )
    historyTab.classList.remove('text-gray-600')
    donationTab.classList.remove(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600",
    );

    const historyForm = document.getElementById('history-form');
     historyForm.classList.remove('hidden');

    document.getElementById('donation-form').classList.add('hidden');
    donationTab.add('text-gray-600')

    
    const historyItem = document.createElement('div');
     historyItem.classNames = 'bg-base-100 w-96 shadow-xl border';
     
     historyItem.innerHTML = `
     <p>Taka is Donated for famine-2024 at Feni, Bangladesh</p>
     <p class="text-xl font-bold">${new Date().toLocaleDateString()}</p>
     <p class="text-xl font-bold">${balance.toFixed(2)}</p>
     `
     const historyContainer = document.getElementById('history-list');
     historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    
  })



