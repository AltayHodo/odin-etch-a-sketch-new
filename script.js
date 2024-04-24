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
  addEventListeners();
}

function addEventListeners(){
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover', (e) =>{
      grid = e.target;
      grid.style.backgroundColor = 'red';
    });
  });
}

const gridButton = document.querySelector('.grid-btn');
gridButton.addEventListener('click', updateGridSize);

function updateGridSize(){
  let newSize = parseInt(prompt('Size of grid', 5));
  while (newSize > 100 || newSize < 1 || isNaN(newSize)){
    newSize = parseInt(prompt('Enter a number between 1 and 100', 5));
  }
  createGrid(newSize);
}