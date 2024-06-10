const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const okButton = document.getElementById('okButton');

function openPopup() {
  overlay.style.display = 'block';
  popup.style.display = 'block';
}

function closePopup() {
  overlay.style.display = 'none';
  popup.style.display = 'none';
}

okButton.addEventListener('click', closePopup);

// Call openPopup() function wherever you want to trigger the popup
