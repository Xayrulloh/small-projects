getUpdates()

async function sendMessage(userId, sms) {
    let res = await fetch(`https://api.telegram.org/bot5117359761:AAGWAz7tj698LFT8ahBE-RHkRGf9mKjGY0k/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: userId,
            text: sms
        })
    })
}

async function getUpdates() {
    let users = await(await fetch(`https://api.telegram.org/bot5117359761:AAGWAz7tj698LFT8ahBE-RHkRGf9mKjGY0k/getUpdates`)).json()
    users = users.result
    let ids = []
    for (let user of users) {
        if (!ids.includes(user.message.chat.id)) {
            ul.innerHTML += `<li onclick='userInfo(this)' id=${user.message.chat.id} name=${user.message.chat.first_name}>
            <div>
              <h2>${user.message.chat.first_name}</h2>
            </div>
          </li>`
          ids.push(user.message.chat.id)
        }
    }
}

async function userInfo(user) {
    chat.innerHTML = null
    let users = await(await fetch(`https://api.telegram.org/bot5117359761:AAGWAz7tj698LFT8ahBE-RHkRGf9mKjGY0k/getUpdates`)).json()
    users = users.result
    user.getAttribute('id')
    for (let useR of users) {
        if (useR.message.chat.id == user.getAttribute('id')) {
            chat.innerHTML += `<li class="you"><div class="message">${useR.message.text}</div></li>`
        }
    }
    userName.textContent = user.getAttribute('name')
    userName.setAttribute('class', user.getAttribute('id'))
}

function message() {
    if (!sms.value || !userName.textContent) return
    chat.innerHTML += `<li class="me"><div class="message">${sms.value}</div></li>`
    sendMessage(userName.getAttribute('class'), sms.value)
    sms.value = null
}

sendPhoto.onchange = () => {
    sendPhotos(userName.getAttribute('class'), sendPhoto.files[0])
}

async function sendPhotos(userId, photo) {
    let formData = new FormData()
    formData.append('chat_id', userId)
	formData.append('photo', photo)

	let response = await fetch(`https://api.telegram.org/bot5117359761:AAGWAz7tj698LFT8ahBE-RHkRGf9mKjGY0k/sendPhoto`, {
		method: 'POST',
		body: formData
	})
}
