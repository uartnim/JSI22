// let input = document.getElementById("input");
// let inputTop = document.getElementById("inputTop");
// let button = document.querySelector("button");
// let box = document.querySelector(".box");

// button.addEventListener("click", function () {
//   console.log(input.value);
//   console.log(inputTop.value);

//   box.style.Left = input.value + "px";
//   box.style.top = inputTop.value + "px";

// });

fetch("https://geocoding-api.open-meteo.com/v1/search?name=Hanoi")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.results[0].latitude);
        console.log(data.results[0].longitude);

    });


fetch("https://geocoding-api.open-meteo.com/v1/search?name=Hanoi")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results[0].latitude);
        console.log(data.results[0].longitude);

        let latitude = data.results[0].latitude;
        let longitude = data.results[0].longitude;

        fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (data_weather) {
                console.log(data_weather.current_weather.temperature);
            });
    });

