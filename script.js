$(document).ready(function () {
    var i=0;
    var wd;
    var bgcl = "#dddddd";
    $('.section .bgCol').each(function () {
        wd = $('.section').width() / 4 * i;
        $(this).css('left', wd+'px');
        i++;
    });
    $('.sectionTab a').click(function () {

        $('.sectionTab').removeClass('animateTab');
        $('.bgCol').css('background-color', bgcl);
        $(this).parent().addClass('animateTab');

        var selector = $(this).attr('href');
        selector = selector.substr(1, 1);

        $('.section').removeClass('animatePanel');
        $('#section' + selector).addClass('animatePanel');

        if (bgcl=='#dddddd') {
            bgcl = '#eeeeee';
        } else {
            bgcl = '#dddddd';
        }
        $('.SectionContainer').css('background-color', bgcl);
    });
    
});
function cutPx(x) {
    var lng = x.length;
    return parseInt(x.substr(0,lng-2));
}