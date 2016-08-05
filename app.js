$(document).ready(function(){

  data.forEach(function(shirt) {
    var shirt = $(`<a href="#">
      <div class="shirt" id=${shirt.id}>
      <img src=${shirt.scr} alt=${shirt.name} />
      <p>
        ${shirt.name}
        <span>$${shirt.price} <i class="fa fa-cart-plus" aria-hidden="true"></i></span>
      </p>
    </div>
    </a>`);
    $(".content").append(shirt);
  })

  $(".shirt").click(function(){
    $(".content").hide();
    $(".cart_page").hide();
    $("h1").text("Shirt");
    var shirt_id = $(this).attr("id");
    var shirt_index = data[shirt_id - 1];
    shirt_display(shirt_index);
  })

  function shirt_display(shirt) {
    var shirt = $(`<h2>${shirt.name}</h2>

    <div class="shirt_content">

    <section>
      <img src=${shirt.scr} alt="${shirt.name}" />
    </section>

    <section>
      <ul>
        <li>Description: ${shirt.description}</li>
        <li>Rating: ${shirt.rating}</li>
        <li>Price: $${shirt.price}</li>
        <li class="sizes">
          Choose Size:
          <ul class="sizes_submenu">
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
        <li class="selected_size"></li>
        <li><button type="button" name="button" class="AddtoCart">Add to Cart</button></li>
      </ul>
    </section>`);
    $(".shirt_page").append(shirt);

    $(".sizes_submenu li").click(function(event){
      var newText = $(this).text();
      $(".selected_size").text(newText);
    })

    $(".AddtoCart").click(function(){
      var AddtoCart_click = $(`<ul>
        <li>Does this work?</li>
      </ul>`);
      $(".cart_page").append(AddtoCart_click);
    })
  }

  $("#cart").click(function(){
    $(".content").hide();
    $(".shirt_page").hide();
    $(".cart_page").show();
    $("h1").text("Shopping Cart");
  })


})
