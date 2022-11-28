window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function abrirNav() {
    document.getElementById("actionNav").style.width = '35%';
}

function fecharNav() {
    document.getElementById("actionNav").style.width = '0%';
}

function enviar_email() {
    var receberEmailUsers = input_1.value;
    exibirMensage.innerHTML = `
    Olá, agradeçemos sua participação!
    `
}

function entrar() {
    window.location = "conta.html"
}

function inicializar() {
    window.location = "index.html"
}

function irParaSecaoDeTernos(){
    window.location = "SectionClassic.html"
}

function contarCurtidas1() {
    contador1.innerHTML = Number(contador1.innerHTML) + 1;
}

function contarCurtidas2() {
    contador2.innerHTML = Number(contador2.innerHTML) + 1;
}

function contarCurtidas3() {
    contador3.innerHTML = Number(contador3.innerHTML) + 1;
}

function converter() {
    var receberDolar = Number(input_1.value);
    var valorReal = receberDolar * 5.36;

    if(receberDolar == 0){
        resultado.innerHTML = `
        Digite um valor no campo!
        `
    }else{
        resultado.innerHTML = `
        O Valor convertido em <b>R$ ${valorReal.toFixed(2)}</b>
        `
    }
}

// Carrinho

const valorDoTerno1 = 899;
const valorDoTerno2 = 999;
const valorDoTerno3 = 1010;
function irParaCarrinho() {
    document.getElementById("actionNav2").style.width = '35%';
    const item = ['Costume Cinza Havana', './assets/SuitcomTies.png'];
    var i = 1;
    console.log(item);
    console.log('No log aparece');

    while (i < item.length) {
        resultado.innerHTML += `
        <div class="contentProduct">
        <img src= ${item[1]} alt=""><br>
        <h4>${item[0]}</h4>
        <p class="p_description">Pura Lã Casentino por Casentino, Itália</p>
        </div>
        `
        i++;
        totalFinal.innerHTML = "";
        totalFinal.innerHTML += `
        SubTotal:<b> $${valorDoTerno1 + valorDoTerno2 + valorDoTerno3}</b>
        `
    }
}

function irParaCarrinho2() {
    document.getElementById("actionNav2").style.width = '35%';
    const item2 = ['Costume Havana Preto', './assets/SuitBlack.png'];
    var i = 1;
    console.log(item2);
    console.log('No log aparece');

    while (i < item2.length) {
        resultado.innerHTML += `
        <div class="contentProduct">
        <img src= ${item2[1]} alt=""><br>
        <h4>${item2[0]}</h4>
        <p class="p_description">Caxemira de lã por E.Thomas, Itália</p>
        </div>
        `
        i++;
        totalFinal.innerHTML = "";
        totalFinal.innerHTML += `
        SubTotal:<b> $${valorDoTerno2 + valorDoTerno3}</b>
        `
    }
}

function irParaCarrinho3() {
    document.getElementById("actionNav2").style.width = '35%';
    const item3 = ['Costume Light Grey Havana', './assets/SuitGray.png'];
    var i = 1;
    console.log(item3);
    console.log('No log aparece');

    while (i < item3.length) {
        resultado.innerHTML += `
        <div class="contentProduct">
        <img src= ${item3[1]} alt=""><br>
        <h4>${item3[0]}</h4>
        <p class="p_description">Lã Pura por Solbiati, Itália</p>
        </div>
        `
        i++;
        totalFinal.innerHTML = "";
        totalFinal.innerHTML += `
        SubTotal:<b> $${valorDoTerno3}</b>
        `
    }
}

function excluirTerno(){
    resultado.innerHTML = "";
    totalFinal.innerHTML = "";
    
}

function excluirCompra() {
    resultado.innerHTML = "";
    document.getElementById("actionNav2").style.width = '0%';
}
