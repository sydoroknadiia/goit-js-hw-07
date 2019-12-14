// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
"use strict";
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const span = {
    defaultValue: "незнакомец",
    message: "",
    };
const reName = (elem, num) => {
    elem.textContent = num;
};
const changeName = name => {
    span.message = name || span.defaultValue;
};
input.addEventListener("input", () => {
    changeName(input.value);
    reName(output, span.message);
});



