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
