"use strict";

(function ($) {
    $(document).ready(function () {
        $('.draggable').draggable({
            revert: true,
        });
        $('.droppable').droppable({
            drop: function (event, ui) {
               var name = event.originalEvent.target.parentElement.dataset.item;
               var price = event.originalEvent.target.parentElement.dataset.price;
                var $item = $('<div />').addClass('item-in-cart');
                var itemDescription = (`<span>Name:</span> ${name} <span>Price:</span> ${price} $`);
                $('.basket').append($item.append(itemDescription));
            }
        });
    })
})(jQuery);