document.addEventListener('DOMContentLoaded', function() { // evento para executar após css etc ser carregado//
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) { // le o formulario e faz evento de submit
        evento.preventDefault(); // previne o recarregar da pagina
        let numeroMaximo = document.getElementById('numero-maximo').value; // variavel do numero maximo
        numeroMaximo = parseInt(numeroMaximo); // converte de string para inteiro

        let numeroAleatorio = Math.random() * numeroMaximo; // faz o calculo do numero digitado X random
        numeroAleatorio = Math.floor(numeroAleatorio + 1); //aredonda o numero
        
        document.getElementById('resultado-valor').innerText = numeroAleatorio //le o resultado do valor
        document.querySelector('.resultado').style.display = 'block'; // pega a div resultado e edita o display para block
    })
})