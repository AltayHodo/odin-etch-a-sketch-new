window.addEventListener('load', () => {
  createGrid(5);
  addEventListeners();
});

function createGrid(n) {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.style.display = 'grid';
  gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  for (let i = 0; i < n * n; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.border = '1px solid';
    gridContainer.appendChild(gridItem);
  }
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

