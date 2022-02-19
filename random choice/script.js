textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {
    const tagsEl = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tags.innerHTML = ''

    tagsEl.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tags.appendChild(tagEl)
    })
}

function randomSelect() {
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        randomTag.classList.add('highlight')

        setTimeout(() => {
            randomTag.classList.remove('highlight')
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            randomTag.classList.add('highlight')
        }, 100)

    }, 30 * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}



