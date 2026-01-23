

// DOM
import MathLogic from "../Logic/math.logic.ts";

export const calculatorService = () =>{


    const mathLogic = new MathLogic();


const screenDom = document.getElementById('screen');
const buttons = document.querySelectorAll('.button');

console.log(screenDom)
buttons.forEach((button)=>{
    console.log( 'id:', button.id);
    button.addEventListener(('click'), ()=>{


        // Condition delete
        const contentButton = button.textContent;
        //Test
        // console.log(contentButton);



        // Clear condition
        if(screenDom instanceof HTMLDivElement) {
            if (button.id === 'clear') {

                screenDom.textContent = '0';
                return;
            }


            // Delete condition
            if(button.id === "delete"){
                if(screenDom.textContent.length === 1){
                    screenDom.textContent = '0';
                }else{
                    screenDom.textContent = screenDom.textContent.slice(0, -1);
                }
                return;

            }


            if(screenDom.textContent === '0' || screenDom.textContent === 'ERROR'){
                screenDom.textContent = contentButton;
            }else{
                    screenDom.textContent += contentButton;

            }



            // Equal condition
            if(button.id === 'equal'){
                try {

                        let data = screenDom.textContent;
                        data = data .replace(/x/g, '*').replace(/\s+/g, '').replace('=', '');
                        const operator = data.match(/[+\-=*/]/)?.[0];
                        if (!operator) return;
                        const [a, b] = data.split(operator);
                        if (!a || !b) {
                            screenDom.textContent = 'ERROR';
                            return;
                        }
                        let number1 = Number(a);
                        let number2 = Number(b);
                        let result;
                        // Operador (+,-,*,/)
                    switch (operator) {
                        case '+':
                            result = mathLogic.addition(number1, number2);
                            break;
                        case '-':
                            result = mathLogic.subtraction(number1, number2);
                            break;
                        case '*':
                            result = mathLogic.multiplication(number1, number2);
                            break;
                        case '/':
                            if (number2 === 0) throw new Error('Division by zero');
                            result = mathLogic.division(number1, number2);
                            break;
                    }
                    screenDom.textContent = String(result);

                }catch(error){
                    console.error(error);
                    screenDom.textContent = 'ERROR';

                }
            }

        }

    })

})
}