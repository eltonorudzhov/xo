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
    id = ""+i+j;
    let el = document.getElementById(id);
    if ((value[i][j]==-1)){
        if (flag==0){
           el.outerHTML='<td id='+id+'>x</td>' ;
            value[i][j]=1;
            flag+=1;
            if (checkWin()){
                alert ("WIN X"); 
            }
            
        }
        else{
            el.outerHTML='<td id='+id+'>0</td>' ;
            value[i][j]=0;
            flag-=1;
            if (checkWin()){
                alert ("WIN 0"); 
            }
        }
    }      
}

function checkWin(){
    let flg=0;
    // проверка 
    for (let i=0; i<3; i++){
        if (value[i][0]!=-1){
            for (let j=1; j<3; j++){
                if (value[i][j-1]!=value[i][j]){
                    continue;
                }
                if (j==2){     
                    flg=1;
                }
            }
        }
    }
    if (flg==1)
        return true
    else
        return false
}