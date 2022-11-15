class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldo: number){
        if(saldo < 0){
            throw new Error("Saldo negativo.");
            
        }
        this._numero = numero;
        this._saldo = saldo;
    }

    get numero(): string {
        return this._numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    public sacar(valor: number): void {
        if(valor > this._saldo){
            throw new Error('Saldo insuficiente.');
        }else if(valor < 0){
            throw new Error("Valor negativo.");
        }
        this._saldo = this._saldo - valor;
    }

    public depositar(valor: number): void {
        if(valor < 0){
            throw new Error("Valor negativo.");
        }
		this._saldo = this._saldo + valor;
	}

    public transferir(contaDestino: Conta, valor: number){
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

export { Conta };