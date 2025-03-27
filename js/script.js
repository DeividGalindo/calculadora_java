class Calculator{

    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }

    // metodo de soma
    sum(n1, n2){
        return n1 + n2;
    }

    // metodo subtração
    subtraction(n1, n2){
        return n1 - n2;
    }
    // metodo divisão
    division(n1, n2){
        try { 
            if (n2===0){
                throw new Error('Divisão por zero');
            }
            return n1 / n2;
        } catch(error) {
            return `Erro: ${error.message}`;
        }
    }
    // metodo multiplicação
    multiplication(n1, n2){
        return n1 * n2;
    }

}

// criando objeto
const calc = new Calculator;

// start nos btns
let buttons = document.querySelectorAll('.btn');

console.log('teste');

// chamado metodo soma
let resultado = calc.sum(1,2);
console.log(resultado);

// chamado metodo subtração
resultado = calc.subtraction(2,1);
console.log(resultado)

// chamado metodo divisão
resultado = calc.division(4,2);
console.log(resultado);

// chamado metodo multiplicação
resultado = calc.multiplication(2,2)
console.log(resultado)

