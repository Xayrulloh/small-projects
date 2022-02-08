cityinput.onkeyup = element => {
    if (element.keyCode == 13) {
        fetch(`https://covid-19-data.p.rapidapi.com/country?name=${cityinput.value}`, {"method": "GET","headers": {	"x-rapidapi-host": "covid-19-data.p.rapidapi.com",	"x-rapidapi-key": "ab72eff8e4mshe1623af6fde16d7p1dc171jsnc3d6f0381dc4"}})
        .then(response => response.json())
        .then(data => {
            if (data.length) {
                [cityName.textContent, confirmed.textContent, recovered.textContent, critical.textContent, deaths.textContent] = [`The status of covid in ${data[0].country}`, `The confirmed: ${data[0].confirmed}`, `The recovered: ${data[0].recovered}`, `The critical: ${data[0].critical}`, `The deaths: ${data[0].deaths}`]
            } else {
                alert('Wrong country name'); [cityName.textContent, confirmed.textContent, recovered.textContent, critical.textContent, deaths.textContent, cityinput.value] = [null, null, null, null, null, null]
            }
        })
        .catch(err => {alert('Wrong country name'); [cityName.textContent, confirmed.textContent, recovered.textContent, critical.textContent, deaths.textContent, cityinput.value] = [null, null, null, null, null, null]});
    }
}