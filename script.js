function showLetter() {
  document.getElementById('letter').classList.remove('hidden');
  startConfetti();
}

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for (let i = 0; i < 120; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 6 + 3,
    speed: Math.random() * 3 + 1,
    color: `hsl(${Math.random() * 360}, 100%, 85%)`,
  });
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let piece of pieces) {
    ctx.beginPath();
    ctx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
    ctx.fillStyle = piece.color;
    ctx.fill();
    piece.y += piece.speed;
    if (piece.y > canvas.height) {
      piece.y = 0;
      piece.x = Math.random() * canvas.width;
    }
  }
}

let confettiInterval;
function startConfetti() {
  clearInterval(confettiInterval);
  confettiInterval = setInterval(updateConfetti, 30);
}
