
$(function() {
    var head_n_f = $('.header_nav_first .has-child');
    head_n_f.mouseover(function() {
        $(this).children('.header_nav_second').show();
    }).mouseout(function() {
        $(this).children('.header_nav_second').hide();
    })
});
