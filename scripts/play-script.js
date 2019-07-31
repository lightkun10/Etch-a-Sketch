const container = document.querySelector('#grid')
// let box = document.querySelector('#grid .box')

container.addEventListener('mouseover', (e) => {
  // console.log(e.target.style);
  e.target.style.backgroundColor = '#000';

})

// function that load 16x16 box
let makeGrid = (size) => {
  for(let rows = 0; rows < size; rows++) {
    for(let columns = 0; columns < size; columns++) {
      let box = document.createElement('div');
      box.classList.add('box')
      container.appendChild(box);
    }
  }
}

let resetGrid = (selector) => {
  // selector.style.backgroundColor = '#f3f3f3';
  console.log(selector)
}

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
  makeGrid(16);
})




makeGrid(16);





// const makeBox = document.querySelector('#make-box')
// makeBox.addEventListener('click', (e) => {
//   makeGrid()
//   console.log(e)
// })

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