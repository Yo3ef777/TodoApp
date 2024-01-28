const $ = document;

function _getid(id) {
  return $.getElementById(id);
}

function _getSelector(selector) {
  return $.querySelectorAll(selector);
}

const InputValue = _getid("input");
const Btn = _getid("btn");
const ulElement = _getid("ul");
const Errors = _getid("p");
const Plus = _getid("h3");
let sum = 1;

// Add value to list :))

Btn.addEventListener("click", () => {
  // if input  === null
  if (InputValue.value === "") {
    InputValue.style.border = "1px solid red";
    Errors.innerText = "Please inter a Current value";
  } else {
    // create element
    let liElement = $.createElement("li");
    let iElement = $.createElement("i");
    // add Atribbiut
    iElement.innerHTML = "remove";
    iElement.className = "i";
    Errors.style.display = " none";
    InputValue.style.border = "none";

    liElement.className = "li";
    liElement.id = "li";
    liElement.innerHTML = `
          
          ${InputValue.value}
             `;
    Plus.innerHTML = `${sum++}`;

    // remove item
    let list = [];

    list.push(iElement);
    list.forEach((element) => {
      element.addEventListener("click", (remover) => {
        remover.target.parentElement.remove();
        Plus.innerHTML = sum -= 1;
      });
    });

    // Add li into ul
    liElement.appendChild(iElement);
    ulElement.appendChild(liElement);
  }
});
