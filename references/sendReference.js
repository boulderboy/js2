"use strict";

(function ($) {
    $(document).ready(function () {
        var idCounter = 0;
        $.ajax({
            url:'http://localhost:3000/reviews',
            type:'GET',
            success: function (references) {
                idCounter = +references[references.length - 1].id;
            }
        });
        $('#send').on('click', function () {
            idCounter++;
            var reference = {};
            reference.text = $('#reference').val();
            reference.name = $('#email').val();
            reference.approved = 0;
            reference.id = idCounter;
            $.ajax({
                url: 'http://localhost:3000/reviews',
                type: 'POST',
                data: reference,
                success: function () {
                    alert('Your review on moderation now');
                }
            })
        })
    })
})(jQuery);