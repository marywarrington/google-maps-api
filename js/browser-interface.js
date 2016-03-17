var apiKey = require('./../.env').apiKey;
var maps = require('./../js/maps.js').initAutocomplete;

$(document).ready(function() {
  $.getScript("https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&libraries=places").then(function() {
    maps();
    console.log("hey there");
  });
});
