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

  })
  $(".shirt_page").hide();

  $(".shirt").click(function(){
    $(".content").hide();
    $("h1").text("Shirt");
    $(".shirt_page").show();
  })




})
