"use strict";
class Salario {
    constructor(nome, cargo, bruto) {
        this.nome = nome;
        this.cargo = cargo;
        this.bruto = bruto;
    }
    liquido(INSS, Imposto) {
        let valorInss = (this.bruto / 100) * INSS;
        let valorImposto = (this.bruto / 100) * Imposto;
        let saladoLiquido = (this.bruto - valorInss) - valorImposto;
        return "olá " + this.nome + " seu salário bruto é R$" + this.bruto + "trabalhando no setor " + this.cargo + "mas o seu salário líquido é  sera de R$" + saladoLiquido + " tenho o desconto INSS de R$" + valorInss + "";
    }
    aumento(aumento) {
        let valorAumento = (this.bruto / 100) * aumento;
        let salarioFinal = valorAumento + this.bruto;
        this.bruto = valorAumento;
        return "você recebeu um aumento de R$" + valorAumento + " com o seu salário líquido final será de R$" + salarioFinal;
    }
    apresentarFinal() {
        return "olá " + this.nome + " trabalhando no cargo de " + this.cargo + " o seu salario líquido é de R$" + this.bruto;
    }
}
let trabalhandor1 = new Salario("Ana silva", "Analista de vendas", 3000);
console.log(trabalhandor1.liquido(11, 7.5));
console.log(trabalhandor1.aumento(10));
console.log(trabalhandor1.apresentarFinal());
let trabalhandor2 = new Salario("Ana silva", "Analista de vendas", 1500);
console.log(trabalhandor2.liquido(11, 7.5));
console.log(trabalhandor2.aumento(10));
console.log(trabalhandor2.apresentarFinal());
