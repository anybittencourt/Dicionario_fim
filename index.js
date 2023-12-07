// // const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.
// const botoesContainer = document.getElementById('botoes-container')
const modal = document.getElementById('modal')
// const fecharModal = document.getElementById('fechar-modal')
// const tituloModal = document.getElementById('titulo-modal')
// const textoModal = document.getElementById('texto-modal')
// const audioModal = document.getElementById('audio-modal')

// const objetos = [
//     {
//         titulo:"Titulo 1",
//         texto:'Este é o texto',
//         audio:'audio.mp3'
//     }
// ]

// const botoes = objetos.map((objeto, indice)=>{;
//     const botao = document.createElement('button');
//     botao.textContent = `Aware`;
//     botao.classList.add('botao-texto');

//     botao.addEventListener('click',()=>{
//         // Atualize os elementos do modal com os dados do objeto
//         tituloModal.textContent = objeto.titulo;
//         textoModal.textContent = objeto.texto;
//         audioModal.src = objeto.audio;

//         // Exiba o modal
//         modal.style.display = 'block';
//     });

//     return botao
// });
// // Adicione os botões ao container
// botoes.forEach(botao =>{
//     botoesContainer.appendChild(botao);
// });

// // Feche o modal ao clicar no botão "Fechar"
// fecharModal.addEventListener('click', ()=>{
//     modal.style.display = 'none'
// })

document.getElementById('palavra1').addEventListener('click', function() {
    let modal = document.getElementById('aware');
    
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } 
    else {
        modal.style.display = 'none';
    }
});
document.getElementById('palavra2').addEventListener('click', function() {
    let modal = document.getElementById('bandwagon');
    
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } 
    else {
        modal.style.display = 'none';
    }
});
document.getElementById('palavra3').addEventListener('click', function() {
    let modal = document.getElementById('belief');
    
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } 
    else {
        modal.style.display = 'none';
    }
});
document.getElementById('palavra4').addEventListener('click', function() {
    let modal = document.getElementById('bet');
    
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } 
    else {
        modal.style.display = 'none';
    }
});
document.getElementById('palavra5').addEventListener('click', function() {
    let modal = document.getElementById('harm');
    
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } 
    else {
        modal.style.display = 'none';
    }
});
document.getElementById('palavra6').addEventListener('click', function() {
    let modal = document.getElementById('issue');
    
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } 
    else {
        modal.style.display = 'none';
    }
});
document.getElementById('palavra7').addEventListener('click', function() {
    let modal = document.getElementById('ploy');
    
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } 
    else {
        modal.style.display = 'none';
    }
});
document.getElementById('palavra8').addEventListener('click', function() {
    let modal = document.getElementById('struggle');
    
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } 
    else {
        modal.style.display = 'none';
    }
});
document.getElementById('palavra9').addEventListener('click', function() {
    let modal = document.getElementById('throughout');
    
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } 
    else {
        modal.style.display = 'none';
    }
});
document.getElementById('palavra10').addEventListener('click', function() {
    let modal = document.getElementById('unscramble');
    
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } 
    else {
        modal.style.display = 'none';
    }
});

// Feche o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
})