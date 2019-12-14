// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

"use strict";

let counterValue = 0;
const increment = () => {counterValue += 1};
const decrement = () => {counterValue -= 1};

const value = document.querySelector("#value");
const domIncrement = document.querySelector('.btn2');
const domDecrement = document.querySelector('.btn1');

domIncrement.addEventListener("click", () => {
  increment()
  return value.textContent = counterValue;
});
domDecrement.addEventListener("click", () => {
  decrement()
  return value.textContent = counterValue;
});

