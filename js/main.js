$(function () {
  $('#fileupload').fileupload({
    url: 'https://api.cosmicjs.com/v1/jquery-file-upload/media'
  }).on('fileuploaddone', function (e, data) {
    // Wait for UI to load
    setTimeout(function() {
        var media = data.result.media;
        $('.template-download .preview').html('<img src="' + media.imgix_url + '?w=300" />');
        $('.template-download .name').html(media.original_name);
        $('.template-download .size').html(Math.round(media.size / 1000) + 'KB');
    }, 300);
  });
});
