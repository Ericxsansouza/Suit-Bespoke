window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function abrirNav(){
    document.getElementById("actionNav").style.width = '35%';
}

function fecharNav(){
    document.getElementById("actionNav").style.width = '0%';
}

function enviar_email(){
    var receberEmailUsers = input_1.value;
    exibirMensage.innerHTML = `
    Olá, agradeçemos sua participação!
    `
}

function entrar(){
    window.location="conta.html"
  }

  function inicializar(){
    window.location="index.html"
  }