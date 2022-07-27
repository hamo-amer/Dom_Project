var totalPrice = document.querySelector(".total-price");
var unitPrices = document.querySelectorAll(".unit-price");
var btnsPlus = document.querySelectorAll(".plus-btn");
var btnsMinus = document.querySelectorAll(".minus-btn");
var quantities = document.querySelectorAll(".qute");
var hearts = document.querySelectorAll(".fa-heart");
var removeBtns = document.querySelectorAll(".fa-trash-alt");
var cards = document.querySelectorAll(".card");

function total() {
  unitPrices = document.querySelectorAll(".unit-price");
  quantities = document.querySelectorAll(".qute");
  var sum = 0;
  for (let i = 0; i < quantities.length; i++) {
    sum += quantities[i].innerText * unitPrices[i].innerText;
  }
  totalPrice.innerText = sum;
}
for (let i = 0; i < btnsMinus.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
    quantities[i].innerText++;
    total();
  });
  btnsMinus[i].addEventListener("click", function () {
    if (quantities[i].innerText > 0) {
      quantities[i].innerText--;
      total();
    }
  });
}
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    if (hearts[i].style.color !== "red") {
      hearts[i].style.color = "red";
    } else {
      hearts[i].style.color = "black";
    }
  });
}
for (let i = 0; i < removeBtns.length; i++) {
  removeBtns[i].addEventListener("click", function () {
    //removeBtns[i].parentNode.parentNode.parentNode.remove();
    cards[i].remove();
    total();
    console.log(quantities);
  });
}
