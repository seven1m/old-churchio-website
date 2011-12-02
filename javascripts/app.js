function showInstallBlock(platform) {
  platform = typeof(platform) == 'string' ? platform.replace('#', '') : platform.target.id.substring(5);
  if(platform == 'windows' || platform == 'mac' || platform == 'linux') {
    $('.windows, .mac, .linux').hide();
    $('.' + platform).show();
    $('.tabs li').removeClass('active');
    $('#show-' + platform).parent().addClass('active');
    location.hash = platform;
  }
  return false;
}

SLIDESHOW_DELAY = 10000;
SLIDE_HEIGHT = 332;

var visibleSlide = 0;
var slideshowTimeout;
function advanceSlide() {
  var slides = $('#slides .slide');
  visibleSlide++
  showSlide();
  slideshowTimeout = setTimeout('advanceSlide()', SLIDESHOW_DELAY);
}

function showSlide() {
  if(visibleSlide >= $('#slides .slide').length) visibleSlide = 0;
  $('#slides .tray').css('top', '-' + (SLIDE_HEIGHT * visibleSlide) + 'px');
  $('#slides .controls li').removeClass('selected').eq(visibleSlide).addClass('selected');
}

$(function() {
  slideshowTimeout = setTimeout('advanceSlide()', SLIDESHOW_DELAY);
  $('#slides .controls li').click(function(e) {
    clearTimeout(slideshowTimeout);
    visibleSlide = $('#slides .controls li').index(e.target);
    showSlide();
  });
});
