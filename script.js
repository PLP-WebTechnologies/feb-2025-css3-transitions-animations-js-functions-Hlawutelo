const colorPicker = document.getElementById('colorPicker');
const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');
const spinBtn = document.getElementById('spinBtn');

// Load saved color from localStorage
const savedColor = localStorage.getItem('favoriteColor');
if (savedColor) {
  colorPicker.value = savedColor;
  box.style.background = savedColor;
}

// Save color to localStorage and update box color
colorPicker.addEventListener('input', (e) => {
  const color = e.target.value;
  localStorage.setItem('favoriteColor', color);
  box.style.background = color;
});

let toggle = false;

animateBtn.addEventListener('click', () => {
  box.classList.remove('animated', 'spin');
  void box.offsetWidth; // trigger reflow

  if (toggle) {
    box.classList.add('animated'); // side to side
  } else {
    box.classList.add('spin'); // spin
  }
  toggle = !toggle;
});
