$(document).ready(function(){

    function modal(){
        $('.overlay').animate(
            {
                opacity: 'toggle',
            }, 600
        );
        $('.modal').animate(
            {
                height: "toggle",
                opacity: "toggle"
            }, 600);
    }

    $('.main_btn').on('click', modal);
    $('.main_btna').on('click', modal);
    $('nav li:eq(1)').on('click', modal);
    $('.close').on('click', modal);
});