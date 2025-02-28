function entrar() {
    var login = document.getElementById('ilogin')
    var senha = document.getElementById('isenha')
    var entrar = document.getElementsByClassName('entrar')

    if (login.checked && senha.checked) {
        alert('Formulário enviado!')
    }
}