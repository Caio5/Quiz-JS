cont = 0
n = document.getElementById('resp')
p = document.getElementById('pergunta')
r = document.getElementById('resposta')
r1 = document.getElementsByTagName('p')[1]
r2 = document.getElementsByTagName('p')[2]
r3 = document.getElementsByTagName('p')[3]
r4 = document.getElementsByTagName('p')[4]
h1 = document.getElementsByTagName('h2')[1]
var nome

function pergunta1() {
    nome = document.getElementById('resp').value
    document.getElementById('resp').value = ' '
    document.getElementById('capa').src = '_imagens/primeira-imagem.jpg'
    p.innerHTML = '<h2>1. Quanto é 25-37?</h2><p>1) -5<br>2) +12<br>3) -12<br>4) -7<br></p>'
    r1.innerHTML = ' '
    r2.innerHTML = ' '
    r3.innerHTML = ' '
    r4.innerHTML = ' '
    r2.innerHTML = '<p onclick="confirma1()">Confirma</p>'
}

function confirma1() {
    if (Number(n.value) == 3) {
        cont++
        r1.innerHTML = 'Resposta Correta'
        r1.style.background = 'green'
        r1.style.color = 'white'
    }
    else {
        r1.innerHTML = 'Resposta Errada, a opção 3 é a correta.'
        r1.style.background = 'red'
        r1.style.color = 'white'
    }
    r2.innerHTML = ''
    r3.innerHTML = '<p onclick="pergunta2()">Próxima</p>'
}

function pergunta2() {
    document.getElementById('resp').value = ' '
    document.getElementById('capa').src = '_imagens/pergunta2.jpg'
    p.innerHTML = '<h2>2. Qual cor da a mistura de azul com amarelo?</h2><p>1) Preto<br>2) Cinza<br>3) Vermelho<br>4) Verde<br></p>'
    r1.innerHTML = ' '
    r2.innerHTML = ' '
    r3.innerHTML = ' '
    r2.innerHTML = '<p onclick="confirma2()">Confirma</p>'
}
function confirma2() {
    if (Number(n.value) == 4) {
        cont++
        r1.innerHTML = 'Resposta Correta'
        r1.style.background = 'green'
        r1.style.color = 'white'
    }
    else {
        r1.innerHTML = 'Resposta Errada, a opção 4 é a correta.'
        r1.style.background = 'red'
        r1.style.color = 'white'
    }
    r2.innerHTML = ''
    r3.innerHTML = '<p onclick="pergunta3()">Próxima</p>'
}
function pergunta3() {
    document.getElementById('resp').value = ' '
    document.getElementById('capa').src = '_imagens/pergunta3.jpg'
    p.innerHTML = '<h2>3. Quanto é 3x2+8+5+8x3?</h2><p>1) 81<br>2) 68<br>3) 43<br>4) 95<br></p>'
    r1.innerHTML = ' '
    r2.innerHTML = ' '
    r3.innerHTML = ' '
    r2.innerHTML = '<p onclick="confirma3()">Confirma</p>'
}
function confirma3() {
    if (Number(n.value) == 3) {
        cont++
        r1.innerHTML = 'Resposta Correta'
        r1.style.background = 'green'
        r1.style.color = 'white'
    }
    else {
        r1.innerHTML = 'Resposta Errada, a opção 3 é a correta.'
        r1.style.background = 'red'
        r1.style.color = 'white'
    }
    r2.innerHTML = ''
    r3.innerHTML = '<p onclick="pergunta4()">Próximo</p>'
}
function pergunta4() {
    document.getElementById('resp').value = ' '
    document.getElementById('capa').src = '_imagens/pergunta4.png'
    p.innerHTML = '<h2>4. 25 representa quantos por cento de 200?</h2><p>1) 12,5<br>2) 5%<br>3) 15,5%<br>4) 16%<br>5) 20%<br></p>'
    r1.innerHTML = ' '
    r2.innerHTML = ' '
    r3.innerHTML = ' '
    r2.innerHTML = '<p onclick="confirma4()">Confirma</p>'
}
function confirma4() {
    if (Number(n.value) == 1) {
        cont++
        r1.innerHTML = 'Resposta Correta'
        r1.style.background = 'green'
        r1.style.color = 'white'
    }
    else {
        r1.innerHTML = 'Resposta Errada, a opção 1 é a correta.'
        r1.style.background = 'red'
        r1.style.color = 'white'
    }
    r2.innerHTML = ''
    r3.innerHTML = '<p onclick="pergunta5()">Próximo</p>'
}
function pergunta5() {
    document.getElementById('resp').value = ' '
    document.getElementById('capa').src = '_imagens/pergunta5.jpg'
    p.innerHTML = '<h2>5. As raízes da equação 2x2 + bx + c = 0 são 3 e − 4. Nesse caso, o valor de b - c é?</h2><p>1) -26<br>2) −22<br>3) −1<br>4) 26<br></p>'
    r1.innerHTML = ' '
    r2.innerHTML = ' '
    r3.innerHTML = ' '
    r2.innerHTML = '<p onclick="confirma5()">Confirma</p>'
}
function confirma5() {
    if (Number(n.value) == 4) {
        cont++
        r1.innerHTML = 'Resposta Correta'
        r1.style.background = 'green'
        r1.style.color = 'white'
    }
    else {
        r1.innerHTML = 'Resposta Errada, a opção 4 é a correta.'
        r1.style.background = 'red'
        r1.style.color = 'white'
    }
    r2.innerHTML = ''
    r3.innerHTML = '<p onclick="pergunta6()">Próximo</p>'
}
function pergunta6() {
    document.getElementById('resp').value = ' '
    document.getElementById('capa').src = '_imagens/foto-palavra6.jpg'
    p.innerHTML = '<h2>6. Com base na operação 14 dividido por 2 = 7, verifique se as afirmações abaixo estão corretas ou erradas.</h2><p>1) O número 2 é o divisor da operação.<br>2) O quociente é o resultado da operação.<br>3) Essa operação é inversa à multiplicação.<br>4) Todas estao corretas.<br></p>'
    r1.innerHTML = ' '
    r2.innerHTML = ' '
    r3.innerHTML = ' '
    r2.innerHTML = '<p onclick="confirma6()">Confirma</p>'
}
function confirma6() {
    if (Number(n.value) == 4) {
        cont++
        r1.innerHTML = 'Resposta Correta'
        r1.style.background = 'green'
        r1.style.color = 'white'
    }
    else {
        r1.innerHTML = 'Resposta Errada, a opção 4 é a correta.'
        r1.style.background = 'red'
        r1.style.color = 'white'
    }
    r2.innerHTML = ''
    r3.innerHTML = '<p onclick="pergunta7()">Próximo</p>'
}
function pergunta7() {
    document.getElementById('resp').value = ' '
    document.getElementById('capa').src = '_imagens/pergunta7.jpg'
    p.innerHTML = '<h2>7. No número 6a78b, o algarismo a é da ordem das unidades de milhar e o algarismo b é da ordem das unidades. Se 6a78b for divisível por 45, então o valor de a + B é:</h2><p>1) 5<br>2) 6<br>3) 7<br>4) 8<br></p>'
    r1.innerHTML = ' '
    r2.innerHTML = ' '
    r3.innerHTML = ' '
    r2.innerHTML = '<p onclick="confirma7()">Confirma</p>'
}
function confirma7() {
    if (Number(n.value) == 2) {
        cont++
        r1.innerHTML = 'Resposta Correta'
        r1.style.background = 'green'
        r1.style.color = 'white'
    }
    else {
        r1.innerHTML = 'Resposta Errada, a opção 2 é a correta.'
        r1.style.background = 'red'
        r1.style.color = 'white'
    }
    r2.innerHTML = ''
    r3.innerHTML = '<p onclick="pergunta8()">Próximo</p>'
}
function pergunta8() {
    document.getElementById('resp').value = ' '
    document.getElementById('capa').src = '_imagens/pergunta8.jpg'
    p.innerHTML = '<h2>8. Quantas casas decimais tem o número pi?</h2><p>1) Duas<br>2) Centenas<br>3) Infinitas<br>4) Vinte<br>5) Milhares<br></p>'
    r1.innerHTML = ' '
    r2.innerHTML = ' '
    r3.innerHTML = ' '
    r2.innerHTML = '<p onclick="confirma8()">Confirma</p>'
}
function confirma8() {
    if (Number(n.value) == 3) {
        cont++
        r1.innerHTML = 'Resposta Correta'
        r1.style.background = 'green'
        r1.style.color = 'white'
    }
    else {
        r1.innerHTML = 'Resposta Errada, a opção 3 é a correta.'
        r1.style.background = 'red'
        r1.style.color = 'white'
    }
    r2.innerHTML = ''
    r3.innerHTML = '<p onclick="pergunta9()">Próximo</p>'
}
function pergunta9() {
    document.getElementById('resp').value = ' '
    document.getElementById('capa').src = '_imagens/pergunta9.jpg'
    p.innerHTML = '<h2>9. O triângulo PQR, no plano cartesiano, de vértices P = (0, 0), Q = (6, 0) e R = (3, 5), é</h2><p>1) equilátero.<br>2) isósceles, mas não equilátero.<br>3) escaleno.<br>4) retângulo.<br></p>'
    r1.innerHTML = ' '
    r2.innerHTML = ' '
    r3.innerHTML = ' '
    r2.innerHTML = '<p onclick="confirma9()">Confirma</p>'
}
function confirma9() {
    if (Number(n.value) == 2) {
        cont++
        r1.innerHTML = 'Resposta Correta'
        r1.style.background = 'green'
        r1.style.color = 'white'
    }
    else {
        r1.innerHTML = 'Resposta Errada, a opção 2 é a correta. '
        r1.style.background = 'red'
        r1.style.color = 'white'
    }
    r2.innerHTML = ''
    r3.innerHTML = '<p onclick="pergunta10()">Próximo</p>'
}
function pergunta10() {
    document.getElementById('resp').value = ' '
    document.getElementById('capa').src = '_imagens/pergunta10.jpg'
    p.innerHTML = '<h2>10. A equação da reta que passa pelos pontos (3,3) e (6,6) é:</h2><p>1) y = x.<br>2) y = 3x.<br>3) y = 6x.<br>4) 2y = x.<br></p>'
    r1.innerHTML = ' '
    r2.innerHTML = ' '
    r3.innerHTML = ' '
    r2.innerHTML = '<p onclick="confirma10()">Confirma</p>'
}
function confirma10() {
    if (Number(n.value) == 1) {
        cont++
        r1.innerHTML = 'Resposta Correta'
        r1.style.background = 'green'
        r1.style.color = 'white'
    }
    else {
        r1.innerHTML = 'Resposta Errada, a opção 1 é a correta.'
        r1.style.background = 'red'
        r1.style.color = 'white'
    }
    r2.innerHTML = ''
    r3.innerHTML = '<p onclick="resultado()">Resultado</p>'
}
function resultado() {
    p.innerHTML = ' '
    r2.innerHTML = ' '
    r3.innerHTML = '<a href="principal.html">Refazer</a>'
    if (cont == 0) {
        r.innerHTML = `Olá ${nome}, das 10 questões você acertou ${cont}, você precisa ter mais conhecimento.`
        r.style.fontSize = '20px'
        document.getElementById('capa').src = '_imagens/foto-final1.jpg'
    }
    else if (cont >= 1 && cont <= 3) {
        r.innerHTML = `Olá ${nome}, das 10 questões você acertou ${cont}, seu conhecimento é regular, pesquise mais.`
        r.style.fontSize = '20px'
        document.getElementById('capa').src = '_imagens/foto-final2.jpg'
    }
    else if (cont >= 4 && cont <= 7) {
        r.innerHTML = `Olá ${nome}, das 10 questões você acertou ${cont}, você tem um bom conhecimento, mas pode melhorar.`
        r.style.fontSize = '20px'
        document.getElementById('capa').src = '_imagens/foto-final3.jpg'
    }
    else {
        r.innerHTML = `Olá ${nome}, das 10 questões você acertou ${cont}, PARABÉNS você tem muito conhecimento.`
        r.style.fontSize = '20px'
        document.getElementById('capa').src = '_imagens/foto-final4.jpeg'
    }
}