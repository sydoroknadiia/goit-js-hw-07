"use strict"

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const listIngredients = document.querySelector("#ingredients");

function createNewElements (arr) {
    const docNewElem = arr.map (text => {
        const newElements = document.createElement("li");
        newElements.textContent = text;
        return newElements;
    });
    listIngredients.append(...docNewElem);
}

createNewElements(ingredients);


