const container = document.querySelector('#container');

let createGrid = (size=16) => {
    for (let i = 1; i < size; i++) {
        const row = document.createElement('div');
        container.appendChild(row);

        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.setAttribute('id', 'innerSquare');
            square.classList.add('square');
            square.style.width = `${960 / size}px`;
            square.style.height = `${500 / size}px`;
            row.appendChild(square);
        }
    }
}