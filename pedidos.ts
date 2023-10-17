enum StatusPedido {

    AguardandoPreparo = "Aguardando Preparo",
    EmPreparo = "Em preparo",
    SaiuParaEntrga = "Saiu para entrega",
    Entrega = "Entregues"

}

class ProdutoPedido {
    nome: string;
    valor: number;

    constructor(nome: string, valor: number) {
        this.nome = nome
        this.valor = valor;

    }
}
//classe anonima

class Pedido {
    private produtos: ProdutoPedido[];
    private status: StatusPedido;

    constructor() {
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }

    adicionarProduto(produto: ProdutoPedido) {
        this.produtos.push(produto);
        return "Produto adicionado com sucesso"
    }

    atualizarStatus(atualizar: StatusPedido) {
        this.status = atualizar
        return "Status atualizado com sucesso"
    }

    exibirStatus() {
        return this.status;        
    }

    //listagem

    exibirProdutosDoPedido() {
        for (let index =0; index < this.produtos.length; index++) {
         console.log("Produto : " + this.produtos[index].nome 
         + "R$" + this.produtos[index].valor.toFixed(2))
        }
        }
    }


const pedido1 = new ProdutoPedido("x-burguer", 20.00);
const pedido2 = new ProdutoPedido("doagao", 10.00);
const pedido3 = new ProdutoPedido("batata frita", 15.00);


const pedidoList = new Pedido();
pedidoList.adicionarProduto(pedido1)
pedidoList.adicionarProduto(pedido2)
pedidoList.adicionarProduto(pedido3)
pedidoList.atualizarStatus(StatusPedido.EmPreparo)
console.log(pedidoList.exibirProdutosDoPedido());


/*//
7. Crie uma instância da classe Pedido, adicione pelo menos dois produtos a ele e 
atualize seu status para "Em Preparo."

8. Exiba as informações do pedido, incluindo os produtos escolhidos e o status do 
pedido no console.
Dica:

Lembre-se de usar a enumeração StatusPedido para representar o status do pedido 
e implementar os métodos da classe Pedido para adicionar produtos e atualizar o 
status*/