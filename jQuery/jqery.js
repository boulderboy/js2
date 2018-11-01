"use strict";

(function ($) {
    $(document).ready(function () {
        $('.tabs').on('click', 'li', function (tab) {
            if(!this.classList.contains('active_tab')){
                $(".active_tab").removeClass('active_tab');
                this.classList.add('active_tab');
            }
            $.ajax({
                url:"http://localhost:3000/text",
                type: 'GET',
                success: function (textFromJson) {
                    $('.text-block').text(textFromJson['block_' + tab.currentTarget.dataset.text]);
                }

        })
        })
    })
})(jQuery);