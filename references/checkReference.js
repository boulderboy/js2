"use strict";

function renderReferencesBlock() {
    $('#container').empty();
    $.ajax({
        url: 'http://localhost:3000/reviews',
        type: 'GET',
        success: function (references) {
            references.forEach(function (reference) {
                    renderReference(reference.text, reference.name, reference.id, reference.approved);
            })
        }
    });
}

function renderReference (text, user, id, aprooved){
    var $referenceBlock = $('<div />');
    $referenceBlock.addClass('input-group mb-3');
    var $buttonsBlock = $('<div />', {
        'data-id': id,
    });
    $buttonsBlock.addClass('input-group-prepend');
    var $okButton = $('<button />');
    $okButton.addClass('btn btn-outline-secondary').attr('id','ok-button');
    $okButton.text('Ok');
    var $notOkButton = $('<button />');
    $notOkButton.addClass('btn btn-outline-secondary').attr('id', 'not-ok-button');
    $notOkButton.text('Not Ok');
    var $referenceText = $('<input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3">');
    if(+aprooved === 0){
        $referenceText.addClass('is-invalid');
    }   else {
        $referenceText.addClass('is-valid');
    }
    $referenceText.val(`From: ${user} \n Reference: ${text}`);
    $buttonsBlock.append($okButton, $notOkButton);
    $($referenceBlock).append($buttonsBlock, $referenceText);
    $('#container').append($referenceBlock);
}

(function ($) {
    $(document).ready(function () {
        renderReferencesBlock();


        $('#container').on('click', '#ok-button', function () {
            $.ajax({
                url: 'http://localhost:3000/reviews/' + $(this).parent().data().id,
                type: 'PATCH',
                data: {"approved": 1},
                success: function() {
                    console.log('review was approved');
                    renderReferencesBlock();
                }
            });
        })

        $('#container').on('click', '#not-ok-button', function () {
            $.ajax({
                url: 'http://localhost:3000/reviews/' + $(this).parent().data().id,
                type: 'DELETE',
                success: function() {
                    console.log('review was deleted');
                    renderReferencesBlock();
                }
            });
        })
    })
})(jQuery);
