// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
"use strict";
const input = document.querySelector('#validation-input');

input.addEventListener("blur", elem => {
    const element = elem.currentTarget;
    if (element.value.length == element.dataset.length) {
      element.className = "valid";
    } else {
      element.className = "invalid";
    }
  });

