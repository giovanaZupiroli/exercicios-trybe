// // SELETORES
// const INPUT_TEXT = document.querySelector("#input-text");
// const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
// const HREF_LINK = document.querySelector("#href");

// HREF_LINK.addEventListener('click', (event) => {
//   event.preventDefault();
// })

// INPUT_CHECKBOX.addEventListener('click', (event) => {
//   event.preventDefault();
// })

// INPUT_TEXT.addEventListener('keypress', (event) => {
//   const letra = event.key
//   if (letra !== 'a') {
//     event.preventDefault();
//   }
// });

const button = document.querySelector('#button');
button.addEventListener('click', (event) => {
  event.preventDefault();
})

const form = document.querySelector('#form');
let reset = document.createElement('button');
form.appendChild(reset);

function resetFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for(let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}
window.onload = function() {
  const clear = document.querySelector('#clear');
  clear.addEventListener('click', resetFields);
}