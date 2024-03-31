"use strict";

const item1 = document.getElementById("nickname");
const item2 = document.getElementById("text");
const list = document.getElementById("list");

function clearTextarea() {
	var textareaForm = document.getElementById("text");
  textareaForm.value = '';
}

function prepend(){
    const createElement = document.createElement("li");
    createElement.textContent = item1.value;
    list.prepend(createElement);
    createElement.textContent = item2.value;
    list.prepend(createElement);
}