function criptografar() {
    let mensagem = criptografarTexto(document.getElementById('textoInput').value);
    mostrarCriptografia(mensagem);
}

function descriptografar() {
    let mensagem = descriptografarTexto(document.getElementById('textoInput').value);
    mostrarCriptografia(mensagem);
}

function criptografarTexto(mensagem) {
    let mensagemCriptografada = '';

    //Deslocando cada letra no alfabeto em uma posição para frente
    for (let i = 0; i < mensagem.length; i++) {
        let charCode = mensagem.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { // Verifica se é uma letra minúscula
            charCode = (charCode - 97 + 1) % 26 + 97; // Desloca a letra por 1 posição no alfabeto
        }
        mensagemCriptografada += String.fromCharCode(charCode); // Converte o código ASCII de volta para o caractere correspondente e adiciona ao texto criptografado
    }

    return mensagemCriptografada;
}

function descriptografarTexto(textoCriptografado) {
    let textoDescriptografado = '';

    //Operação inversa da criptografia: deslocar cada letra no alfabeto para trás
    for (let i = 0; i < textoCriptografado.length; i++) {
        let charCode = textoCriptografado.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { // Verifica se é uma letra minúscula
            charCode = (charCode - 97 - 1 + 26) % 26 + 97; // Desloca a letra para trás 1 posição no alfabeto
        }
        textoDescriptografado += String.fromCharCode(charCode); // Converte o código ASCII de volta para o caractere correspondente e adiciona ao texto descriptografado
    }

    return textoDescriptografado;
}

function mostrarCriptografia(mensagem) {
    document.querySelector('.containersecundario__inicial').style.display = 'none';
    document.querySelector('.containersecundario__resultado').style.display = 'flex';
    document.querySelector('.containersecundario__texto__resultado').textContent = mensagem;

}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('textoInput').addEventListener('keyup', function () {
        let texto = this.value;
        let textoValido = texto.replace(/[^a-z\s]/g, ''); // Remove caracteres que não sejam letras minúsculas ou espaços
        if (texto !== textoValido || texto == '') {
            document.getElementById('criptografar').setAttribute('disabled', 'disabled');
            document.getElementById('descriptografar').setAttribute('disabled', 'disabled');
        } else {
            document.getElementById('criptografar').removeAttribute('disabled');
            document.getElementById('descriptografar').removeAttribute('disabled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let btnCopiar = document.querySelector('.btn__copiar');

    btnCopiar.addEventListener('click', function () {
        let textoParaCopiar = document.querySelector('.containersecundario__texto__resultado').innerText;

        navigator.clipboard.writeText(textoParaCopiar)
            .then(() => {
                alert('Texto copiado com sucesso!');
            })
            .catch((err) => {
                console.error('Erro ao copiar texto:', err);
                alert('Erro ao copiar texto. Por favor, tente manualmente.');
            });
    });
});

