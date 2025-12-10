// Arquivo: js/script.js

function atualizarGif() {
    // 1. Pega a hora atual (0 a 23)
    const agora = new Date();
    const hora = agora.getHours();

    // 2. Seleciona a imagem pelo ID
    const imagem = document.getElementById('gif-personagem');

    // Segurança: se não achar a imagem, para o código para não dar erro
    if (!imagem) return;

    // 3. Define os caminhos das imagens
    // ATENÇÃO: Verifique se os nomes e extensões (.gif) estão exatos
    const gifManha = "fotos/carinha_correndo_contorno.gif";
    const gifTarde = "fotos/carinha_batendo_contorno.gif"; 
    const gifNoite = "fotos/Animacao_morte.gif"; 

    // 4. Lógica de troca
    if (hora >= 6 && hora < 12) {
        // Manhã (06:00 - 11:59)
        imagem.src = gifManha;
        imagem.alt = "Personagem correndo (Manhã)";
    } 
    else if (hora >= 12 && hora < 18) {
        // Tarde (12:00 - 17:59)
        imagem.src = gifTarde;
        imagem.alt = "Personagem batendo (Tarde)";
    } 
    else {
        // Noite (18:00 - 05:59)
        imagem.src = gifNoite;
        imagem.alt = "Animação noturna";
    }
}

// Executa a função quando a janela terminar de carregar
window.onload = atualizarGif;