$(function () {
    $("#addLocation").click(function () {
        var address = $("#address").val();
        $("#address").val("");
        
    var map = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCm9yzZC060tdk-OB0BeGP3jD5THIGLoXo&callback=initMap";
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    });
});

