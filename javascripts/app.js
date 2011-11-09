function showInstallBlock(platform) {
  platform = typeof(platform) == 'string' ? platform.replace('#', '') : platform.target.id.substring(5);
  $('.windows, .mac, .linux').hide();
  $('.' + platform).show();
  $('.tabs li').removeClass('active');
  $('#show-' + platform).parent().addClass('active');
  location.hash = platform;
  return false;
}
