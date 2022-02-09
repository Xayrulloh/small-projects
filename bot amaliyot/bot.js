bot = new Bot(TOKEN)

bot.on('text', (msg) => {
	let chatId = msg.chat.id
	if(msg.text == 'qalesan') {
		bot.sendMessage(chatId, 'yaxshiman')
	}
	if(msg.text == 'nima qilayapsan') {
		bot.sendMessage(chatId, 'sen bilan gaplashyapman')
	}else{
		bot.sendMessage(chatId, 'yozigiz munca xunu')
	}
})

bot.on('voice', (msg) => {
	let chatId = msg.chat.id
	bot.sendMessage(chatId, 'bu bot kar, u eshitmaydi')
})

bot.on('photo', (msg) => {
	let chatId = msg.chat.id
	bot.sendMessage(chatId, 'wow zor rasmakan qatdan oldis')
})

bot.on('document', (msg) => {
	let chatId = msg.chat.id
	bot.sendMessage(chatId, 'buni nima qiliw kere endi')
})

bot.on('sticker', (msg) => {
	let chatId = msg.chat.id
	bot.sendMessage(chatId, msg.sticker['emoji'])
})

bot.on('location', (msg) => {
	let chatId = msg.chat.id
	bot.sendMessage(chatId, 'azgina kutin yoldaman')
})

bot.on('dice', (msg) => {
	let chatId = msg.chat.id
	bot.sendMessage(chatId, msg.dice['emoji'])
})

bot.start()
