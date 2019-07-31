const container = document.querySelector('#grid')
const containers = document.querySelector('.container')

container.addEventListener('mouseover', (e) => {
  // console.log(e.target.style);
  e.target.style.backgroundColor = '#000';

})

// function that load 16x16 box
let makeGrid = (size) => {
  //make logic for <= 4 size
  if(size <= 4) {
    for(let rows = 0; rows < size; rows++) {
      let box = document.createElement('div');
      console.log(container)

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
          // console.log(box.style);
          // console.log(box);
          let newSize = 500 / size - 0.9;

          box.style.width = `${newSize}px`;
          box.style.height = `${newSize}px`;

          container.appendChild(box);
          containers.appendChild(container);
      }
    }
  }
}

let resetGrid = (selector) => {
  // selector.style.backgroundColor = '#f3f3f3';
  console.log(selector)
}


// makeGrid(16);
makeGrid(16);


// add button to reset
let newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', (e) => {
  resetGrid(container)
  // container.children.getElementsByClassName('box')
  // console.log(children)
  // resetGrid(container.children.length)

  for(let i=0; i < container.children.length; i+container.children.length) {
    // container.children[i].classList.remove('box')
    container.removeChild(container.children[i])
  }

  let size = prompt('How many boxes per sides?')

  makeGrid(size);
})

/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/*********************************************************************/


// const container = document.querySelector('#grid')
// // make the box visible upon starting
//   // still manually adding box, need to loop.

// let box = document.querySelector('.box')
// box.addEventListener('mouseover', (e) => {
//   console.log(e.target.style);
//   e.target.style.backgroundColor = '#000';

// })

// // function that load 16x16 box
// let makeGrid = (size) => {
//   for(let rows = 0; rows < size - 1; rows++) {
//     for(let columns = 0; columns < size + 1; columns++) {
//       let box = document.createElement('div');
//       box.classList.add('box')
//       container.appendChild(box);
//     }
//   }
// }

// makeGrid(16);




// add button to reset
// let newGrid = document.querySelector('#newGrid');
// newGrid.addEventListener('click', (e) => {
//   resetGrid(container)
//   // container.children.getElementsByClassName('box')
//   // console.log(children)
//   // resetGrid(container.children.length)

//   for(let i=0; i < container.children.length; i+container.children.length) {
//     // container.children[i].classList.remove('box')
//     container.removeChild(container.children[i])
//   }
//   makeGrid(16);
// })


// let makeGrid = (size) => {
//   for(let rows = 0; rows < size; rows++) {
//     for(let columns = 0; columns < size; columns++) {
//       let box = document.createElement('div');
//       box.classList.add('box')
//       container.appendChild(box);
//     }
//   }
// }