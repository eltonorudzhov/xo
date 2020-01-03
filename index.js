//import {updTabl} from './gamestate.js'

let flag=0;
let count = 0;
let value=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]

document.querySelector('table').onclick = (event) => {
    let cell = event.target;
    if (cell.tagName.toLowerCase() != 'td')
      return;
    let i = cell.parentNode.rowIndex;
    let j = cell.cellIndex;
    paint(i,j);
  console.log(i, j);
}

function paint(i,j){
   let id = ""+i+j;
   let el = document.getElementById(id);
    if ((value[i][j]==-1)){
        count +=1; 
        if (flag==0){
           el.innerHTML="x" ;
           
            value[i][j]=1;
            flag+=1;
            if (checkWin()){
                alert ("WIN X"); 
                updTabl(1)
                clean();
                return;
            }   
        }
        else{
            el.innerHTML="0" ;
            value[i][j]=0;
            flag-=1;
            if (checkWin()){
                alert ("WIN 0"); 
                updTabl(2)
                clean();
                return;
            }
        }
        if (count==9){
        alert ("NOBODY WIN OR EVERYONE WIN. FIGHT");
        clean();
        return;
        }

    }      
}
function clean(){
    let fields = '00,01,02,10,11,12,20,21,22'.split(',');
    for(i = 0; i < fields.length; i ++)
    document.getElementById(fields[i]).innerHTML = '-';
    flag=0;
    value=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
    count = 0;
}

function checkWin(){
    if (diagWin()||horizWin()||vertWin())
        return true
    else
        return false
}
function diagWin(){
    let flg1=1;
    let flg2=1;
    if (value[1][1]==-1)
        return false
    for (let i=1; i<3; i++){
        
        if (value[i][i]!=value[i-1][i-1])
            flg1=0;
        
        if (value[i][2-i]!=value[i-1][3-i])
            flg2=0;
    }
    if ((flg1==1)||(flg2==1))
        return true
    else
        return false
    
}
function vertWin(){
    // проверка по вертикали
    for (let j=0; j<3; j++){
        if (value[0][j]!=-1){
            for (let i=1; i<3; i++){
                if (value[i-1][j]!=value[i][j]){
                    break;
                }
                console.log("index"+i+j)
                if (i==2){     
                    return true;
                }
            }
        }
    }

    return false
}

function horizWin(){
    // проверка по горизонтали
    for (let i=0; i<3; i++){
        if (value[i][0]!=-1){
            for (let j=1; j<3; j++){
                if (value[i][j-1]!=value[i][j]){
                    break;
                }
                console.log("index"+i+j)
                if (j==2){     
                    return true;
                }
            }
        }
    }
    return false
}

function updTabl(win){
    if (win==1)
    document.getElementById('first').innerHTML= +first.textContent+1;
    else
    document.getElementById('second').innerHTML= +secont.textContent+1;
}