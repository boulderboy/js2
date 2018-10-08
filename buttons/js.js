"use strict";

var $buttons = document.querySelectorAll('button');

$buttons.forEach(function ($button) {
    $button.addEventListener("click", function(event) {

        var $xhr = new XMLHttpRequest();
        $xhr.open('GET', 'http://127.0.0.1:8080/'+ event.srcElement.dataset.status + '.json');
        $xhr.send();

        $xhr.onreadystatechange = function (){
            if($xhr.readyState === XMLHttpRequest.DONE){
                if($xhr.status === 200){
                    var status = JSON.parse($xhr.responseText);
                    $button.classList.add(status.result);
                }
            }
        }
    });
});


