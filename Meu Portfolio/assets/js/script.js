//Nome
let Nome = document.querySelector('#nome')
let erroNome = document.querySelector('#erroNome')

function validaNome(){
    if(Nome.value.length < 3){
        erroNome.innerHTML = 'Nome Inválido'
    }else{
        erroNome.innerHTML = ''
        nomeOk = true
    }
}

//email
let email = document.querySelector('#email')
let erroEmail = document.querySelector('#erroEmail') 

function validaEmail(){
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        erroEmail.innerHTML = 'Email Inválido'
    }else{
        erroEmail.innerHTML = ''
        emailOk = true
    }
}

//Assunto
let Assunto = document.querySelector('#assunto')
let erroAssunto = document.querySelector('#erroAssunto')

function validaAssunto(){
    if(Assunto.value.length > 100){
        erroAssunto.innerHTML = 'Assunto Inválido'
    }else{
        erroAssunto.innerHTML = ''
        AssuntoOk = true
    }
}

//variaveis auxiliares de validação
let nomeOk = false
let emailOk = false
let AssuntoOk = false

//mapa
let mapa = document.querySelector('#mapa')

function enviar(){
    if(nomeOk && emailOk && AssuntoOk){
        alert('email enviado com sucesso!')
    }else{

        alert('preencha as informações corretamente')
    }
}

function mapaZoo (){
    mapa.style.width = '600px'
    mapa.style.heigth = '400px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.heigth = '250px'
}