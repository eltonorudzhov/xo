import {Inf} from './inf.js'
export function clean(){
    let fields = '00,01,02,10,11,12,20,21,22'.split(',');
    for(i = 0; i < fields.length; i ++)
    document.getElementById(fields[i]).innerHTML = '-';
    Inf.flag=0;
    Inf.value=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
    Inf.count = 0;
}