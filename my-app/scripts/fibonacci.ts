import { config } from "../config";

const calculateFibonacci = async () => {
    const _field : HTMLInputElement = document.getElementById('fibonaccinumber') as HTMLInputElement;
    const _button : HTMLButtonElement  = document.getElementById('calculatebtn') as HTMLButtonElement;
    const _fibonacci_result : HTMLElement = document.getElementById('fibonacci_result') as HTMLElement;
    
    _button.textContent = "Calculating";
    _button.disabled = true;

    try{
        if( _field.value !== "" ){
            const fibonacciNumber = await getFibonacciNumber( Number( _field.value ) );
            if( fibonacciNumber > 0 ){
                _fibonacci_result.innerHTML = fibonacciNumber.toString();
            }
        }
        
    }catch( error ){   
        console.log("No se pudo obtener el numbero");     
    }

    _button.textContent = "Calculate";
    _button.disabled = false;
}

const getFibonacciNumber = async ( fibonacciNumber : number ) : Promise<number> => {
    const response = await fetch( `${ config.api_host }/${config.api_endpoint}/${ fibonacciNumber }`, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
    });

    const data = await response.json();
    if ( data.error != "") {
        return -1;
    }

    console.log( data.body );
    return Number( data.body );
}

export {
    calculateFibonacci
}