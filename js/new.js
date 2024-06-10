const container = document.querySelector('.container');
const items = document.querySelectorAll('.item');

let currentSlide = 0;

// Update indicator dots (optional)
function updateIndicators(slideIndex) {
  const indicatorDots = document.querySelectorAll('.indicator dot');
  indicatorDots.forEach(dot => dot.classList.remove('active'));
  indicatorDots[slideIndex].classList.add('active');
}

// Handle swipe events (optional, can be replaced with touch events)
container.addEventListener('mousedown', startDrag);
container.addEventListener('mouseup', endDrag);

let startX = 0;
let isDragging = false;

function startDrag(e) {
  startX = e.clientX;
  isDragging = true;
}

function endDrag(e) {
  isDragging = false;
  if (e.clientX - startX > 50) { // Swipe right (previous slide)
    currentSlide--;
  } else if (e.clientX - startX < -50) { // Swipe left (next slide)
    currentSlide++;
  }
  currentSlide = Math.max(0, Math.min(currentSlide, items.length - 1)); // Limit slide index
  container.scrollTo({ left: currentSlide * container.clientWidth, behavior: 'smooth' });
  updateIndicators(currentSlide); // Update indicator dots (optional)
}
