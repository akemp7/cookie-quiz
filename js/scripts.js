$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();
    var foodArray = [];
    $("input:checkbox[name=foods]:checked").each(function() {
      var food = $(this).val();
      foodArray.push(food);
    });
    var colorArray = [];
    $("input:checkbox[name=color]:checked").each(function() {
      var color = $(this).val();
      colorArray.push(color);
    });
    var petArray = [];
    $("input:checkbox[name=pets]:checked").each(function() {
      var pet = $(this).val();
      petArray.push(pet);
    });
    console.log(foodArray);
    console.log(colorArray);
    console.log(petArray);

  });
  $("#clear").click(function(){
    $("#quiz").trigger("reset");
    $("#output").text("");
  });
});
