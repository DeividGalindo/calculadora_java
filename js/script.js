class Calculator{
    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }
        //metodo de adição
        sum(n1, n2){
            return n1+n2;
        }
        //metodo de subtração
        sub(n1, n2){
            return n1-n2;
        }
        //metodo de divisão
        division(n1, n2){
            return n1/n2;
        }

        multiplication(n1, n2){
            return n1*n2;
        }

        clearValue(){
            this.upperValue.textContent = '0';
            this.resultValue.textContent = '0';
            this.reset = false;
        }

        btnPress = (event) =>{
            const input = event.target.textContent;
            let currentExpression = this.upperValue.textContent;

            if(input === 'AC'){
                this.clearValue();
                return;
            }
        }

}


//criando o objeto
const calc = new Calculator;
document.querySelector('#upper-number').textContent = '5 x 6 = ';

//start nos btns
let buttons = document.querySelectorAll('.btn');
// 
// console.log('teste');

// let resultado = calc.sum(1,2);
// console.log(resultado);

// resultado = calc.sub(5,4);
// console.log(resultado);

// resultado = calc.division(10,2);
// console.log(resultado);

// resultado = calc.multiplication(4,2);
// console.log(resultado);
// 
for(let i = 0; buttons.length > i; i++){
    buttons[i].addEventListener('click', calc.btnPress);
}