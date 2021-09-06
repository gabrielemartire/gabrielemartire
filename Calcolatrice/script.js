    let valPrec = 0 /* numero precedente */
    let buffer = "0" /* numero ora sul dispaly */
    let mathOper = '?'; /* tengo memorizzata l'operazione mentre inserisco il numero successivo */
    const displayNumbres = document.querySelector('.display');
    const operationInfo = document.querySelector('.operationInfo');
    console.log('buffer before if: '+buffer)
    
    document.querySelector('.container').addEventListener('click', function(theClicked) {
       
        /* nel documento, alla sezione di classe .container, all'evento 'click' il pulsante dell'evento */
        buttonClick(theClicked.target.innerText);
        /* Evento buttonClick*/
    })

    function buttonClick(value) 
    { /* Function call  */    
        switch (value) {
            case 'AC': /*AC*/
                buffer = '0'
                valPrec = 0
                mathOper = ''
                break;
            case '←': /*←*/
                console.log('← functionality is still WORK IN POROGRESS')
                alert('← still WORK IN POROGRESS')
                break;
            case '÷': /*÷*/
                mathOper = '/'
                valPrec = buffer
                buffer = "0"
                break;
            case 'x': /*x*/
                mathOper = '*'
                valPrec = buffer
                buffer = '0'
                break;
            case '-': /*-*/
                mathOper = '-'
                valPrec = buffer
                buffer = '0'
                break;
            case '+': /*+*/
                mathOper = '+'
                valPrec = buffer
                buffer = '0'
                break;
            case '=': /* = elabora il calcolo */ 
                switch (mathOper) {
                    case '/': /*÷*/
                        buffer = buffer / valPrec  
                        /* = Integer.valueOf(numero) */
                        break;
                    case '*':
                        buffer = valPrec * buffer
                        /* = Integer.valueOf(numero) */
                        break;
                    case '-':
                        buffer = valPrec - buffer 
                        /* = Integer.valueOf(numero) */
                        break;
                    case '+':
                        buffer = parseInt(valPrec) + parseInt(buffer) 
                        /* = Integer.valueOf(numero) */
                        break;
                }    
                displayNumbres.innerText = buffer
                break;
            default: /* caso in cui inserisco un numero */ 
                if (buffer === "0")
                {
                    buffer = value
                }
                else{
                    buffer = buffer + value;
                }
        }

    /* console.log('hai premuto '+theClicked.target.innerText+'; oper= '+mathOper)
    console.log('buffer after if: '+buffer)
    console.log('operazione: '+valPrec+mathOper+buffer)
    console.log('type of mathOper '+typeof mathOper )*/  
    displayNumbres.innerText = buffer
    operationInfo.innerText = mathOper
    }
/* document.querySelector('.container').addEventListener('click', function(theClicked) {
/* nel documento, alla sezione di classe .container, all'evento 'click' il pulsante dell'evento 
displayNumbres.innerText =  theClicked.target.innerText  
valPrec = theClicked.target.innerText
console.log(`You clicked on button ${valPrec}`); 
/* il pulsante.target che ha premuto, prendi l'info richiesta */

