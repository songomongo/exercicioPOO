"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produtodoCarrinho = [];
    }
    adicionarProdutoAoProduto(produto) {
        this.produtodoCarrinho.push(produto);
    }
    adicionarProduto(produto) {
        this.produtodoCarrinho.filter((item) => item.nome !== produto.nome);
    }
    excluirProduto2(produto) {
        this.produtodoCarrinho = this.produtodoCarrinho.filter((item) => item.nome !== produto.nome);
    }
    calcularValorTotal() {
        let soma = 0;
        for (let i = 0; 1 < this.produtodoCarrinho.length; i++) {
            soma = soma + this.produtodoCarrinho[i].preco;
        }
        return soma;
    }
    exibirProdutos() {
        console.log("Produtos no carrinho");
        let soma = 0;
        for (let i = 0; 1 < this.produtodoCarrinho.length; i++) {
            console.log("Produto: " + this.produtodoCarrinho[i].nome
                + "R$" + this.produtodoCarrinho[i].preco.toFixed(2));
        }
        return soma.toFixed(2);
    }
}
class loja {
    constructor() {
        this.produtosDoEstoque = [];
        this.carrinhoDeCompra = new CarrinhoDeCompras();
    }
    adicionarProdutoAoEstoque(produto) {
        this.produtosDoEstoque.push(produto);
    }
    removerProdutoDoEstoque(produto) {
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome);
    }
    adicionarProdutoAoCarrinho(produto) {
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome === produto.nome);
        if (produtoEncontrado) {
            this.carrinhoDeCompra.adicionarProduto(produtoEncontrado);
            return "Produto adicionado ao carrinho";
        }
        else {
            "Produto nao encontrado no carrinho";
        }
    }
    removerProdutoDoCarrino(produto) {
        this.carrinhoDeCompra.excluirProduto2(produto);
    }
    exibirProdutosDoCarrinho() {
        this.carrinhoDeCompra.exibirProdutos();
    }
}
const ProdutoLoja1 = new ProdutoLoja("camiseta", 29.99);
const ProdutoLoja2 = new ProdutoLoja("camiseta", 29.99);
const ProdutoLoja3 = new ProdutoLoja("camiseta", 29.99);
const ProdutoLoja4 = new ProdutoLoja("camiseta", 29.99);
const minhaLoja = new loja();
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja1);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja2);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja3);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja4);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja4);
minhaLoja.removerProdutoDoCarrino(ProdutoLoja4);
minhaLoja.removerProdutoDoEstoque(ProdutoLoja4);
minhaLoja.exibirProdutosDoCarrinho();
console.log("Total de carrinho de compras");
