const status = document.querySelector('.game--status')
const res = document.querySelector('.game--restart')
let cell = document.querySelectorAll('.cell')
let shablon = ['', '', '', '', '', '', '', '', '',]

function check() {
    let count = 0
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
        console.log(shablon);
        draw()
    }
}

for (let cel of cell) {
    cel.onclick = () => {
        let index = cel.getAttribute("data-cell-index")
        if (!shablon[index]) {
            shablon[index] = '1'
            cel.textContent = 'X'
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
        return
    }else if (shablon[4] == '1' && shablon[0] == '') {
        shablon[0] == '0'
        cell[0].textContent = 'O'
        return
    }
    // ---------------------
    else if (shablon[0] == '1' && shablon[1] == '1' && shablon[2] == '') {
        shablon[2] = '0'
        cell[2].textContent = 'O'
        return
    }
    else if (shablon[0] == '' && shablon[1] == '1' && shablon[2] == '1') {
        shablon[0] = '0'
        cell[0].textContent = 'O'
        return
    }
    else if (shablon[0] == '1' && shablon[1] == '' && shablon[2] == '1') {
        shablon[1] = '0'
        cell[1].textContent = 'O'
        return
    }
    // -----------------
    else if (shablon[3] == '1' && shablon[4] == '1' && shablon[5] == '') {
        shablon[5] = '0'
        cell[5].textContent = 'O'
        return
    }
    else if (shablon[3] == '' && shablon[4] == '1' && shablon[5] == '1') {
        shablon[3] = '0'
        cell[3].textContent = 'O'
        return
    }
    else if (shablon[3] == '1' && shablon[4] == '' && shablon[5] == '1') {
        shablon[4] = '0'
        cell[4].textContent = 'O'
        return
    }
    // -------------------------------
    else if (shablon[6] == '1' && shablon[7] == '1' && shablon[8] == '') {
        shablon[8] = '0'
        cell[8].textContent = 'O'
        return
    }
    else if (shablon[6] == '' && shablon[7] == '1' && shablon[8] == '1') {
        shablon[6] = '0'
        cell[6].textContent = 'O'
        return
    }
    else if (shablon[6] == '1' && shablon[7] == '' && shablon[8] == '1') {
        shablon[7] = '0'
        cell[7].textContent = 'O'
        return
    }
    // ------------------------------------
    else if (shablon[0] == '1' && shablon[3] == '1' && shablon[6] == '') {
        shablon[6] = '0'
        cell[6].textContent = 'O'
        return
    }
    else if (shablon[0] == '' && shablon[3] == '1' && shablon[6] == '1') {
        shablon[0] = '0'
        cell[0].textContent = 'O'
        return
    }
    else if (shablon[0] == '1' && shablon[3] == '' && shablon[6] == '1') {
        shablon[3] = '0'
        cell[3].textContent = 'O'
        return
    }
    // -------------------------------------
    else if (shablon[1] == '1' && shablon[4] == '1' && shablon[7] == '') {
        shablon[7] = '0'
        cell[7].textContent = 'O'
        return
    }
    else if (shablon[1] == '' && shablon[4] == '1' && shablon[7] == '1') {
        shablon[1] = '0'
        cell[1].textContent = 'O'
        return
    }
    // -------------------------
    else if (shablon[2] == '1' && shablon[5] == '1' && shablon[8] == '') {
        shablon[8] = '0'
        cell[8].textContent = 'O'
        return
    }
    else if (shablon[2] == '' && shablon[5] == '1' && shablon[8] == '1') {
        shablon[2] = '0'
        cell[2].textContent = 'O'
        return
    }
    else if (shablon[2] == '1' && shablon[5] == '' && shablon[8] == '1') {
        shablon[5] = '0'
        cell[5].textContent = 'O'
        return
    }
    // ----------------------
    else if (shablon[0] == '1' && shablon[8] == '1' && shablon[3] == '' || shablon[2] == '1' && shablon[6] == '1' && shablon[3] == '') {
        shablon[3] = '0'
        cell[3].textContent = 'O'
        return
    }
    // -----------------
    else if (shablon[1] == '1' && shablon[7] == '1' && shablon[0] == '' || shablon[3] == '1' && shablon[5] == '1' && shablon[0] == '') {
        shablon[0] = '0'
        cell[0].textContent = 'O'
    }
}

function won() {
    status.innerHTML = 'Yutdim mayli siqilmen kengi safar oxwidi hudo holasa randomku'
    shablon.fill('optimus')
    return
}

function Iwon() {
    status.innerHTML = 'Qoyil yutdingiz'
    shablon.fill('opimus')
    return
}

function draw() {
    status.innerHTML = 'Durrang qilisham bir mahorat'
    return
}













