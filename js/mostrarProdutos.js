import { deletarProduto } from "./apagarProdutos.js";
import { conectApi } from "./conectAPI.js";

const loja = document.querySelector("[data-loja]");

function constroiCard(nome, imagem, preco, id) {
    const card = document.createElement("div");
    card.className = "loja__card";
    card.innerHTML = `
            <div class="card__img">
                <img src="${imagem}" alt="${nome}">
            </div>
            <div class="card__info">
                <p>${nome}</p>
                <div class="card__preco">
                    <h2>$ ${preco}</h2>
                    <button class="card__delete" data-delete id="${id}">
                        <img src="./assets/icones/lixeira.png" alt="deletar">
                    </button>
                </div>
            </div> 
    `;

    return card
}

async function listaProduto () {
    try {
        const produtos = await conectApi.consultaProdutos();

        if (produtos.length > 0) {
            produtos.forEach(element => loja.appendChild(
                constroiCard(element.nome, element.imagem, element.preco, element.id)
            ));
    
            const lixeira = document.querySelectorAll("[data-delete]");
            lixeira.forEach(del => {
                del.addEventListener("click", () => {
                    console.log(del.id)
                    deletarProduto(del.id);
            });
        });  

        } else {
            loja.innerHTML = `<h1 class="loja__vazia">Nenhum produto foi adicionado</h1>`
        }
    } catch (error) {
        loja.innerHTML = `<h1 class="loja__vazia">Não foi possível carregar os produtos</h1>`
        console.error('Erro ao listar produtos:'. error);
    }
}

listaProduto();