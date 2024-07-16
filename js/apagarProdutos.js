import { conectApi } from "./conectAPI.js"

async function deletarProduto (id) {
    try {
        await conectApi.apagarProdutos(id);
        alert('Produto apagado com sucesso');
    } catch (error) {
        console.error('Erro ao excluir produto:', error);
    }

    window.location.reload(true)
}

export { deletarProduto }