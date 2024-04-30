class CalcController {
    /*                  ----INÍCIO DO CONSTRUCTOR----
    no constructor, adicionamos todos os métodos que serão criados e personalizados 
    ao longo do código para que eles possam ser utilizados no projeto final*/
    
    constructor(){
        this._operation = [];
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
    
    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }
    
    clearEntry(){
        this._operation.pop(); // POP é utilizado para apagar o último item adicionado em um array
    }

    clearAll(){
        this._operation = []; // recebe o array vazio, pois sua função é apagar todas as informações
    }

    addOperation(value){
        this._operation.push(value); // o método PUSH é utilziado para adicionar mais itens ao array
    }

    setError(){
        this.displayCalc = "Error";
    }

    execBtn(){
        switch (value){
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;
            
            case 'soma':
                this.somar();
                break;
        
            case 'subtracao':
                this.subtrair();
                break;

            case 'multiplicacao':
                this.multiplicar();
                break;    
                
            case 'divisao':
                this.dividir();
                break;

            case 'porcento':
                this.porcentagem();
                break;

            case 'igual':
                this.igualdade();
                break;

            default:
                this.setError();
                break;
            
            case '0':
            case '1': 
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value)); // parseInt utilizado para transformar as strings dos cases em números 
                break;
        }
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g"); //seleciona todas as tags "g" dentro de buttons e parts no HTML
        
        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, "click drag", e => {
                let textBtn = btn.className.baseVal.replace("btn-", ""); //mudamos (replace) a informação padrão (baseVal) que aparece no console após o evento de click
            });                                                          
            
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });
        })
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
