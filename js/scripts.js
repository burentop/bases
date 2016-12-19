var convertNumber = function(number) {
  return number;
}

$(document).ready(function() {
  $("form#base").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    var result = convertNumber(number);
    $("#output-original").text(number);
    $("#output-decimal").text(result);
    $("#result").show();
  });
});
