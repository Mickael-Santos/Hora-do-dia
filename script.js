function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var corpo = window.document.getElementById('corpo')
data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora}:00 H`
img.style.padding = '2px'
img.style.borderRadius ='150px'

if(hora >= 0 && hora < 12){
   img.src = 'manha.png'
   corpo.style.background = '#215261'
}else if(hora >= 12 && hora < 18){
    img.src='tarde.png'
    corpo.style.background = '#9e6642'
}else if(hora >= 18 && hora <= 23 ){
    img.src='noite.png'
    corpo.style.background = '#574673'
}else{
    window.alert('Horário Inválido, tente novamente')
    msg.innerHTML = 'Horário inválido, regule seu horário e tente novamente!'
    img.src = 'exclamacao.png'
}
}
