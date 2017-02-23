$(document).ready(function () {
    var i=0;
    var wd;
    var bgcl = "#dddddd";
    $('.container_tabs .section .bgCol').each(function () {
        wd = $('.container_tabs .section').width() / 4 * i;
        nwd = -wd+20;
        $(this).css('left', wd+'px');
        $(this).siblings('.contentPlace').css('left', wd+'px');
        $(this).siblings('.contentPlace').find('.content').css('margin-left', nwd+'px');
        i++;
    });
    $('.container_tabs .sectionTab a').click(function () {
        var $this=$(this);
        changeTabs($this);
    });

    $('.buttonForTabs').click(function () {
        var $crt = $('.container_tabs .sectionTab.animateTab a');
        var $crthref = $crt.attr('href').substr(1,1);
        var $nxt = Number($crthref) + 1;
        if ($nxt > 4) { $nxt=4; }
        $nxt = '#' + $nxt;
        changeTabs($(".container_tabs .sectionTab a[href='"+$nxt+"']"));
    });


    function changeTabs(tabItem) {
        $('.container_tabs .sectionTab').removeClass('animateTab');
        $('.container_tabs .bgCol').css('background-color', bgcl);

        
        tabItem.parent().addClass('animateTab');
        var selector = tabItem.attr('href');
        selector = selector.substr(1, 1);

        $('.container_tabs .content').width($('.SectionContainer').width()-40);
        $('.container_tabs .content').height($('.SectionContainer').height());

        $('.container_tabs .section').removeClass('animatePanel');
        $('.container_tabs #section' + selector).addClass('animatePanel');

        if (bgcl=='#dddddd') {
            bgcl = '#eeeeee';
        } else {
            bgcl = '#dddddd';
        }

        $('.container_tabs .SectionContainer').css('background-color', bgcl);
    }
});
function cutPx(x) {
    var lng = x.length;
    return parseInt(x.substr(0,lng-2));
}
