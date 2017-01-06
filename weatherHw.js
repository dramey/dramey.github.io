//This function will pull current weather conditions from the API and return any Zip or City&State input// 
$(function () {
    $("#addLocation").click(function () {
        var address = $("#address").val();
        $("#address").val("");

        var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyCm9yzZC060tdk-OB0BeGP3jD5THIGLoXo";
        $.ajax(googleUrl, { dataType: "json" }).done(function (data) {
            console.log(data);
            var city = data.results[0].address_components[1].long_name
            var state = data.results[0].address_components[3].short_name
            var placeLatitude = data.results[0].geometry.location.lat
            var placeLongitude = data.results[0].geometry.location.lng


            var darksky = "https://api.darksky.net/forecast/2bc4604d535fc92dcddf937854e83437/" + placeLatitude + "," + placeLongitude;
            $.ajax(darksky, { dataType: "jsonp" }).done(function (data) {
                console.log(data);
                var div = $("<div></div>");
                div.append("<h4>" + city + " " + state + "</h4>")
                    .append("</br >")
                    .append("<h4>Current Temperature:" + " " + Math.round(data.currently.temperature) + "&deg;" + "</h4>")
                    .append("</br >")
                    .append("<h4>" + data.currently.summary + "</h4>")
                    .append("</br >")
                    .append("<h4>Rain Possibility:" + " " + data.currently.precipProbability + "%" + "</h4>")
                    .append("</br >")
                    .append("<h5>Min. Temp:" + " " + Math.round(data.daily.data[0].temperatureMin) + "&deg;" + "/" + "Max. Temp:" + " " + Math.round(data.daily.data[0].temperatureMax) + "&deg;" + "</h5>")
                // The appended above will append to the yourLocation div per below//

                $("#yourLocation").html(div);
                //for the back of the card--these will append to the back of the card to the yourLocationWeekly div listing weekly info//
                var div = $("<div></div>");
                div.append("</br >")
                    .append("</br >")
                    .append("<h4>" + "<u>Next Five Days for</u>" + " " + city + " " + state + "</h4>")
                    .append("<h5>" + "<u>DAY ONE: </u>" + "Min. Temp: " + Math.round(data.daily.data[1].temperatureMin) + "&deg;" + " " + data.daily.data[1].summary + " " + "Max. Temp: " + Math.round(data.daily.data[1].temperatureMax) + "&deg;" + "</h5>")
                    .append("<h5>" + "<u>DAY TWO: </u>" + "Min. Temp: " + Math.round(data.daily.data[2].temperatureMin) + "&deg;" + " " + data.daily.data[2].summary + " " + "Max. Temp: " + Math.round(data.daily.data[2].temperatureMax) + "&deg;" + "</h5>")
                    .append("<h5>" + "<u>DAY THREE: </u>" + "Min. Temp: " + Math.round(data.daily.data[3].temperatureMin) + "&deg;" + " " + data.daily.data[3].summary + " " + "Max. Temp: " + Math.round(data.daily.data[3].temperatureMax) + "&deg;" + "</h5>")
                    .append("<h5>" + "<u>DAY FOUR: </u>" + "Min. Temp: " + Math.round(data.daily.data[4].temperatureMin) + "&deg;" + " " + data.daily.data[4].summary + " " + "Max. Temp: " + Math.round(data.daily.data[4].temperatureMax) + "&deg;" + "</h5>")
                    .append("<h5>" + "<u>DAY FIVE: </u>" + "Min. Temp: " + Math.round(data.daily.data[5].temperatureMin) + "&deg;" + " " + data.daily.data[5].summary + " " + "Max. Temp: " + Math.round(data.daily.data[5].temperatureMax) + "&deg;" + "</h5>")

                $("#yourLocationWeekly").html(div);

            });

        });

    });

});


// These functions are to hard pull specifically for "MY FAVORITE WEATHER"
$(function () {
    var darkSkyKey = "https://api.darksky.net/forecast/2bc4604d535fc92dcddf937854e83437/37.8332442,-82.8101975";
    $.ajax(darkSkyKey, { dataType: "jsonp" }).done(function (data) {
        $("#tempPaintsville").append("<h4>Current Temperature:" + " " + Math.round(data.currently.temperature) + "&deg;" + "</h4>")
        $("#tempPvilleSum").append("<h4>" + data.currently.summary + "</h4>")
        $("#rainPvillePoss").append("<h4>Rain Possibility:" + " " + data.currently.precipProbability + "%" + "</h4>")
        $("#minTempPville").append("<h5>Min. Temp:" + " " + Math.round(data.daily.data[0].temperatureMin) + "&deg;" + "</h5>")
        $("#maxTempPville").append("<h5>Max. Temp:" + " " + Math.round(data.daily.data[0].temperatureMax) + "&deg;" + "</h5>")

    });


    var darkSkyKey = "https://api.darksky.net/forecast/2bc4604d535fc92dcddf937854e83437/35.7974425,-83.5603112";
    $.ajax(darkSkyKey, { dataType: "jsonp" }).done(function (data) {
        $("#tempPig").append("<h4>Current Temperature:" + " " + Math.round(data.currently.temperature) + "&deg;" + "</h4>")
        $("#tempPigSum").append("<h4>" + data.currently.summary + "</h4>")
        $("#rainPigPoss").append("<h4>Rain Possibility:" + " " + data.currently.precipProbability + "%" + "</h4>")
        $("#minTempPig").append("<h5>Min. Temp:" + " " + Math.round(data.daily.data[0].temperatureMin) + "&deg;" + "</h5>")
        $("#maxTempPig").append("<h5>Max. Temp:" + " " + Math.round(data.daily.data[0].temperatureMax) + "&deg;" + "</h5>")

    });


    var darkSkyKey = "https://api.darksky.net/forecast/2bc4604d535fc92dcddf937854e83437/38.4296528,-82.31894609999999";
    $.ajax(darkSkyKey, { dataType: "jsonp" }).done(function (data) {
        $("#tempHunt").append("<h4>Current Temperature:" + " " + Math.round(data.currently.temperature) + "&deg;" + "</h4>")
        $("#tempHuntSum").append("<h4>" + data.currently.summary + "</h4>")
        $("#rainHuntPoss").append("<h4>Rain Possibility:" + " " + data.currently.precipProbability + "%" + "</h4>")
        $("#minTempHunt").append("<h5>Min. Temp:" + " " + Math.round(data.daily.data[0].temperatureMin) + "&deg;" + " " + "</h5>")
        $("#maxTempHunt").append("<h5>Max. Temp:" + " " + Math.round(data.daily.data[0].temperatureMax) + "&deg;" + "</h5>")
    });





});











