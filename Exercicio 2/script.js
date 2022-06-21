

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var masc = document.getElementById('masc')
        var fem = document.getElementById('fem')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if( masc.checked){
            
            if(idade >= 0 && idade <= 10){
                //criança
                genero = 'Menino'
                img.setAttribute('src', 'Imagens/criança-menino.jpg')
            }else if( idade < 18){
                // jovem
                genero = 'Adolescente'
                img.setAttribute('src', 'Imagens/adolescente-menino.jpg')
            }else if( idade < 40){
                // jovem
                genero = 'Homem Jovem'
                img.setAttribute('src', 'Imagens/homem-jovem.jpg')
            }else if(idade < 60){
                // adulto
                genero = 'Homem Adulto'
                img.setAttribute('src', 'Imagens/homem-adulto.jpg')
            }else{
                //idoso
                genero = 'Homem Idoso'
                img.setAttribute('src', 'Imagens/homem-idoso.jpg')
            }

        }else if (fem.checked){
            
            if(idade >= 0 && idade <= 10){
                //criança
                genero = 'Menina'
                img.setAttribute('src', 'Imagens/criança-menina.jpg')
            }else if( idade < 18){
                // jovem
                genero = 'Adolescente'
                img.setAttribute('src', 'Imagens/adolescente-menina.jpg')
            }else if(idade < 40){
                // jovem
                genero = 'Mulher Jovem'
                img.setAttribute('src', 'Imagens/mulher-jovem.jpg')
            }else if(idade < 60){
                // adulta
                genero = 'Mulher Adulta'
                img.setAttribute('src', 'Imagens/mulher-adulta.jpg')
            }else{
                //idosa
                genero = 'Mulher Idosa'
                img.setAttribute('src', 'Imagens/mulher-idosa.jpg')
            }
        }


        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)
    }
}
