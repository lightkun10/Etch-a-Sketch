const containers = document.querySelector('.container')
const container = document.querySelector('#grid')

container.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = '#000';
})

// function that load the grid
let makeGrid = (size) => {
  if(size <= 4) {
    for(let rows = 0; rows < size; rows++) {
      let box = document.createElement('div');

      let newSize = 500 / size;

      box.style.width = `${newSize}px`;
      box.style.height = '500px';
      
      box.classList.add('box')
      container.appendChild(box);
      containers.appendChild(container)
    } 
  } else if(size > 4) {
      for(let rows = 0; rows < size; rows++) {
        for(let columns = 0; columns < size; columns++) {
          let box = document.createElement('div');
          box.classList.add('box')

          container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
          let newSize = 500 / size - 0.9;

          box.style.width = `${newSize}px`;
          box.style.height = `${newSize}px`;

          container.appendChild(box);
          containers.appendChild(container);
      }
    }
  }
}

// add button effect to reset grid
let newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', (e) => {
  for(let i=0; i < container.children.length; i+container.children.length) {
    container.removeChild(container.children[i])
  }
  let size = prompt('How many boxes per sides?')

  makeGrid(size);
})

// call the function
makeGrid(16);