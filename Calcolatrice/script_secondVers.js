  /*  let valPrec = 0  numero precedente 
    let buffer = "0" /* numero ora sul dispaly 
    let mathOper = null /* tengo memorizzata l'operazione mentre inserisco il numero successivo 
    const displayNumbres = document.querySelector('.display')
    const operationInfo = document.querySelector('.operationInfo')
    console.log('buffer before if: '+buffer)
    
    document.querySelector('.container').addEventListener('click', function(theClicked) {
        buttonClick(theClicked.target.innerText);
    })

    function buttonClick(value) 
    {    
        if (isNaN(parseInt(value))) {
            gestisciSimbolo(value)
        } else {
            gestisciNumero(value)
        }
        displayNumbres.innerText = buffer
    }

    function gestisciSimbolo(value) {
        switch (value) {
            case 'AC': 
                buffer = '0'
                valPrec = 0
                mathOper = null
                break;
            case '=': 
                if (mathOper === null)
                    return;
                      
                switch (value) {
                    case '/': 
                        buffer = buffer / valPrec  
                        console.log('>3 risultato: '+buffer)
                        break;
                    case '*':
                        console.log('valPrec '+typeof valPrec+'; buffer'+typeof buffer)
                        valPrec = valPrec * buffer
                        buffer = valPrec
                        break;
                    case '-':
                        buffer = valPrec - buffer 
                        break;
                    case '+':
                        buffer = valPrec + buffer 
                        break;
                    case '←': 
                        console.log('← functionality is still WORK IN POROGRESS')
                        break;
            case '÷': 
                mathOper = '/'
                valPrec = buffer
                buffer = "0"
                break;
            case 'x': 
                mathOper = '*'
                valPrec = buffer
                buffer = '0'
                break;
            case '-': 
                mathOper = '-'
                valPrec = buffer
                buffer = '0'
                break;
            case '+': 
                mathOper = '+'
                valPrec = buffer
                buffer = '0'
                break;
            
    }

    function gestisciNumero(value) {
        if (buffer === "0")
            {
                buffer = value
                console.log(value)
            } else{
                buffer = buffer + value
                console.log(buffer)
            }
    }


/*
        
                displayNumbres.innerText = buffer
            default: /* caso in cui inserisco un numero 
                
        }
    console.log('>1 buffer:'+buffer+' mathOper:'+mathOper+' valPrec'+valPrec)
    /* console.log('hai premuto '+theClicked.target.innerText+'; oper= '+mathOper)
    console.log('buffer after if: '+buffer)
    console.log('operazione: '+valPrec+mathOper+buffer)
    console.log('type of mathOper '+typeof mathOper ) 
    displayNumbres.innerText = buffer
    operationInfo.innerText = mathOper
    console.log('>2 valPrec='+valPrec+' buffer='+buffer+' mathOper='+mathOper+'')
    }
/* document.querySelector('.container').addEventListener('click', function(theClicked) {
/* nel documento, alla sezione di classe .container, all'evento 'click' il pulsante dell'evento 
displayNumbres.innerText =  theClicked.target.innerText  
valPrec = theClicked.target.innerText
console.log(`You clicked on button ${valPrec}`); 
/* il pulsante.target che ha premuto, prendi l'info richiesta */

