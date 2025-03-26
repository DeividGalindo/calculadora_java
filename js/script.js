class Calculator{

    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }

    // metodo de soma
    sum(n1, n2){
        return parseFloat(n1) + parseFloat(n2)

    }

    resolution(){
        // nos jogamos para um array uma string
        let upperValueArray = (this.upperValue.textContent).split(" ");
        result = calc.sum(upperValueArray[i - 1], upperValueArray[i + 1]);
    }
}

// start nos btns
let buttons = document.querySelectorAll('.btn');

console.log('teste');