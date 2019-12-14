// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

"use strict";
const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
range.addEventListener("input", elem => {
  const changeFontSize = elem.currentTarget.value;
  text.setAttribute("style", `font-size:${changeFontSize}px`);
});


