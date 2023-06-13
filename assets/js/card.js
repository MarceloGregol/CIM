var card = document.querySelector('.card');

card.addEventListener('mouseleave', function() {
  this.querySelector('.card-inner').style.transform = 'none'; // redefinir a transformação ao remover o mouse
});