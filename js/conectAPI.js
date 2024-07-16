
async function consultaProdutos() {
    try {
        const buscaProdutos = await fetch('http://localhost:3000/produtos');
        const produtos = await buscaProdutos.json();
        return produtos;
    } catch (error) {
        console.error("erro ao listar produtos:", error);
        throw error;
    }
}

async function criarProduto (nome, imagem, preco) {
    try {
        const conexao = await fetch('http://localhost:3000/produtos', {
            method: "POST",
            headers: {
                "Content-type": "application/json" 
            },
            body: JSON.stringify({
                nome: nome,
                imagem: imagem,
                preco: preco,
            })
        });
    
        const conexaoApi = await conexao.json();
        return conexaoApi;
    } catch (error) {
        console.error("Erro ao constuir produtos:", error);
        throw error;
    }
}

async function apagarProdutos(id) {
    try {
        const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
            method: "DELETE",
        });
        const data = await conexao.json();
        console.log(data);
    } catch (error) {
        console.error('Erro ao deletar produto:'. error);
        throw error;
    }
} 

export const conectApi ={
    consultaProdutos,
    criarProduto,
    apagarProdutos,
}