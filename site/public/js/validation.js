function mostrarRequisitos() {
    contentRequisitos.style.display = 'flex'
    contentRequisitos.style.flexDirection = 'column'
}

function requisitosDaSenha() {
    var password = input_password.value;
    const regex_upper = /[A-Z\d&Ñ]/;
    const regex_special = /[!@#$%^&*()_+]/;

    if (password.length >= 8) {
        minChar.style.display = 'none'
    } else {
        minChar.style.color = '--blue-darkest'
        minChar.style.fontWeight = '400'
        minChar.innerHTML = minChar.innerHTML.replace("•", "•")
    };

    if (regex_upper.test(password)) {
        charMaiusculo.style.display = 'none'
    } else {
        charMaiusculo.style.color = '--blue-darkest'
        charMaiusculo.style.fontWeight = '400'
        charMaiusculo.innerHTML = charMaiusculo.innerHTML.replace("•", "•")
    };

    if (regex_special.test(password)) {
        charSpecial.style.display = 'none'
    } else {
        charSpecial.style.color = '--blue-darkest'
        charSpecial.style.fontWeight = '400'
        charSpecial.innerHTML = charSpecial.innerHTML.replace("•", "•")
    };
}


    