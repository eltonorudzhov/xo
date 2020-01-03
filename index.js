let flag=0;
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
        if (flag==0){
           el.innerHTML="x" ;
         
            value[i][j]=1;
            flag+=1;
            if (checkWin()){
                alert ("WIN X"); 
            }   
        }
        else{
            el.innerHTML="0" ;
            value[i][j]=0;
            flag-=1;
            if (checkWin()){
                alert ("WIN 0"); 
            }
        }
    }      
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