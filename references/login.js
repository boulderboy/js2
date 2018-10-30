"use strict";

(function ($) {
    $(document).ready(function () {
            $('#login-btn').on('click', function () {
                event.preventDefault();
                $.ajax({
                    url: ' http://localhost:3000/passwords',
                    type: 'GET',
                    success: function (pass) {
                        pass.forEach(function (passw) {
                            if($('#admin-login').val() === passw.login){
                                if($('#admin-pass').val() === passw.password){
                                    var url = 'http://127.0.0.1:8080/check-references.html';
                                    $(location).attr('href', url);
                                }
                            }
                        })

                    }
                })
            })

        }
    );
})(jQuery);