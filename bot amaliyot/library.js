class Bot {

	constructor(TOKEN) {
		this.TOKEN = TOKEN;
		this.URL = `https://api.telegram.org/bot${TOKEN}/`
		this.messageTypes = {}
	}

	start () {
		setInterval(async () => {
			let newMessage = await getUpdates()
			console.log(newMessage);
			if(newMessage) {
				if(newMessage.message.text) {
					return this.messageTypes['text'](newMessage.message)
				}

				if(newMessage.message.voice) {
					return this.messageTypes['voice'](newMessage.message)
				}

				if(newMessage.message.photo) {
					return this.messageTypes['photo'](newMessage.message)
				}

				if(newMessage.message.document) {
					return this.messageTypes['document'](newMessage.message)
				}

				if(newMessage.message.sticker) {
					return this.messageTypes['sticker'](newMessage.message)
				}

				if(newMessage.message.location) {
					return this.messageTypes['location'](newMessage.message)
				}

				if(newMessage.message.dice) {
					return this.messageTypes['dice'](newMessage.message)
				}
			}
		}, 500)
	}

	on(message, callback) {
		this.messageTypes[message] = callback
	}

	async sendMessage (chatId, text, params) {
		let response = await fetch(this.URL + 'sendMessage', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: chatId,
				text,
				...params
			})
		})
		return response
	}
}