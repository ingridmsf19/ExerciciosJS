function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date()
    //var hora = data.getHours()
    var min = data.getMinutes()
    var hora = 20;
    msg.innerHTML = `Agora são ${hora}h:${min}min.`;
    if(hora >= 0 && hora < 12 ) {
        //bom dia
        img.src = 'imagens/foto-manha.jpg'
        document.body.style.background = '#e2cd9f'

    }else if(hora >= 12 && hora <18 ){
        //boa tarde
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#92420d'
    }else{
        //boa noite
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#0a214b'
    }
}

