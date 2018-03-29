$("#addburger").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newBurger = {
    burger_name: $("#addburger [name=burger]").val().trim()
  };


  }
  // Send the POST request.
  $.ajax("/burger", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("added new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});



    
