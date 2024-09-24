
const openPopupButton = document.getElementById('btn-add-money');
const closePopupButton = document.getElementById('closePopup');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');


openPopupButton.addEventListener('click', function() {
  overlay.classList.remove('hidden');
  popup.classList.remove('hidden');
});


closePopupButton.addEventListener('click', function() {
  overlay.classList.add('hidden');
  popup.classList.add('hidden');
});


overlay.addEventListener('click', function() {
  overlay.classList.add('hidden');
  popup.classList.add('hidden');

});
