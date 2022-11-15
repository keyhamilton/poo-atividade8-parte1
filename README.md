# POO-ATIVIDADE8-PARTE1

## QUESTÕES:

1) Enumere os 3 tipos mais comuns de tratamento de erros e exemplifique com
códigos seus ou pesquisados na internet.
    R: 1- Desconsiderar a operação; 2- Exibir mensagem de erro; 3- Retornar um código de erro.

2) Explique por que cada um dos 3 métodos acima possui limitações de uso.
    R: A abordagem de desconsiderar a operação é problemática porque não existe nenhum sinal de que a operação foi realizada, já que nada acontece de visível caso a operação não seja realizada.
    Exibir mensagem de erro é uma opção melhor que apenas desconsiderar a operação em caso de erro, mas porém, temos o problema de ficarmos limitados à interface texto, o que não é visualizada em uma interface gráfica, por exemplo.
    Retornar um código de erro cria muitas complicações a medida que a quantidade de erros aumenta. Outro problema associado a esse método é o uso de flags, considerado má prática, ou ainda a possibilidade de confundir um valor calculado em uma operação com o código de erro.

3) Com o código repassado, implemente o como nos slides o lançamento da exceção
no método sacar e realize um teste para saques que deixariam o saldo negativo.
    R: Vide código no arquivo conta.ts.

4) Crie duas contas e teste o método transferir de modo que a conta a ser debitada
não possua saldo suficiente. Explique o que ocorreu.
    R: Aparece no console a seguinte mensagem: 
    /home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:17
            throw new Error('Saldo insuficiente.');
            ^

    Error: Saldo insuficiente.
        at Conta.sacar (/home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:17:19)
        at Conta.transferir (/home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:25:14)
        at Object.<anonymous> (/home/hamdev/Documentos/poo/atividade8-parte1/build/app.js:6:8)
        at Module._compile (node:internal/modules/cjs/loader:1105:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
        at Module.load (node:internal/modules/cjs/loader:981:32)
        at Function.Module._load (node:internal/modules/cjs/loader:822:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
        at node:internal/main/run_main_module:17:47

5) Instancie uma classe banco e crie duas contas. Adicione-as à instancia do banco.
Chame o método transferir novamente passando um valor que lance a exceção na
classe conta. Você considera que o lançamento da exceção foi “propagado” para o
método conta.transferir(), banco.transferir() e o método transferir do script app?
Como você avalia a confiabilidade dessa implementação.
    R: Podemos dizer que houve propagação já que o erro é lançado somente no método da classe conta, contudo, a indicação de erro aponta também para todas classes que, de alguma forma, fazem uso do método sacar.

    A seguinte mensagem de erro é mostrada no console:

    /home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:17
            throw new Error('Saldo insuficiente.');
            ^

    Error: Saldo insuficiente.
        at Conta.sacar (/home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:17:19)
        at Conta.transferir (/home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:25:14)
        at Banco.transferir (/home/hamdev/Documentos/poo/atividade8-parte1/build/banco.js:28:25)
        at Object.<anonymous> (/home/hamdev/Documentos/poo/atividade8-parte1/build/app.js:13:7)
        at Module._compile (node:internal/modules/cjs/loader:1105:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
        at Module.load (node:internal/modules/cjs/loader:981:32)
        at Function.Module._load (node:internal/modules/cjs/loader:822:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
        at node:internal/main/run_main_module:17:47

6) Lance um erro no construtor e nos métodos sacar e depositar para que, caso o
valor passado seja menor que zero uma exceção seja lançada. Reexecute os
testes da questão anterior com valores que “passem” pelo saldo insuficiente, e
teste também a chamada dos métodos passando como parâmetro valores < 0

    R: As mensagens de erro abaixo demonstram o correto lançamento de erros nos locais esperados do código.

    /home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:7
            throw new Error("Saldo negativo.");
            ^

    Error: Saldo negativo.
        at new Conta (/home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:7:19)
        at Object.<anonymous> (/home/hamdev/Documentos/poo/atividade8-parte1/build/app.js:16:14)
        at Module._compile (node:internal/modules/cjs/loader:1105:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
        at Module.load (node:internal/modules/cjs/loader:981:32)
        at Function.Module._load (node:internal/modules/cjs/loader:822:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
        at node:internal/main/run_main_module:17:47
    
    hamdev@Dell-inspiron153567:~/Documentos/poo/atividade8-parte1/build$ node app.js 
    /home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:29
                throw new Error("Valor negativo.");
                ^

    Error: Valor negativo.
        at Conta.depositar (/home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:29:19)
        at Object.<anonymous> (/home/hamdev/Documentos/poo/atividade8-parte1/build/app.js:18:8)
        at Module._compile (node:internal/modules/cjs/loader:1105:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
        at Module.load (node:internal/modules/cjs/loader:981:32)
        at Function.Module._load (node:internal/modules/cjs/loader:822:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
        at node:internal/main/run_main_module:17:47
    hamdev@Dell-inspiron153567:~/Documentos/poo/atividade8-parte1/build$ node app.js 
    /home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:23
                throw new Error("Valor negativo.");
                ^

    Error: Valor negativo.
        at Conta.sacar (/home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:23:19)
        at Conta.transferir (/home/hamdev/Documentos/poo/atividade8-parte1/build/conta.js:34:14)
        at Object.<anonymous> (/home/hamdev/Documentos/poo/atividade8-parte1/build/app.js:19:8)
        at Module._compile (node:internal/modules/cjs/loader:1105:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
        at Module.load (node:internal/modules/cjs/loader:981:32)
        at Function.Module._load (node:internal/modules/cjs/loader:822:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
        at node:internal/main/run_main_module:17:47
    hamdev@Dell-inspiron153567:~/Documentos/poo/atividade8-parte1/build$ 