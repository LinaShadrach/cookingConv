
var input = prompt('Enter in the amount you want to convert followed immediately by the unit measurement (g=gallons, l=liter)');
var inputLength = input.length;
var unit = input.charAt(inputLength-1);
var inputSliced = input.slice(0, inputLength-1);
var inputToInt = parseInt(inputSliced);
if (unit === "g"){
  var unit2 = "l";
  var gallonsToLiters = function(gallons){
    var liters = gallons * 3.78541;
    return liters.toFixed(2);
  };
  var result = gallonsToLiters(inputToInt);
};
if (unit === "l"){
  var unit2 = "g";
  var litersToGallons = function(liters){
    var gallons = liters / 3.78541;
    return gallons.toFixed(2);
  };
  var result = litersToGallons(inputToInt);
};
alert(result + unit2 + ".");
