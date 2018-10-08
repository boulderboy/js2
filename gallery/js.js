"use strict";

var $button = document.querySelector('button');
$button.addEventListener('click', function(event){
    var xhr = new XMLHttpRequest();
    var $response;
    var $gallery = document.querySelector('.gallery');
    xhr.open('GET', 'http://127.0.0.1:8080/images.json');

    xhr.send();

    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                var pictures = JSON.parse(xhr.responseText);
                pictures.forEach(function (picture) {
                    var img = document.createElement('img');
                    img.src = picture.mini_url;
                    img.dataset.full_url = picture.full_url;
                    img.addEventListener("click", function(event){
                        if(!document.querySelector('.wrapper')){
                            var $wrapper = document.createElement('div');
                            $wrapper.id = 'wrapper';
                            var $wrapper__screen = document.createElement('div')
                            $wrapper__screen.classList.add('wrapper__screen');
                            $wrapper__screen.addEventListener('click', function (event) {
                                document.getElementById('wrapper').remove();
                            });
                            document.querySelector('.container').appendChild($wrapper);
                            $wrapper.appendChild($wrapper__screen);
                            var $fullImg = document.createElement('img');
                            $fullImg.classList.add('full_img');
                            $fullImg.src = img.dataset.full_url;
                            $wrapper.appendChild($fullImg);
                        }
                    });
                    $gallery.appendChild(img);
                })
            }
        }
    }

});
