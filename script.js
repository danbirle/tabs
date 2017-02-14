$(document).ready(function () {
    $('.sectionTab a').click(function () {
        var selector = $(this).attr('href');
        selector = selector.substr(1, 1);
        console.log('section'+selector);
        $('.section').hide();
        $('#section' + selector).show();
    });
});