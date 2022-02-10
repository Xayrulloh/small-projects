const [dropList, fromCurrency, toCurrency, getButton, exchangeIcon] = [document.querySelectorAll('form select'), document.querySelector('.from select'), document.querySelector('.to select'), document.querySelector('form button'), document.querySelector('form .icon')]

for (let a = 0; a < dropList.length; a++) {  // bowlanganda default value beriw va qogan narsalaniyam oqitvolish
    for(let currency_code in country_list){
        let selected = a == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "UZS" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[a].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[a].addEventListener("change", e =>{
        loadFlag(e.target);
    });
}

function loadFlag(element){  // rasmlani joylaw
    for(let code in country_list){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", ()=>{  // load boliwi bilan 1 dollar neci som boliwini bilgan joyi
    getExchangeRate();
});

getButton.addEventListener("click", e =>{  // exchange button ni bosiwi bilan hisoblab beradi
    e.preventDefault();
    getExchangeRate();
});

exchangeIcon.addEventListener("click", () => {  // qaysidir dovlat ustiga bosilsa owani icon nini ozgartiradigan event
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
})

function getExchangeRate(){  // pulli aniqlab beradgan funciton
    const [amount, exchangeRateTxt] = [document.querySelector('form input'), document.querySelector('form .exchange-rate')]
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0") amount.value = "1";amountVal = 1;
    exchangeRateTxt.innerText = "Sabr !!!";
    let url = `https://v6.exchangerate-api.com/v6/cb2907d2a2d7ac0e9832d3fd/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    }).catch(() =>{
        exchangeRateTxt.innerText = "Something went wrong";
    });
}