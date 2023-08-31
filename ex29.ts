class GeometricProgression {
    constructor(private initialTerm: number, private ratio: number) {}

    generateTerms(numTerms: number): number[] {
        const terms: number[] = [this.initialTerm];

        for (let i = 1; i < numTerms; i++) {
            const previousTerm = terms[i - 1];
            const currentTerm = previousTerm * this.ratio;
            terms.push(currentTerm);
        }

        return terms;
    }
}


const progression = new GeometricProgression(2, 3);


const first50Terms = progression.generateTerms(50);


console.log('Primeiros 50 termos da progressão geométrica:');
console.log(first50Terms.join(', '));
