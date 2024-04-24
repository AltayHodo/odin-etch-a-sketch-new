window.addEventListener('load', () => {
  createGrid(5);
});

function createGrid(n) {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';
  gridContainer.style.display = 'grid';
  gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  for (let i = 0; i < n * n; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.border = '1px solid';
    gridContainer.appendChild(gridItem);
  }
  updateEventListeners('default');
  updateButtons();
}

function updateEventListeners(mode = 'default') {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover', (e) => {
      grid = e.target;
      switch (mode) {
        case 'default':
          grid.style.backgroundColor = 'black';
          break;
        case 'rainbow':
          grid.style.backgroundColor =
            `rgb(${Math.floor(Math.random() * 255)},
                ${Math.floor(Math.random() * 255)},
                ${Math.floor(Math.random() * 255)})`
          break;
        case 'erase':
          grid.style.backgroundColor = 'white';
          break;
        case 'shadow':
          grid.style.backgroundColor = `rgba(0,0,0, ${darkness})`;
          if (darkness < 1) {
            darkness += 0.1;
          }
          break;
      }
    });
  });
}

let darkness = 0;
function updateButtons() {
  const gridButton = document.querySelector('.grid-btn');
  gridButton.addEventListener('click', updateGridSize);

  const rainbowButton = document.querySelector('.rainbow-btn');
  rainbowButton.addEventListener('click', () => {
    updateEventListeners('rainbow');
  });

  const eraseButton = document.querySelector('.erase-btn');
  eraseButton.addEventListener('click', () => {
    updateEventListeners('erase');
  });

  const shadowButton = document.querySelector('.shadow-btn');
  shadowButton.addEventListener('click', () => {
    darkness = 0;
    updateEventListeners('shadow');
  });
}

//fix this- let user press Cancel to exit out of prompt
function updateGridSize() {
  let newSize = parseInt(prompt('Size of grid', 5));
  while (newSize > 100 || newSize < 1 || isNaN(newSize)) {
    newSize = parseInt(prompt('Enter a number between 1 and 100', 5));
  }
  createGrid(newSize);
}
