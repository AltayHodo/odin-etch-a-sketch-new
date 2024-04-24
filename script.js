const gridContainer = document.querySelector('.grid-container');


function createGrid(n) {
  gridContainer.style.display = 'grid';
  gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  for (let i = 0; i < n * n; i++) {
    const gridItem = document.createElement('div');
    gridItem.textContent = i;
    gridItem.style.border = '1px solid'
    gridContainer.appendChild(gridItem);
  }
}

createGrid(5)


