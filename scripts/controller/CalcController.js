class CalcController {
    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display"); // a variável foi definida para podermos manipular esses elementos (DOM)
        this._dateEl = document.querySelector("#data"); // a variável foi definida para podermos manipular esses elementos (DOM)
        this._timeEl = document.querySelector("#hora"); // a variável foi definida para podermos manipular esses elementos (DOM)
        this._currentDate;
        this.initialize(); 
    }

    
    initialize(){
       this.setDisplayDateTime();
        
       setInterval(()=>{
        this.setDisplayDateTime();
       }, 1000);

    }
    
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    };

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }

    
}
