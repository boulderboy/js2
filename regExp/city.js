"use strict";

(function ($) {
    $(document).ready(function () {
        $.ajax({
            url: 'http://localhost:3000/city',
            type: 'GET',
            success: function (cities) {
                cities.forEach(function (city) {
                    $('#cities').append(`<option>${city}</option>>`);
                })
            }
        });


        // var autofill = '';
        // $("#city").on("keydown", function (event) {
        //         var pressedButton = event.key;
        //         if((/^[a-z\s]{1}$/i.test(pressedButton))){
        //            autofill += pressedButton;
        //         } else if(/[а-яё\d]/.test(pressedButton)){
        //             notValidRender('city', 'sdf');
        //         }
        //
        //     if(autofill.length === 3){
        //         $.ajax({
        //             url: 'http://localhost:3000/city',
        //             type: 'GET',
        //             success:function (cities) {
        //                 cities.forEach(function (city) {
        //                     var firstLetters = city[0] + city[1] + city[2];
        //                     if(autofill === firstLetters){
        //                         $()
        //                     }
        //                 })
        //             }
        //         })
        //     }
        // })

        $('#autocomplete').autocomplete({
            serviceUrl: 'service/autocomplete.ashx',
            minChars: 2,
            maxHeight: 500,
            width: 500,
            zIndex: 999,
            lookup:[
                "Moscow",
                "Saint-Petersburg",
                "Berlin",
                "London",
                "Madrid",
                "Barcelona",
                "Tokyo",
                "Beijing",
                "New York",
                "San Francisco",
                "Los Angeles",
                "Cape Town",
                "Rio de Janeiro"
            ],
        })
    })
})(jQuery);