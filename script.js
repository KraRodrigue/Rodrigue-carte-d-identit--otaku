document.getElementById('identity-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Récupération des valeurs du formulaire
  const username = document.getElementById('username').value;
  const realName = document.getElementById('realname').value;
  const nationality = document.getElementById('nationality').value;
  const status = document.getElementById('status').value;
  const genre = document.getElementById('genre').value;
  const quote = document.getElementById('quote').value;
  const photo = document.getElementById('photo').files[0];

  // Mise à jour des textes sur la carte
  document.getElementById('username-text').textContent = username;
  document.getElementById('realname-text').textContent = realName;
  document.getElementById('nationality-text').textContent = nationality;
  document.getElementById('status-text').textContent = status;
  document.getElementById('genre-text').textContent = genre;
  document.getElementById('quote-text').textContent = quote;

  // Prévisualisation de la photo
  if (photo) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const photoPreview = document.getElementById('photo-preview');
          photoPreview.style.backgroundImage = `url(${e.target.result})`;
      };
      reader.readAsDataURL(photo);
  }

  // Afficher le bouton de téléchargement
  document.getElementById('downloadBtn').style.display = 'block';
});

document.getElementById('downloadBtn').addEventListener('click', function() {
  // Capturer la boîte complète (box1)
  html2canvas(document.querySelector('.box1'), {
      scale: 2,  // Pour une meilleure qualité d'image
      backgroundColor: '#ffffff',
      useCORS: true,
      logging: false
  }).then(canvas => {
      // Créer et cliquer sur le lien de téléchargement
      const link = document.createElement('a');
      link.download = 'carte-otaku.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
  });
});