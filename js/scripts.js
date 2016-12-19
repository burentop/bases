

$(document).ready(function() {
  $("form#base").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    var result = convertNumber(number);
    $("#result").show();
  });
});
