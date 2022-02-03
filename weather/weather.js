cityinput.onkeyup = (element) => {
    if (element.keyCode == 13) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ cityinput.value +'&appid=8cd377b72bef7c7412b5eb5a005ebbe9')
            .then(res => res.json())
            .then(data => {
                [cityName.innerHTML, temp.innerHTML, description.innerHTML, wind.innerHTML, cityinput.value] = [`Weather of <span>${data['name']}<span>`, `Temperature: <span>${ (data['main']['temp'] - 273).toFixed(2)} C</span>`, `Sky Conditions: <span>${data['weather']['0']['description']}<span>`, `Wind Speed: <span>${data['wind']['speed']} km/h<span>`, null]
            })
            .catch(error => {alert('Wrong city name'); [cityName.innerHTML, temp.innerHTML, description.innerHTML, wind.innerHTML, cityinput.value] = [null, null, null, null, null]})
    }
}




