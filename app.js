$(document).ready(function(){

  data.forEach(function(shirt) {
    var shirt = $(`<a href="#Shirt${shirt.id}">
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

  $(".shirt_page").hide();
  $(".cart_page").hide();

  var $total_price = 0;

  $(".shirt").click(function(){
    $(".content").hide();
    $(".cart_page").hide();
    $(".shirt_page").show();
    $("h1").text("Shirt");
    var shirt_id = $(this).attr("id");
    var shirt_index = data[shirt_id - 1];
    shirt_display(shirt_index);
    var shirt_price = shirt_index.price;

    $(".AddtoCart").click(function(){
      $total_price = $total_price + shirt_price;
      $("#total_price").text($total_price);
      cart_display(current_shirt);
    })
  })



  function cart_display(shirt) {

    var AddtoCart_click = $(`
      <li><img src=${shirt.scr} alt="${shirt.name}" /> ${shirt.name} ${shirt.size} <span class="price">$${shirt.price}</span></li>
    `);
    //console.log("Does this work?");
    $(".cart_list").append(AddtoCart_click);
  }

  var current_shirt = {};

  function shirt_display(shirt) {
    current_shirt = $.extend({}, shirt);

    $(".ind_shirt").hide();
    var indy_shirt = $(`<div class="ind_shirt">
      <h2>${shirt.name}</h2>

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
    </section>
    </div>`);
    $(".shirt_page").html(indy_shirt);

    $(".sizes_submenu li").click(function(event){
      var newText = $(this).text();
      $(".selected_size").text(newText);
      current_shirt["size"] = newText;
    })

  }

  $("#cart").click(function(){
    $(".content").hide();
    $(".shirt_page").hide();
    $(".cart_page").show();
    $("h1").text("Shopping Cart");
  })

  $("#home").click(function(){
    $(".shirt_page").hide();
    $(".cart_page").hide();
    $(".content").show();
    $("h1").text("Shirt Store");
  })


})
