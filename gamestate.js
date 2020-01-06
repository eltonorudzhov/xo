import {clean} from './clean.js'
export function updTabl(win){
    clean()
    if (win==1)
    document.getElementById('first').innerHTML= +first.textContent+1;
    else
    document.getElementById('second').innerHTML= +secont.textContent+1;
}