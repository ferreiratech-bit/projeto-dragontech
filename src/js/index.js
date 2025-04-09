alert('oi')

//OBJETIVO 1- QUANDO CLICAR NO BOTAO DO PERSONAGEM NA LISTA, MARCAR O BOTAO COMO SELECIONADO
//PASSO 1 - pegar os botoes no js para poder verificarquandoo usuario clicar em cima de um deles

//const codepixie = document.getElementById("codepixie")
const botoes = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll(".personagem")


//passo 2 - adicionar a classe  selecionado no botao que o ussuario clicou
botoes.forEach((botao, indice) => { 
    botao.addEventListener("click", () => {
        //passo 3 - verificar se ja existe um botao selecionado, se sim, devemos remover a seleçao dele
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");


        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
        personagem[indice].classList.add("selecionado");

    });  
});

//objetivo 2 - quando clicar no botao do personagem mostra as informaçoes do personagem
//passo 1 - 
