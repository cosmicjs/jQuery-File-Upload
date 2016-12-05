$(function () {
  $('#fileupload').fileupload({
    url: 'https://api.cosmicjs.com/v1/jquery-file-upload/media'
  }).on('fileuploaddone', function (e, data) {
    // Insert after table
    $('.table.table-striped').after('<img src="' + data.result.media.imgix_url + '?w=300" />');
  });
});
