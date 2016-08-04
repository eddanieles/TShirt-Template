

$(document).ready(function(){

  data.forEach(function(shirt) {
    var shirt = $(`<div class="shirt">
      <img src=${shirt.scr} alt=${shirt.name} />
      <p>
        ${shirt.name}
        <span>$${shirt.price} <i class="fa fa-cart-plus" aria-hidden="true"></i></span>
      </p>
    </div>`);
    $(".content").append(shirt);
  });

})
