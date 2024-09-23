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

    document.getElementById('history-form').classList.remove('hidden');
    document.getElementById('donation-form').classList.add('hidden');
    donationTab.add('text-gray-600')

  })

  donationTab.addEventListener('click', function(){
    donationTab.classList.add(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600",
    );
    historyTab.classList.remove(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600",
    );
    document.getElementById('donation-form').classList.remove('hidden');
    document.getElementById('history-form').classList.add('hidden');


  })

  


