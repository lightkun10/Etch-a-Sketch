const container = document.querySelector('#container');

let createGrid = (size=16) => {
    let grid = document.createElement('div');
    grid.setAttribute('id', 'sketch');

    grid.style.setProperty('--setGrid', size)
    addSquare(grid)

    container.appendChild(grid);

    /***************EXPERIMENT***********/
    let newSquareBtn = document.querySelector('#newSquare')
    newSquareBtn.addEventListener('click', (e) => addSquare(grid))
}

let addSquare = (element) => {
    let square = document.createElement('div');
    square.classList.add('square')

    // for(i = square; i < element)

    square.addEventListener('mouseover', (e) => {
        console.log(e);
    })
    

    element.appendChild(square);
}

createGrid()


// /***************EXPERIMENT***********/
// let newSquareBtn = document.querySelector('#newSquare')
// newSquareBtn.addEventListener('click', (e) => addSquare(grid))