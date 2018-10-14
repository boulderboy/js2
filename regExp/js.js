"use strict";

var text = document.querySelector('.text');

var edittedText = text.textContent.replace(/\s{1}'/g, ' "');
edittedText = edittedText.replace(/'\s{1}/g, '" ');

text.innerHTML = edittedText;

