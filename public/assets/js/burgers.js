$("#addburger").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newBurger = {
    burger_name: $("#addburger [name=burger]").val().trim()
  };

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


$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newDevour");
  
      var newDevourState = {
        devour: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("I ate the BURGER", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
 
});