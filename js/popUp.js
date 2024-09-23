
const openPopupButton = document.getElementById('btn-add-money');
const closePopupButton = document.getElementById('closePopup');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');

// Open the popup
openPopupButton.addEventListener('click', function() {
  overlay.classList.remove('hidden');
  popup.classList.remove('hidden');
});

// Close the popup
closePopupButton.addEventListener('click', function() {
  overlay.classList.add('hidden');
  popup.classList.add('hidden');
});

// Close the popup when clicking outside (on the overlay)
overlay.addEventListener('click', function() {
  overlay.classList.add('hidden');
  popup.classList.add('hidden');
});