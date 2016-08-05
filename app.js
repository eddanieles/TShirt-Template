$(document).ready(function(){



  data.forEach(function(shirt) {
    var shirt = $(`<div class="shirt" id=${shirt.id}>
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
    console.log($(this));
    // var shirt_id = $(this).attr("id");
    // console.log(shirt_id);
    // $(".shirt_page").show();
  })

  function shirt_display (shirt) {
    var shirt = $(`<h2>${shirt.name}</h2>

    <div class="shirt_content">

    <section>
      <img src=${shirt.scr} alt="${shirt.name}" />
    </section>

    <section>
      <ul>
        <li>${shirt.description}</li>
        <li>Price: $${shirt.price}</li>
        <li class="sizes">
          Size
          <ul>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
        </li>
        <li>Rating: ${shirt.rating}</li>
        <li><button type="button" name="button">Add to Cart</button></li>
      </ul>
    </section>`);
    $(".shirt_page").append(shirt);

  }



})
