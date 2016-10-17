
var g = 10;
var l = 10;
var gallonsToLiters = function(gallons){
  var liters = gallons * 3.78541;
  return liters;
}
alert(gallonsToLiters(g));
var litersToGallons = function(liters){
  var gallons = liters / 3.78541;
  return gallons;
}
alert(litersToGallons(l));
