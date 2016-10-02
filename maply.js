$(function () {
    $("#addLocation").click(function () {
        var address = $("#address").val();
        $("#address").val("");

        var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyCm9yzZC060tdk-OB0BeGP3jD5THIGLoXo";
        $.ajax(googleUrl, { dataType: "json" }).done(function (data) {
            console.log(data);
            city = data.results[0].address_components[1].long_name
            state = data.results[0].address_components[3].short_name
            placeLatitude = data.results[0].geometry.location.lat
            placeLongitude = data.results[0].geometry.location.lng
     var div = $("<div></div>");
    div.append("<h4>" + city + " " + state + "</h4>")
    .append("</br >")
      $(".infoCard").html(div);
      $("#map").html(initMap); 
});
    });
});
function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: {lat: +placeLatitude, lng: +placeLongitude},
        });
        var marker = new google.maps.Marker({
          position: {lat: +placeLatitude, lng: +placeLongitude},
          map: map
        });
}

var placeLatitude = "";
var placeLongitude = "";
var city = "";
var state = "";