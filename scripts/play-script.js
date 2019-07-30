// make the box visible upon starting
  // still manually adding box, need to loop.

let box = document.querySelector('.box')
box.addEventListener('mouseover', (e) => {
  console.log(e.target.style);
  e.target.style.backgroundColor = '#000';

})



let boxTwo = document.querySelector('#box2')
boxTwo.addEventListener('mouseover', (e) => {
  console.log(e.target.style);
  e.target.style.backgroundColor = '#000';

})

let boxThree = document.querySelector('#box3')
boxThree.addEventListener('mouseover', (e) => {
  console.log(e.target.style);
  e.target.style.backgroundColor = '#000';

})


let boxWhat = document.querySelector('#boxWhat')
boxWhat.addEventListener('mouseover', (e) => {
  console.log(e.target.style);
  e.target.style.backgroundColor = '#000';

})

let boxWhatTwo = document.querySelector('#boxWhat2')
boxWhatTwo.addEventListener('mouseover', (e) => {
  console.log(e.target.style);
  e.target.style.backgroundColor = '#000';

})