let lii = null

getUsers()
.then(() => {li = document.querySelectorAll('.customer-item')})
.then(() => {
    for (let l of li) {
        l.onclick = () => {lii = l; showFoods(l)}
    }
})

submitUsers.onclick = (even) => {
    even.preventDefault()
    if (usernameInput.value.length <= 30 && !usernameInput.value.includes(' ') && /^[A-Za-z\s]*$/.test(usernameInput.value) && telephoneInput.value.length == 12 && /^\d+$/.test(telephoneInput.value.slice(1)) && telephoneInput.value.slice(0, 3) == '998') {
        addUser(usernameInput.value, telephoneInput.value + '')
        usernameInput.value = null
        telephoneInput.value = null
        getUsers()
    } else {
        alert('invalid input')
        usernameInput.value = null
        telephoneInput.value = null
    }
}

async function showFoods(l) {
    show.textContent = 'client id:'
    userHeader.textContent = 'customer:  ' + l.children[0].textContent
    clientId.textContent =  l.children[0].getAttribute('id')
    let orders = await getOrders()
    ordersList.innerHTML = null
    for (let order of orders) {
        if (clientId.textContent == order.user['userId']) {
            ordersList.innerHTML += `<li class="order-item"><img src="${order.food.foodImg}"><div><span class="order-name">${order.food.foodName}</span><span class="order-count">${order.count}</span></div></li>`
        }
    }
}

submitFoods.onclick = (even) => {
    even.preventDefault()
    let [foodId, count] = [foodsSelect.value, foodsCount.value]
    if (count <= 10 && show.textContent) {
        let userId = clientId.textContent
        addOrder(+foodId, +userId, +count)
        foodsCount.value = null
    }
    else {
        alert('invalid input')
        console.log();
        foodsCount.value = null
        foodsSelect.value = 1
    }
}
// ---------------------------------------------------------------

async function getUsers () {
	let response = await fetch('https://look-graphql-backend.herokuapp.com/graphql/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `
                query {
                    users {
                    userId
                    username
                    contact
              }
            }`
		})
	})
    response = await response.json()
    let users = response.data.users

    for(let user of users) {
        list.innerHTML += `<li class="customer-item"><span id="${user['userId']}" class="customer-name">${user['username']}</span><a class="customer-phone" href="tel:+${user['contact']}">+${user['contact']}</a></li>`
    }

}

async function addUser (username, contact) {
	let response = await fetch('https://look-graphql-backend.herokuapp.com/graphql/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `
            mutation R ($u: String! $c: String!) {
                addUser (username: $u contact: $c) {
                status
              }
            }`,
            variables: {
                "u": username,
                "c": contact
            }
		})
	})
    response = await response.json()
}

async function getOrders () {
    let response = await fetch('https://look-graphql    -backend.herokuapp.com/graphql/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `
            query {
                orders {
                orderId
                food {
                  foodId
                  foodName
                  foodImg
                }
                user {
                  userId
                }
                count
              }
            }`
		})
	})
    response = await response.json()
    return response.data.orders
}

async function addOrder (foodId, userId, count) {
	let response = await fetch('https://look-graphql-backend.herokuapp.com/graphql/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `
            mutation R ($f: Int! $u: Int! $c: Int!) {
                addOrder (foodId: $f userId: $u count: $c) {
                status
                message
              }
            }`,
            variables: {
                "f": foodId,
                "u": userId,
                "c": count

            }
		})
	})
    response = await response.json()
    showFoods(lii)
}

