$(document).ready(function() {
    var totalItems = $('.catalog__list .choice-item').length;
    
    $('.catalog__list .choice-item:gt(3)').hide();

    $('.catalog__button').click(function() {
        var hiddenItems = $('.catalog__list .choice-item:hidden');

        if (hiddenItems.length > 0) {
            hiddenItems.slice(0, 4).slideDown('slow');
            
            
        } else {
            $(this).hide();
        }
    });
});