function showWeather () {
    let card = document.querySelector(".card");
    let searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", (e) => {
        card.style.display = "flex";
        let cityName = document.forms["myForm"]["cityName"].value; 
        let city = document.querySelector(".city");
        let temperature = document.querySelector(".temperature");
        let temp = document.querySelector(".temp");
        let weatherImage = document.querySelector(".weather-image");
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=5ba16b08035677907ddb144bcd859d1e`);
        xhr.onload = function () {
            let data = JSON.parse (this.responseText);
            let tempStatus = data.weather[0].main;
            if(tempStatus == "Clear" || tempStatus == "Sunny") {
                weatherImage.innerHTML = "<i class='fa-solid fa-sun fa-2x zoom' style='color:orange'></i>"
            }
            else if(tempStatus == "Rainy") {
                weatherImage.innerHTML = "<i class='fa-solid fa-cloud-rain fa-2x zoom' style='color:grey'></i>"
            }

            else if(tempStatus == "Clouds") {
                weatherImage.innerHTML = "<i class='fa-solid fa-cloud fa-2x zoom' style='color:white'></i>"
            }

            else if(tempStatus == "Smoke" || tempStatus == "Haze") {
                weatherImage.innerHTML = "<i class='fa-solid fa-smog fa-2x zoom' style='color:grey'></i>"
            }
            else {
                weatherImage.innerHTML = "<i class='fa-solid fa-sun fa-2x zoom' style='color:orange'></i>"
            }
            city.innerText = `${data.name}, ` + data.sys.country;
            temperature.innerHTML = `${data.main.temp}&deg;C`;
            temp.innerHTML = `Min Temp: ${data.main.temp_min}&deg;C | Max Temp: ${data.main.temp_max}&deg;C`
        }
        xhr.send();
        e.preventDefault();
    })
}

showWeather();