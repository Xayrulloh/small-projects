const status = document.querySelector('.game--status')
const res = document.querySelector('.game--restart')
let cell = document.querySelectorAll('.cell')
let shablon = ['', '', '', '', '', '', '', '', '',]
let isFinished = false

function check() {
    let count = 0
    if (!isFinished) {
        if (shablon[0] === '1' && shablon[1] === '1' && shablon[2] === '1' || shablon[3] === '1' && shablon[4] === '1' && shablon[5] === '1' || shablon[6] === '1' && shablon[7] === '1' && shablon[8] === '1' || shablon[0] === '1' && shablon[3] === '1' && shablon[6] === '1' || shablon[1] === '1' && shablon[4] === '1' && shablon[7]  === '1' || shablon[2] === '1' && shablon[5] === '1' && shablon[8]  === '1' || shablon[0] === '1' && shablon[4] === '1' && shablon[8]  === '1' || shablon[2] === '1' && shablon[4] === '1' && shablon[6]  === '1') {
            Iwon()
            return
        }
        if (shablon[0] === '0' && shablon[1] === '0' && shablon[2] === '0' || shablon[3] === '0' && shablon[4] === '0' && shablon[5] === '0' || shablon[6] === '0' && shablon[7] === '0' && shablon[8] === '0' || shablon[0] === '0' && shablon[3] === '0' && shablon[6] === '0' || shablon[1] === '0' && shablon[4] === '0' && shablon[7]  === '0' || shablon[2] === '0' && shablon[5] === '0' && shablon[8]  === '0' || shablon[0] === '0' && shablon[4] === '0' && shablon[8]  === '0' || shablon[2] === '0' && shablon[4] === '0' && shablon[6]  === '0') {
            won()
            return
        }
        for (let a of shablon) {
            if (a) count++
        }
        if (count == 9) {
            draw()
        }
    }
}

for (let cel of cell) {
    cel.onclick = () => {
        let index = cel.getAttribute("data-cell-index")
        if (!shablon[index]) {
            isFinished = false
            shablon[index] = '1'
            cel.textContent = 'X'
            check()
            optimus()
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

function optimus() {
    if (shablon[4] == '') {
        shablon[4] = '0'
        cell[4].textContent = 'O'
    }
    else if (shablon[4] == '1' && shablon[0] == '') {
        shablon[0] = '0'
        cell[0].textContent = 'O'
    }
// -------------------
    else if (shablon[0] == '0' && shablon[1] == '0' && shablon[2] == '') {
        shablon[2] = '0'
        cell[2].textContent = 'O'
    }
    else if (shablon[2] == '0' && shablon[1] == '0' && shablon[0] == '') {
        shablon[0] = '0'
        cell[0].textContent = 'O'
    }
    else if (shablon[0] == '0' && shablon[1] == '' && shablon[2] == '0') {
        shablon[1] = '0'
        cell[1].textContent = 'O'
    }
// ---------
    else if (shablon[3] == '0' && shablon[4] == '0' && shablon[5] == '') {
        shablon[5] = '0'
        cell[5].textContent = 'O'
    }
    else if (shablon[5] == '0' && shablon[4] == '0' && shablon[3] == '') {
        shablon[3] = '0'
        cell[3].textContent = 'O'
    }
    else if (shablon[3] == '0' && shablon[4] == '' && shablon[5] == '0') {
        shablon[4] = '0'
        cell[4].textContent = 'O'
    }
// --------
    else if (shablon[6] == '0' && shablon[7] == '0' && shablon[8] == '') {
        shablon[8] = '0'
        cell[8].textContent = 'O'
    }
    else if (shablon[8] == '0' && shablon[7] == '0' && shablon[6] == '') {
        shablon[6] = '0'
        cell[6].textContent = 'O'
    }
    else if (shablon[6] == '0' && shablon[7] == '' && shablon[8] == '0') {
        shablon[7] = '0'
        cell[7].textContent = 'O'
    }
// ----------------------
    else if (shablon[0] == '0' && shablon[3] == '0' && shablon[6] == '') {
        shablon[6] = '0'
        cell[6].textContent = 'O'
    }
    else if (shablon[6] == '0' && shablon[3] == '0' && shablon[0] == '') {
        shablon[0] = '0'
        cell[0].textContent = 'O'
    }
    else if (shablon[0] == '0' && shablon[3] == '' && shablon[6] == '0') {
        shablon[3] = '0'
        cell[3].textContent = 'O'
    }
// ----------------------
    else if (shablon[1] == '0' && shablon[4] == '0' && shablon[7] == '') {
        shablon[7] = '0'
        cell[7].textContent = 'O'
    }
    else if (shablon[7] == '0' && shablon[4] == '0' && shablon[1] == '') {
        shablon[1] = '0'
        cell[1].textContent = 'O'
    }
    else if (shablon[1] == '0' && shablon[4] == '' && shablon[7] == '0') {
        shablon[4] = '0'
        cell[4].textContent = 'O'
    }
// ----------------------
    else if (shablon[2] == '0' && shablon[5] == '0' && shablon[8] == '') {
        shablon[8] = '0'
        cell[8].textContent = 'O'
    }
    else if (shablon[8] == '0' && shablon[5] == '0' && shablon[2] == '') {
        shablon[2] = '0'
        cell[2].textContent = 'O'
    }
    else if (shablon[2] == '0' && shablon[5] == '' && shablon[8] == '0') {
        shablon[5] = '0'
        cell[5].textContent = 'O'
    }
// -----------------------------------------------
    else if (shablon[0] == '0' && shablon[4] == '0' && shablon[8] == '') {
        shablon[8] = '0'
        cell[8].textContent = 'O'
    }
    else if (shablon[8] == '0' && shablon[4] == '0' && shablon[0] == '') {
        shablon[0] = '0'
        cell[0].textContent = 'O'
    }
// -----------
    else if (shablon[2] == '0' && shablon[4] == '0' && shablon[6] == '') {
        shablon[6] = '0'
        cell[6].textContent = 'O'
    }
    else if (shablon[6] == '0' && shablon[4] == '0' && shablon[2] == '') {
        shablon[2] = '0'
        cell[2].textContent = 'O'
    }
// ------------------- X joyi uyogiga
    else if (shablon[0] == '1' && shablon[1] == '1' && shablon[2] == '') {
        shablon[2] = '0'
        cell[2].textContent = 'O'
    }
    else if (shablon[0] == '' && shablon[1] == '1' && shablon[2] == '1') {
        shablon[0] = '0'
        cell[0].textContent = 'O'
    }
    else if (shablon[0] == '1' && shablon[1] == '' && shablon[2] == '1') {
        shablon[1] = '0'
        cell[1].textContent = 'O'
    }
// -----------
    else if (shablon[3] == '1' && shablon[4] == '1' && shablon[5] == '') {
        shablon[5] = '0'
        cell[5].textContent = 'O'
    }
    else if (shablon[3] == '' && shablon[4] == '1' && shablon[5] == '1') {
        shablon[3] = '0'
        cell[3].textContent = 'O'
    }
    else if (shablon[3] == '1' && shablon[4] == '' && shablon[5] == '1') {
        shablon[4] = '0'
        cell[4].textContent = 'O'
    }
// -----------------
    else if (shablon[6] == '1' && shablon[7] == '1' && shablon[8] == '') {
        shablon[8] = '0'
        cell[8].textContent = 'O'
    }
    else if (shablon[6] == '' && shablon[7] == '1' && shablon[8] == '1') {
        shablon[6] = '0'
        cell[6].textContent = 'O'
    }
    else if (shablon[6] == '1' && shablon[7] == '' && shablon[8] == '1') {
        shablon[7] = '0'
        cell[7].textContent = 'O'
    }
// --------------------------
    else if (shablon[0] == '1' && shablon[3] == '1' && shablon[6] == '') {
        shablon[6] = '0'
        cell[6].textContent = 'O'
    }
    else if (shablon[0] == '' && shablon[3] == '1' && shablon[6] == '1') {
        shablon[0] = '0'
        cell[0].textContent = 'O'
    }
    else if (shablon[0] == '1' && shablon[3] == '' && shablon[6] == '1') {
        shablon[3] = '0'
        cell[3].textContent = 'O'
    }
// -----------------
    else if (shablon[1] == '1' && shablon[4] == '1' && shablon[7] == '') {
        shablon[7] = '0'
        cell[7].textContent = 'O'
    }
    else if (shablon[1] == '' && shablon[4] == '1' && shablon[7] == '1') {
        shablon[1] = '0'
        cell[1].textContent = 'O'
    }
    else if (shablon[1] == '1' && shablon[4] == '' && shablon[7] == '1') {
        shablon[4] = '0'
        cell[4].textContent = 'O'
    }
// ---------------
    else if (shablon[2] == '1' && shablon[5] == '1' && shablon[8] == '') {
        shablon[8] = '0'
        cell[8].textContent = 'O'
    }
    else if (shablon[2] == '' && shablon[5] == '1' && shablon[8] == '1') {
        shablon[2] = '0'
        cell[2].textContent = 'O'
    }
    else if (shablon[2] == '1' && shablon[5] == '' && shablon[8] == '1') {
        shablon[5] = '0'
        cell[5].textContent = 'O'
    }
// ----------
    else if (shablon[2] == '1' && shablon[4] == '1' && shablon[6] == '') {
        shablon[6] = '0'
        cell[6].textContent = 'O'
    }
    else if (shablon[6] == '1' && shablon[4] == '1' && shablon[2] == '') {
        shablon[2] = '0'
        cell[2].textContent = 'O'
    }
// -------------------- for bug larini oldini olish
    else if (shablon[0] == '0' && shablon[4] == '1' && shablon[8] == '1' && shablon[6] == '') {
        shablon[6] = '0'
        cell[6].textContent = 'O'
    }
    else if (shablon[2] == '1' && shablon[4] == '0' && shablon[6] == '1' && shablon[5] == '') {
        shablon[5] = '0'
        cell[5].textContent = 'O'
    }
    else if (shablon[4] == '0' && shablon[5] == '1' && shablon[7] == '1' && shablon[8] == '') {
        shablon[8] = '0'
        cell[8].textContent = 'O'
    }
// -----------------
    else {
        for (let a = 0, b = 8; a < 4; a++, b--) {
            console.log('a');
            if (!shablon[a] && !shablon[b]) {
                console.log('yeah');
                shablon[a] = '0'
                cell[a].textContent = 'O'
                return
            }
        }
        for (let a = 0; a < 9; a++) {
            if (!shablon[a]) {
                shablon[a] = '0'
                cell[a].textContent = 'O'
                break
            }
        }
    }
}

function won() {
    status.innerHTML = 'Yutdim mayli siqilmen kengi safar oxwidi hudo holasa randomku'
    shablon.fill('optimus')
    isFinished = true
    return
}

function Iwon() {
    status.innerHTML = 'Qoyil yutdingiz'
    shablon.fill('opimus')
    isFinished = true
    return
}

function draw() {
    status.innerHTML = 'Durrang qilisham bir mahorat'
    return
}













