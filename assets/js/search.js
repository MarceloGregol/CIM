function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  function searchLinks() {
    var searchInput = document.getElementById("searchInput");
    var searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = ""; // Limpa os resultados anteriores

    var links = document.getElementsByTagName("a");
    var searchTerm = searchInput.value.toLowerCase();

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var linkText = link.textContent.toLowerCase();

      if (linkText.includes(searchTerm)) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = link.href;
        a.textContent = linkText;
        li.appendChild(a);
        searchResults.appendChild(li);
      }
    }
  }