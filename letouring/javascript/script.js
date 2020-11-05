/*var btn = document.querySelector('input');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'vidéo') {
    btn.value = 'texte';
    txt.textContent = '';
  } else {
    btn.value = 'texte';
    txt.textContent = '#intro';
  }
}*/

var btn = document.querySelector('input');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'Démarrer la machine') {
    btn.value = 'Arrêter la machine';
    txt.textContent = 'La machine est démarrée !';
  } else {
    btn.value = 'Démarrer la machine';
    txt.textContent = 'La machine est arrêtée.';
  }
}