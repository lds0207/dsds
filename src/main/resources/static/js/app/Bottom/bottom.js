var main = {
    init : function () {
        main.makeMenuBar();
    },
    makeMenuBar : function () {
        $.ajax({
            type: 'GET',
            url: '/api/sys/menu/getMenuInfo',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function (data) {
            //로그인했으면 추가메뉴생성
        }).fail(function (error) {
        });
    }
}
main.init();

$(document)
    .ready(function() {

        $("#bottom").on("click", function () {
            window.location.href='bottom';

        });

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function() {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function() {
                    $('.fixed.menu').transition('fade out');
                }
            })
        ;

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
        ;

    })
;

