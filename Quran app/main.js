// id: search, read, read, num, per, res, wrapper
let check = false
let li = ''

search.onkeyup = async(e) => {
    try {
        if (e.keyCode == 13)  {
            let data = await (await fetch('https://api.quran.sutanlab.id/surah/' + search.value)).json()
            if (data.code > 200) {search.value = null; throw(new TypeError('Deeng'))}
            check = true
            nameOfSura.textContent = 'Sura: ' + data.data.name.transliteration.en
            num.textContent = data.data.numberOfVerses + ' ayat'
            res.innerHTML = null
            for (let s of data.data.verses) {
                let li = document.createElement('li')
                let audio = document.createElement("audio")
                let source = document.createElement("source")

                li.textContent = s.text.arab
                li.classList.add('li')
                li.id = s.audio.primary

                audio.controls = false
                source.src = s.audio.primary
                audio.append(source)
                res.append(li)
                li.onclick = () => {
                    wrapper.innerHTML = null
                    wrapper.append(audio)
                    audio.play()
                }
            }
            li = document.querySelectorAll('.li')
            search.value = null
            count = 0
        }
    } catch (er) {
        alert(er.message)
    }
}

read.onclick = () => {
    if (check) {
        async function reader (n) {
            if(n >= li.length) return
            let audio = document.createElement("audio")
            let source = document.createElement("source")
            audio.controls = false
            source.src = li[n].getAttribute('id')
            li[n].classList.add('active')
            li[n].style.color = 'green'
            console.log(li[n]);
            audio.append(source)
            wrapper.innerHTML = null
            wrapper.append(audio)
            audio.play()

            audio.onended = () => {
                li[n].style.color = 'black'
                return reader(++n)
            }
        }
        reader(0)
    } else alert('you don\'t choosen any sura')
}





