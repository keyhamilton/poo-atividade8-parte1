import { Banco } from "./banco";
import { Conta } from "./conta";


// testes da questão 4
let conta1: Conta = new Conta('1', 1000);
let conta2: Conta = new Conta('2', 2000);

// conta1.transferir(conta2, 2000);

// testes da questão 5

let banco: Banco = new Banco();
banco.inserir(conta1);
banco.inserir(conta2);

// banco.transferir('1', '2', 2000);

// testes da questão 6

let conta3: Conta = new Conta('3', 3000);
// let conta4: Conta = new Conta('4', -1000);
// conta3.sacar(-100);
// conta3.depositar(-100);
conta1.transferir(conta2, -100);