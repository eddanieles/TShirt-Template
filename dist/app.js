$(document).ready(function () {
  var $albumPreview = $('.album-preview');
  var $imagePreview = $('.image-preview');
  var $h2 = $('h2');
  var $header = $('header');

// As soon as page loads, h2 and navigation buttons are hidden
  $h2.hide();
  $('button').hide();
  location.hash = '#home';

// Creates li's for album preview buttons
  data.forEach(function(album) {
    var $albumCover = $(`<li>
                          <a href="${album.path}">
                            <p>${album.title}</p>
                            <img src="${album.cover}" />
                          </a>
                         </li>`);
    $albumPreview.append($albumCover);
  });

  function routePiece (n){
    return location.hash.split("/")[n];
  }

  function previewAlbum (index){
    var album = data[Number(index)-1];
    $('button').hide();
    $('.wrapper').removeClass('full-width');
    $albumPreview.show();
    renderAlbum(album);
    console.log('previewAlbum', album);
  }
// Hashchange conditionals
  $(window).on('hashchange', function () {
    var index = routePiece(1);
    if (routePiece(2) !== 'image' && location.hash !== '#home'){
      previewAlbum(index);
      $('.image-preview li').on('click', zoom);
    } else if (routePiece(2) === 'image'){

    } else {
      console.log('route was ', location.hash)
    }
  });

// Once you click on an album
function renderAlbum (album) {
  $imagePreview.html('');
  $h2.text(album.title).show();
  $header.hide();
  $albumPreview.children('li').addClass('album-collapse');
  $albumPreview.find('li > a > img').hide();
  $albumPreview.addClass('navigation-collapse');

  album.images.forEach(function (image) {
    var $imageHtml = $(`<li>
                          <a href="${image.path}">
                            <img src="${image.src}" />
                          </a>
                         </li>`);
    $imagePreview.append($imageHtml);
  });
}

// viewing zoomed in image
    function zoom() {
      console.log('zoom on', $(this));
      $(this).closest('.wrapper li').addClass('zoomed-in').removeClass('image').show();
      $('.image').hide();
      $('.wrapper').addClass('full-width');
      $('button').show();
      $albumPreview.hide();
      $header.show();
      $h2.html('<a href="#">Back to the album</a>');
      $h2.children('a').attr('href', `${routePiece(0)}/${routePiece(1)}`);
    }

    function changeImage(n){
      var $albumIndex = Number(routePiece(1)) - 1;
      var $imgIndex = Number(routePiece(3)) - 1;
      var $imgArr = data[$albumIndex].images;
      $('.zoomed-in').find('a > img').attr('src', $imgArr[$imgIndex + n].src);
      location.hash = $imgArr[$imgIndex + n].path;
    }

    $('button#next').click(function () {
      changeImage(1);
    });

    $('button#previous').click(function (evt) {
      changeImage(-1);
    });
});
