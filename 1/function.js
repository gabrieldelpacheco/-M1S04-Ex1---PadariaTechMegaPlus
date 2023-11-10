
class CaixaRegistradora {
    constructor() {
      this.estoque = [];
      this.caixa = [];
      this.clienteAtual = null;
    }
  
    adicionarProduto(codigoBarra, preco, nome) {
      const novoProduto = { codigoBarra, preco, nome };
      this.estoque.push(novoProduto);
    }
  
    iniciarAtendimento(cliente) {
      this.clienteAtual = cliente;
      this.caixa = [];
      console.log(`Iniciando atendimento para ${cliente}`);
    }
  
    adicionarItem(codigoBarra, quantidade) {
      const produto = this.estoque.find((p) => p.codigoBarra === codigoBarra);
      if (!produto) {
        console.log(`Produto não encontrado com código de barras ${codigoBarra}`);
        return;
      }
      const item = { produto, quantidade };
      this.caixa.push(item);
      console.log(`Adicionando ${quantidade}x ${produto.nome} na caixa registradora`);
    }
  
    calcularValorTotal() {
      let total = 0;
      this.caixa.forEach((item) => {
        const { produto, quantidade } = item;
        total += produto.preco * quantidade;
      });
      console.log(`Valor total da conta de ${this.clienteAtual}: R$${total.toFixed(2)}`);
      return total;
    }
  
    fecharConta(dinheiro) {
      const total = this.calcularValorTotal();
      const troco = dinheiro - total;
      if (troco < 0) {
        console.log(`Dinheiro insuficiente para pagar a conta de R$${total.toFixed(2)}`);
        return;
      }
      console.log(`Troco: R$${troco.toFixed(2)}`);
      this.caixa = [];
    }
  }
  
  
  const caixa = new CaixaRegistradora();
  caixa.adicionarProduto(123, 10.99, 'Arroz');
  caixa.adicionarProduto(456, 5.49, 'Feijão');
  caixa.iniciarAtendimento('João');
  caixa.adicionarItem(123, 2);
  caixa.adicionarItem(456, 1);
  caixa.calcularValorTotal(); 
  caixa.fecharConta(30); 
  caixa.calcularValorTotal(); 
  