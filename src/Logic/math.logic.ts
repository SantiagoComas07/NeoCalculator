


 class MathLogic{
    addition(a:number,b:number):number{
        return a + b;
    }
    subtraction(a:number,b:number){
        return a - b;
    }
    multiplication(a:number, b:number) {
        return a * b;
    }
    division(a:number, b:number): (number | string) {
        if(String(b) === '0'){
            return 'IND';
        }
        return a / b;
    }
}

export default MathLogic;