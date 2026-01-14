

// DOM
export const calculatorService = () =>{



const screenDom = document.getElementById('screen');
const buttons = document.querySelectorAll('.button');

console.log(screenDom)
buttons.forEach((button)=>{
    console.log( 'id:', button.id);
    button.addEventListener(('click'), (e)=>{
        console.log(e)

        // Condition delete
        const contentButton = button.textContent;
        //Test
        console.log(contentButton);



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
            // Equal condition
            if(button.id === 'equal'){
                try {
                    screenDom.textContent = eval(screenDom.textContent);

                }catch(error){
                    console.error(error);
                    screenDom.textContent = 'ERROR';

                }
            }

            if(screenDom.textContent === '0' || screenDom.textContent === 'ERROR'){
                screenDom.textContent = contentButton;
            }else{
                screenDom.textContent += contentButton;
            }




        }

    })

})
}