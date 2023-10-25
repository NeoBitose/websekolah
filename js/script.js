$('.back-to-top').on('click', function(e) {
    var el = $(this).attr('href');
    var elt = $(el);

    $('html, body').animate({
        scrollTop:elt.offset()
    });

    e.preventDefault();
});