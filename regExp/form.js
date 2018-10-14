"use strict";

var sendButton = document.querySelector('button');
sendButton.addEventListener("click", function (event) {
    event.preventDefault();
    var name = document.querySelector('#name').value;
    var phone = document.querySelector('#phone').value;
    var eMail = document.querySelector('#e-mail').value;
    var text = document.querySelector('#text').value;
    var nameRegExp = /^[a-zA-Zа-яА-Я']+\s?[a-zA-Zа-яА-Я']+$/u;
    var phoneRegExp = /^\+\d{1,5}\(\d{3}\)\d{3}-\d{4}$/;
    var eMailRegExp = /^[\w\.\-]+\@{1}\w+\.[a-z]+/;
    var textRegExp = /[\w\s]{15,}/;

    if(!nameRegExp.test(name)){
        notValidRender('name', 'characters only');
    } else {
        validRender('name');
    }
    if(!phoneRegExp.test(phone)){
        notValidRender('phone', '+7(000)-000 0000 format');
    } else {
        validRender('phone')
    }
    if(!eMailRegExp.test(eMail)){
        notValidRender('e-mail', 'email@email.com format');
    } else {
        validRender('e-mail')
    }
    if(!textRegExp.test(text)){
        notValidRender('text', 'min 15 char');
    } else {
        validRender('text');
    }

});

function notValidRender(id, text) {
    if(!document.querySelector(`#${id}`).classList.contains('is-invalid')){
        var holder = document.querySelector(`#${id}`);
        holder.classList.add('is-invalid', 'form-control');
        var errorText = text;
        var errorTextContainer = document.createElement('div');
        errorTextContainer.classList.add('invalid-feedback');
        errorTextContainer.id = 'textContainer'+id;
        errorTextContainer.textContent = errorText;
        holder.parentElement.appendChild(errorTextContainer);
    }
};

function validRender(id) {
    var element = document.querySelector(`#${id}`);
    if(element.classList.contains('is-invalid')){
       element.classList.remove('is-invalid');
    }
    element.classList.add('form-control', 'is-valid');
    if(!element.parentElement.querySelector('.invalid-feedback')){
        var textDiv = document.createElement('div');
        textDiv.id = 'textContainer' + id;
        element.parentElement.appendChild(textDiv);
    }
    var textContainer = document.getElementById('textContainer' + id);
    textContainer.classList.remove('invalid-feedback');
    textContainer.classList.add('valid-feedback');
    textContainer.textContent = 'OK';

}