async function search() {
  var input = document.getElementById('searchInput');
  var filter = input.value.toUpperCase();
  var searchResults = document.getElementById('searchResults');

  searchResults.innerHTML = ''; // Limpar resultados anteriores

  // Adicionar mensagem de carregamento
  var loadingMessage = document.createElement('p');
  loadingMessage.textContent = 'Aspettare...';
  searchResults.appendChild(loadingMessage);

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

  // Array para armazenar os resultados encontrados
  var foundResults = [];

  // Função para fazer uma requisição assíncrona
  function makeRequest(url) {
    return new Promise(function(resolve, reject) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var pageContent = this.responseText.toUpperCase();

          // Verificar se o termo de pesquisa está presente no conteúdo da página
          if (pageContent.includes(filter)) {
            var resultItem = {
              url: url.url,
              pagename: url.pagename
            };
            foundResults.push(resultItem);
          }
          resolve();
        }
      };
      xhttp.open('GET', url.url, true);
      xhttp.send();
    });
  }

  // Loop pelas URLs das páginas
  for (var i = 0; i < pageURLs.length; i++) {
    await makeRequest(pageURLs[i]);
  }

  // Remover a mensagem de carregamento
  searchResults.removeChild(loadingMessage);

  if (foundResults.length > 0) {
    // Resultados encontrados
    foundResults.forEach(function(result) {
      var resultItem = document.createElement('li');
      var link = document.createElement('a');
      link.href = result.url;
      link.textContent = result.pagename;
      resultItem.appendChild(link);
      searchResults.appendChild(resultItem);
    });
  } else {
    // Nenhum resultado encontrado
    var resultItem = document.createElement('li');
    var notfound = document.createElement('h6');
    notfound.textContent = 'Spiacente, nessun file trovato.';
    resultItem.appendChild(notfound);
    searchResults.appendChild(resultItem);
  }
}
