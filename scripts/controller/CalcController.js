class CalcController {
    /*                  ----INÍCIO DO CONSTRUCTOR----
    no constructor, adicionamos todos os métodos que serão criados e personalizados 
    ao longo do código para que eles possam ser utilizados no projeto final*/
    
    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display"); // a variável foi definida para podermos manipular esses elementos (DOM)
        this._dateEl = document.querySelector("#data"); // a variável foi definida para podermos manipular esses elementos (DOM)
        this._timeEl = document.querySelector("#hora"); // a variável foi definida para podermos manipular esses elementos (DOM)
        this._currentDate;
        this.initialize(); 
        this.initButtonsEvents();
    }
    //                    ----FIM DO CONSTRUCTOR---- 
    
    initialize(){
       this.setDisplayDateTime();
        
       setInterval(()=>{
        this.setDisplayDateTime();
       }, 1000); //modelo de arrow function
    }
    
    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g"); //seleciona todas as tags "g" dentro de buttons e parts
        
        buttons.addEventListener('click', acao=>{
            
        });
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
