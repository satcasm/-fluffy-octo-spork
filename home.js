$(document).ready(function () {
    $('.navbar-nav a').click(function(e) {

        $('.navbar-nav a.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
        e.preventDefault();
    });
});