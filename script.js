document.addEventListener("DOMContentLoaded", () => {
    const musica = document.getElementById("musica");
    const botao = document.getElementById("btnMusica");

    if (!musica || !botao) return;

    botao.addEventListener("click", () => {
        if (musica.paused) {
            musica.play();
            botao.textContent = "⏸️ Pausar";
        } else {
            musica.pause();
            botao.textContent = "🎵 Tocar";
        }
    });
});