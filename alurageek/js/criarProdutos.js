import { conectApi } from "./conectAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProdutos(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const preco = document.querySelector("[data-preco]").value;

    try {
        await conectApi.criarProduto(nome, imagem, preco)
        alert('Produto adicionado com sucesso')
    } catch (error) {
        console.error('Erro ao criar produto:', error);
    }

    window.location.reload(true);
}

formulario.addEventListener("submit", evento => criarProdutos(evento));