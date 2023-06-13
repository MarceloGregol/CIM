document.addEventListener('DOMContentLoaded', function() {
    const cardOrganigrammaDiv = document.querySelectorAll('.card-organigramma');
  
    const sortedDivs = Array.from(cardOrganigrammaDiv).sort((a, b) => {
      const textA = a.querySelector('h4').textContent.toLowerCase();
      const textB = b.querySelector('h4').textContent.toLowerCase();
      return textA.localeCompare(textB);
    });
  
    const container = document.querySelector('.esecutivo-section');
    sortedDivs.forEach(div => {
      container.appendChild(div);
    });
  });