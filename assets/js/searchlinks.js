
function search() {
  var input = document.getElementById('searchInput');
  var filter = input.value.toUpperCase();
  var searchResults = document.getElementById('searchResults');

  searchResults.innerHTML = ''; // Limpar resultados anteriores

  // URLs das páginas que você deseja pesquisar
  var pageURLs = [
    'index.html',
    'organigrama.html',
    'sederegionali.html',
    'contatti.html',
    'delegazioni.html',
    'fotos.html',
    'lostatuto.html',
    'video.html',
    'presentazione.html'
  ];

  // Variável para controlar se algum resultado foi encontrado
  var foundResults = false;

  // Loop pelas URLs das páginas
  pageURLs.forEach(function(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var pageContent = this.responseText.toUpperCase();

        // Verificar se o termo de pesquisa está presente no conteúdo da página
        if (pageContent.includes(filter)) {
          var resultItem = document.createElement('li');
          var link = document.createElement('a');
          link.href = url;
          link.textContent = url.substring(0, url.lastIndexOf('.html')); // Remover a extensão .html
          resultItem.appendChild(link);
          searchResults.appendChild(resultItem);
          foundResults = true; // Marcar que pelo menos um resultado foi encontrado
          notfound.remove(resultItem)
        } 
      }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
  });

  if (foundResults == false) {
    var resultItem = document.createElement('li');
    var notfound = document.createElement('h6');
    notfound.textContent = "Spiacente, nessun file trovato." 
    resultItem.appendChild(notfound);
    searchResults.appendChild(resultItem);
  }
}

  