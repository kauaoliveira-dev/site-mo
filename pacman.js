const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let pacman = { x: 150, y: 150, size: 15, dx: 0, dy: 0 };
let comida = { x: 100, y: 100, size: 5 };

function desenharPacman() {
    ctx.beginPath();
    ctx.arc(pacman.x, pacman.y, pacman.size, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(pacman.x, pacman.y);
    ctx.fillStyle = "yellow";
    ctx.fill();
}

function desenharComida() {
    ctx.beginPath();
    ctx.arc(comida.x, comida.y, comida.size, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
}

function mover() {
    pacman.x += pacman.dx;
    pacman.y += pacman.dy;

    if (pacman.x < 0) pacman.x = canvas.width;
    if (pacman.x > canvas.width) pacman.x = 0;
    if (pacman.y < 0) pacman.y = canvas.height;
    if (pacman.y > canvas.height) pacman.y = 0;

    const dist = Math.hypot(pacman.x - comida.x, pacman.y - comida.y);
    if (dist < pacman.size) {
        comida.x = Math.random() * canvas.width;
        comida.y = Math.random() * canvas.height;
    }
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenharComida();
    desenharPacman();
    mover();
    requestAnimationFrame(loop);
}

document.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") pacman.dy = -2, pacman.dx = 0;
    if (e.key === "ArrowDown") pacman.dy = 2, pacman.dx = 0;
    if (e.key === "ArrowLeft") pacman.dx = -2, pacman.dy = 0;
    if (e.key === "ArrowRight") pacman.dx = 2, pacman.dy = 0;
});

loop();
