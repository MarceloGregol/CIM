
function search() {
  var input = document.getElementById('searchInput');
  var filter = input.value.toUpperCase();
  var searchResults = document.getElementById('searchResults');

  searchResults.innerHTML = ''; // Limpar resultados anteriores

  // URLs das páginas que você deseja pesquisar
  var pageURLs = [
    {
      url: 'index.html',
      pagename: 'CIM'
    },
    {
      url: 'organigrama.html',
      pagename: 'Organigrama'
    },
    {
      url: 'sederegionali.html',
      pagename: 'Sede Regionali'
    },
    {
      url: 'contatti.html',
      pagename: 'Contatti'
    },
    {
      url: 'delegazioni.html',
      pagename: 'Delegazioni'

    },
    {
      url:'fotos.html',
      pagename: 'Foto'
    },
    { 
      url: 'lostatuto.html',
      pagename: 'Lo Statuto'
    },
    { 
      url: 'video.html',
      pagename: 'Video'
    },
    {
      url: 'presentazione.html',
      pagename: 'Presentazione'
    }
    
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
          link.href = url.url;
          link.textContent = url.pagename // Remover a extensão .html
          resultItem.appendChild(link);
          searchResults.appendChild(resultItem);
          foundResults = true; // Marcar que pelo menos um resultado foi encontrado
          notfound.remove(resultItem)
        } 
      }
    };
    xhttp.open('GET', url.url, true);
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

  