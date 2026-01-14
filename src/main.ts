import './styles/calculator.style.css'
import {calculatorService} from './service/calculator.service.ts'


// Dark mode function

const html = document.documentElement;
const toggle = document.getElementById('theme-toggle');

toggle?.addEventListener('click', ()=>{
    const currentTheme = html.getAttribute('data-theme');

    if(currentTheme ==='dark'){
        html.setAttribute('data-theme', 'light');
    }else{
        html.setAttribute('data-theme', 'dark');
    }
});

//  Calculator service (functions, DOM)
calculatorService();

