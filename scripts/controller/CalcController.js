class CalcController {
    constructor(){
        this._displayCalcEl = document.querySelector("#display"); // a variável foi definida para podermos manipular esses elementos (DOM)
        this._dateEl = document.querySelector("#data"); // a variável foi definida para podermos manipular esses elementos (DOM)
        this._timeEl = document.querySelector("#hora"); // a variável foi definida para podermos manipular esses elementos (DOM)
        this._currentDate;
        this.initialize(); 
    }

    
    initialize(){
        this._dateEl.innerHTML = "01/04/2024";
        this._timeEl.innerHTML = "12:45"; 
        
    }
    
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(valor){
        this._currentDate = valor;
    }

    
}
