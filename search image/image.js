pictureInput.onkeyup = (element) => {
    if (element.keyCode == 13) {
        fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${pictureInput.value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
                "x-rapidapi-key": "ab72eff8e4mshe1623af6fde16d7p1dc171jsnc3d6f0381dc4"
            }
        })
        .then(res => res.json())
        .then(data => {
            picturesPlace.innerHTML = null
            pictureInput.value = null
            for (let a of data.value) {
                console.log(a);
                picturesPlace.innerHTML += `<img src=${a.contentUrl} width="600" height="400">`
            }
        })

        .catch(error => {alert('Wrong picture name'); pictureInput.value = null})
    }
}
// pictureInput.onkeyup = (element) => {
//     if (element.keyCode == 13) {
//         picturesPlace.innerHTML = null
//         fetch(`https://pixabay.com/api/?key=25570361-2831118e9efb3556d0258fa4f&q=${pictureInput.value.replace(' ', '+')}&image_type=photo`)
//         .then(res => res.json())
//         .then(data => {
//             pictureInput.value = null
//             for (let a of data.hits) {
//                 picturesPlace.innerHTML += `<img src=${a.largeImageURL} width="600" height="400">`
//             }
//         })
//         .catch(error => {alert('Wrong picture name'); pictureInput.value = null})
//     }
// }







