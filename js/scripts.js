var convertNumber = function(number, base) {
  var output = -1;
  for (var index = 0; index < number.length; index += 1) {
    var digit = parseInt(number[index]);
    for (var counter = 0; counter <= digit || counter <= base; counter += 1) {
      output += 1;
    }
  }
  return output;
}

$(document).ready(function() {
  $("form#base").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    var base = parseInt($("#base").val());
    var result = convertNumber(number, base);
    $("#output-original").text(number);
    $("#output-decimal").text(result);
    $("#result").show();
  });
});
