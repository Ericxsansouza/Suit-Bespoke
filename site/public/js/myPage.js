function deslogar(){
    window.location="index.html"
}


function exibirEndereco(){
    contentBlock.style.display = 'flex';
    contentBlock.style.flexDirection = 'column'
}

const listaEndereco = [];
function cadastrarEndereco(){
    var endereco = buscarEnderecoDoCliente.value;
    listaEndereco.push(endereco);

    exibicaoDoEndereco.innerHTML = "";
    for(var i = 0; i < listaEndereco.length; i++){
        exibicaoDoEndereco.innerHTML += `
        ${listaEndereco[i]}<br>
        `
    }
    contentBlock.style.display = 'none';
} 

// Fim endereço

// Começo nome
function exibirNomeDoCliente(){
    contentBlockDoNome.style.display = 'flex';
    contentBlockDoNome.style.flexDirection = 'column'
}

const listaNome = [];
function cadastrarNome(){
    var nomeCliente = buscarNomeDoCliente.value;
    listaNome.push(nomeCliente);

    contentBlockDoNome.innerHTML = "";
    nameUser.innerHTML = "";
    for(var i = 0; i < listaNome.length; i++){
        nameUser.innerHTML += `
        ${listaNome[i]}<br>
        `
        resultName.innerHTML = `
        ${listaNome[i]}
        `
    }

    contentBlockDoNome.style.display = 'none';
}

//  Fim nome

// Começo email
function exibirEmailDoCliente(){
    contentBlockDoEmail.style.display = 'flex';
    contentBlockDoEmail.style.flexDirection = 'column'
}

const listaEmail = [];
function cadastrarEmail(){
    var emailCliente = buscarEmailDoCliente.value;
    listaEmail.push(emailCliente);

    emailUser.innerHTML = "";
    for(var i = 0; i < listaEmail.length; i++){
        emailUser.innerHTML += `
        ${listaEmail[i]}<br>
        `
    }
    contentBlockDoEmail.style.display = 'none';
}

// Fim email