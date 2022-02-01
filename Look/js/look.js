let customer = window.localStorage.getItem('customers')
customer = customer ? JSON.parse(customer) : []
let lii = null

for(let csr of customer) {
    list.innerHTML += `<li class="customer-item"><span id="${csr['clientID']}" class="customer-name">${csr['name']}</span><a class="customer-phone" href="tel:+${csr['phone']}">+${csr['phone']}</a></li>`
}

let li = document.querySelectorAll('.customer-item')

submitUsers.onclick = (even) => {
    even.preventDefault()
    if (usernameInput.value.length <= 30 && !usernameInput.value.includes(' ') && /^[A-Za-z\s]*$/.test(usernameInput.value) && telephoneInput.value.length == 12 && /^\d+$/.test(telephoneInput.value.slice(1)) && telephoneInput.value.slice(0, 3) == '998') {
        let Id = Date.now().toString().slice(-4)
        let newCustomer = {name: usernameInput.value, phone: telephoneInput.value, clientID: Id}
        customer.push(newCustomer)
        window.localStorage.setItem('customers', JSON.stringify(customer))
        list.innerHTML += `<li class="customer-item"><span id="${Id}" class="customer-name">${usernameInput.value}</span><a class="customer-phone" href="tel:+${telephoneInput.value}">+${telephoneInput.value}</a></li>`
        usernameInput.value = null
        telephoneInput.value = null
        window.location.href = './index.html'
    } else {
        alert('invalid input')
        usernameInput.value = null
        telephoneInput.value = null
    }
}

function showFoods(l) {
    show.textContent = 'client id:'
    userHeader.textContent = 'customer:  ' + l.children[0].textContent
    clientId.textContent =  l.children[0].getAttribute('id')
    lii = l
    let order = window.localStorage.getItem('orders')
    order = order ? JSON.parse(order) : []

    if (order.length) {
        ordersList.innerHTML = null
        for (let ordeR of order) {
            if (l.children[0].getAttribute('id') == ordeR['id']) {
                for (let foods in ordeR) {
                    if (foods != 'id') {
                        ordersList.innerHTML += `<li class="order-item"><img src="./img/${foods}.jpeg"><div><span class="order-name">${foods}</span><span class="order-count">${ordeR[foods]}</span></div></li>`
                    }
                }
            }
        }
    }
}

for (let l of li) {
    l.onclick = () => {showFoods(l)}
}

submitFoods.onclick = (even) => {
    even.preventDefault()
    let [food, count] = [foodsSelect.value, foodsCount.value]
    if (count <= 10 && show.textContent) {
        let id = lii.children[0].getAttribute('id')
        let order = window.localStorage.getItem('orders')
        order = order ? JSON.parse(order) : []
        let strFormat = JSON.stringify(order)
        
        if (!strFormat.includes(id)) {
            let newOrder = {id: id, [food]: count}
            order.push(newOrder)
            window.localStorage.setItem('orders', JSON.stringify(order))
            showFoods(lii)
        } else {
            for (let ordeR of order) {
                if (id === ordeR['id']) {
                    if (!(Object.keys(ordeR).toString().includes(food))) {
                        ordeR[food] = count
                        window.localStorage.setItem('orders', JSON.stringify(order))
                        showFoods(lii)
                        break
                    } else {
                        if (+ordeR[food] + +count <= 10) {
                            ordeR[food] = String(+ordeR[food] + +count)
                            window.localStorage.setItem('orders', JSON.stringify(order)) 
                            showFoods(lii)
                            break 
                        } else {
                            alert('your order more than 10')
                        }
                    }
                }
            }
        }
        foodsCount.value = null
        foodsSelect.value = 'Cola'
        
    }
    else {
        alert('invalid input')
        foodsCount.value = null
        foodsSelect.value = 'Cola'
    }
}





