$(function(){
    $(".large_photos img:eq(0)").nextAll().hide();
    $(".thumbnails img").click(function(e) {
        var index = $(this).index();
        $(".large_photos img").eq(index).fadeIn().siblings().hide();
    });
    $(".thumbnails img").click(function(e) {
        var index = $(this).index();
        $(".thumbnails img").eq(index).css('opacity', 1).siblings().css('opacity', 0.5);
    });
});