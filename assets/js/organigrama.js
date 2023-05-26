var galleryItems = document.querySelectorAll('.image-thumb');
var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal-content');
var modalImg = document.querySelector('.modal-content img');

// Abrir modal com a imagem em destaque
function openModal(imgSrc) {
  modalImg.src = imgSrc;
  modal.classList.add('show');
}

// Fechar modal
function closeModal() {
  modal.classList.remove('show');
}

// Adicionar evento de clique para abrir o modal com a imagem em destaque
galleryItems.forEach(function(item) {
  var imgSrc = item.querySelector('img').src;
  item.addEventListener('click', function() {
    openModal(imgSrc);
  });
});

// Fechar o modal quando clicar fora da imagem em destaque
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});