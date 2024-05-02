function cadastra() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtad')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRADO!!!!')
    } else {
        var box = document.getElementsByName('box')
        var idade = ano - Number(fano.value)
        var genero =  ""
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (box[0].checked) {
            genero = "Homen"
            if(idade >= 0 && idade < 12) {
                img.setAttribute('src', 'img/bebeH.jpg')
            } else if (idade < 29) {
                img.setAttribute('src', 'img/jovemH.jpg')
            }else if (idade < 60) {
                //adulta
                img.setAttribute('src', 'img/adultoH.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'img/idosoH.jpg')
            }
            
        } else  {
            genero = "Mulher"
            if(idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src' , 'img/bebeM.jpg')
            } else if (idade < 29) {
                //jovem
                img.setAttribute('src', 'img/jovemM.jpg')
            }else if (idade < 60) {
                //adulta
                img.setAttribute('src', 'img/adultoM.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'img/idosaM.jpg')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Você é <strong>${genero}</strong> com <strong>${idade}</strong> anos`
        res.appendChild(img)
    }
}
