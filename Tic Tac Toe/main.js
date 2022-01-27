const status = document.querySelector('.game--status')
const res = document.querySelector('.game--restart')
let cell = document.querySelectorAll('.cell')
let shablon = ['', '', '', '', '', '', '', '', '',]

function won() {
    status.innerHTML = 'Yutdim mayli siqilmen kengi safar oxwidi hudo holasa randomku'
    setTimeout(() => {
        document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
        shablon = ['', '', '', '', '', '', '', '', '',]
        status.innerHTML = ''
    }, 5000);
}

function Iwon() {
    status.innerHTML = 'Qoyil yutdingiz'
    setTimeout(() => {
        document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
        shablon = ['', '', '', '', '', '', '', '', '',]
        status.innerHTML = ''
    }, 5000);
}

function draw() {
    status.innerHTML = 'Durrang boldi vahaha'
    setTimeout(() => {
        document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
        shablon = ['', '', '', '', '', '', '', '', '',]
        status.innerHTML = ''
    }, 5000);
}

function check() {
        if (shablon[0] === '1' && shablon[1] === '1' && shablon[2] === '1' || shablon[3] === '1' && shablon[4] === '1' && shablon[5] === '1' || shablon[6] === '1' && shablon[7] === '1' && shablon[8] === '1' || shablon[0] === '1' && shablon[3] === '1' && shablon[6] === '1' || shablon[1] === '1' && shablon[4] === '1' && shablon[7]  === '1' || shablon[2] === '1' && shablon[5] === '1' && shablon[8]  === '1' || shablon[0] === '1' && shablon[4] === '1' && shablon[8]  === '1' || shablon[2] === '1' && shablon[4] === '1' && shablon[6]  === '1') {
            Iwon()
        }
        if (shablon[0] === '0' && shablon[1] === '0' && shablon[2] === '0' || shablon[3] === '0' && shablon[4] === '0' && shablon[5] === '0' || shablon[6] === '0' && shablon[7] === '0' && shablon[8] === '0' || shablon[0] === '0' && shablon[3] === '0' && shablon[6] === '0' || shablon[1] === '0' && shablon[4] === '0' && shablon[7]  === '0' || shablon[2] === '0' && shablon[5] === '0' && shablon[8]  === '0' || shablon[0] === '0' && shablon[4] === '0' && shablon[8]  === '0' || shablon[2] === '0' && shablon[4] === '0' && shablon[6]  === '0') {
            won()
        }
}

for (let cel of cell) {
    cel.onclick = () => {
        let count = 0
        let index = cel.getAttribute("data-cell-index")
        if (!shablon[index]) {
            let random = Math.round(Math.random() * 8)
            for (let a of shablon) {
                if (a) count++
            }
            if (count > 6) {
                shablon[index] = '1'
                cel.textContent = 'X'
                check()
                return
            }
            while (random == index || random <= 0 || shablon[random]) {
                random = Math.round(Math.random() * 8)
            }
            shablon[index] = '1'
            cel.textContent = 'X'
            cell[random].textContent = '0'
            shablon[random] = '0'
            check()
        }
        else alert('OYNASEN NORMALNI OYNA')
    }
}

res.onclick = () => {
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    shablon = ['', '', '', '', '', '', '', '', '']
    status.innerHTML = ''
}
















