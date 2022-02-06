function getPassword(){
    var chars = '0123456789abcdefghijklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXTZ!@#$%^&*()_+?<>:{}[]';
    var passwod = ''

    for (let i = 0; i < 16; i++) {
        let random = Math.round(Math.random() * chars.length)
        passwod += chars.substring(random, random+1)
    }
    password.value = passwod
}




