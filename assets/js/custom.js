// Scroll Top
$('.top').click(function() {
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
$(window).scroll(function() {
  if ($(this).scrollTop() > $(window).height()) {
    $('.top').addClass("up");
  } else {
    $('.top').removeClass("up");
  }
});


// Download Box V4
$(document).ready(function() {$("#box-download .body-box_download p a").attr({rel:"nofollow",target:"_blank"})})
