function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora =  23//data.getHours()
    msg.innerHTML = `Agora são <strong>${hora} horas</strong>.`

    if (hora >= 0 && hora < 12 ) {
        img.src = 'imagem/fotoa.jpg'
        document.body.style.background = '#E5DBD6'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'imagem/fotot.jpg'
        document.body.style.background = '#D7AF70'
    } else {
        img.src = 'imagem/foton.jpg'
        document.body.style.background = '#061616'
        document.querySelector('body header h1').style.color = 'white';
        document.querySelector('body footer p').style.color = 'white';

    }
}