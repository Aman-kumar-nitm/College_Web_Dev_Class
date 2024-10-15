// Simple Animation: Move a box across the screen
let position = 0;
const box = document.getElementById('box');

function moveBox() {
  position += 2; // Move by 2px
  box.style.left = position + 'px';

  if (position < window.innerWidth - 50) { // Stop moving if the box reaches the screen's edge
    requestAnimationFrame(moveBox);
  }
}

// Start the animation when the page loads
window.onload = () => {
  moveBox();
};