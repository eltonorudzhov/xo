class Win {
  checkWin(){
    if (diagWin()||horizWin()||vertWin())
        return true
    else
        return false
}
    diagWin(){
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
    vertWin(){
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

    horizWin(){
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
}
export default checkWin();