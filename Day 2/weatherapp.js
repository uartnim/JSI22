
let input_search_address = document.getElementById("search_weather");
let search_button = document.querySelector("button");
let temperature = document.getElementById("temperature");
let placeTime = document.getElementById("dateTime");
let imgTemp = document.querySelector(".image_temperature");
let img = document.createElement("img");
img.scr = "";
imgTemp.appendChild(img);


search_button.addEventListener("click", function () {
    fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${input_search_address.value}`
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // console.log(data.results[0].latitude);
            // console.log(data.results[0].longitude);

            let latitude = data.results[0].latitude;
            let longitude = data.results[0].longitude;

            fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
            )
                .then(function (response) {
                    return response.json();
                })
                .then(function (data_weather) {
                    // console.log(data_weather)
                    console.log(data_weather.current_weather.weathercode);
                    let weather_code = data_weather.current_weather.weathercode;
                    console.log(weather_code);
                    // if (weather_code >= 0 && weather_code <= 3) {
                    //     img.scr = "./cloud_sun_sunny_weather_icon.png";

                    // } else if (weather_code >= 45 && weather_code <= 77) {
                    //     img.scr = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-512.png";

                    // } else if (weather_code >= 77 && weather_code <= 99) {
                    //     img.scr = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather09-512.png";

                    // }

                    if (weather_code >= 0 && weather_code <= 3) {
                        document.body.style.backgroundImage = "url('./sunny.gif')";
                        document.body.style.backgroundRepeat = "no-repeat";


                    } else if (weather_code >= 45 && weather_code <= 77) {
                        document.body.style.backgroundImage = "url('./raining.gif')";
                        document.body.style.backgroundRepeat = "no-repeat";


                    } else if (weather_code >= 77 && weather_code <= 99) {
                        document.body.style.backgroundImage = "url('./thunder.gif')";
                        document.body.style.backgroundRepeat = "no-repeat";
                        document.body.style.color ="white";


                    }
                    temperature.innerText = data_weather.current_weather.temperature;
                    console.log(data_weather.current_weather.temperature);

                    let d = new Date();
                    let localTime = d.getTime();
                    let localOffset = d.getTimezoneOffset() * 60000;
                    let utc = localTime + localOffset;
                    let place = utc + (1000 * -14400);
                    let nd = new Date(place);


                    function getMode(response) {
                        let today = response.data_weather.dt;
                        let timezone = response.data_weather.timezone;
                        let difference = today + timezone - 3600;
                        let hours = timeConverter2(difference);
                        let mode = document.getElementById("app");
                    

                        if (hours > 17 || hours < 6) {
                            mode.classList.add("darkmode").remove("lightmode");
                          }
                          else {
                            mode.classList.add("lightmode").remove("darkmode");
                          }

                          if (hours >= 6 && hours <= 17) {
                            mode.classList.add("lightmode").remove("darkmode");
                          }
                          else {
                            mode.classList.add("darkmode").remove("lightmode");
                          }
                      }
                });
        });
});