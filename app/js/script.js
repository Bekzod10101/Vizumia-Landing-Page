$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$('.play_btn').click(function(event) {
	$('.modal').fadeIn(200);
});
$('.modal .overlay, .modal .close').click(function(event) {
	$('.modal').fadeOut(200);
    var video = $("#player").attr("src");
	$("#player").attr("src","");
	$("#player").attr("src",video);
});

$('.menu_icon').click(function(event) {
	$('.responsive_menu').fadeIn(200);
});
$('.responsive_menu .overlay, .responsive_menu .close').click(function(event) {
	$('.responsive_menu').fadeOut(200);
});
$(".scroll_down_btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#features").offset().top},
        'slow');
});
