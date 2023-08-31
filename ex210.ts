class Fibonacci {
    private memo: Map<number, number> = new Map<number, number>();

    fibonacciRecursivo(n: number): number {
        if (n <= 2) {
            return 1;
        }

        if (this.memo.has(n)) {
            return this.memo.get(n)!;
        }

        const resultado = this.fibonacciRecursivo(n - 1) + this.fibonacciRecursivo(n - 2);
        this.memo.set(n, resultado);
        return resultado;
    }

    fibonacciIterativo(n: number): number {
        if (n <= 2) {
            return 1;
        }

        let anteriorAnterior = 1;
        let anterior = 1;
        let atual = 0;

        for (let i = 3; i <= n; i++) {
            atual = anterior + anteriorAnterior;
            anteriorAnterior = anterior;
            anterior = atual;
        }

        return atual;
    }
}

const fibonacci = new Fibonacci();

console.log("Calculando termos usando abordagem recursiva:");
console.log(fibonacci.fibonacciRecursivo(6));
console.log(fibonacci.fibonacciRecursivo(10));

console.log("Calculando termos usando abordagem iterativa:");
console.log(fibonacci.fibonacciIterativo(6));
console.log(fibonacci.fibonacciIterativo(10));
