var videoIds = ['YiFA5AJeuG8', 'EAzpKNRQnKs', 'eAPHzoIaukk', 'iFlLR9uXNX0'];

// Variável global para armazenar os players do YouTube
var players = [];

// Função de inicialização dos players
function onYouTubeIframeAPIReady() {
    // Criação dos players
    for (var i = 0; i < videoIds.length; i++) {
        var player = new YT.Player('player' + (i + 1), {
            videoId: videoIds[i],
            events: {
                'onReady': onPlayerReady
            }
        });
        players.push(player);
    }
}

// Função executada quando um player estiver pronto
function onPlayerReady(event) {
    
}


//main banner 

// // Aguarde o carregamento completo da página
// window.addEventListener('load', function() {
//     var video = document.getElementById('bg-video');
//     var botaoPlay = document.getElementById('botao-play');

//     if (video && botaoPlay) {
//       botaoPlay.addEventListener('click', function() {
//         video.play();
//       });

//       botaoPlay.click();
//     }
//   });