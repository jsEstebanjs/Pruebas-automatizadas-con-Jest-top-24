exports.createRobot = (string,x,y,orientation)=>{
    let indexX= x;
    let indexY = y;
    if(indexX > 10 || indexX<0 || indexY >10 || indexY<0){
        return `the values entered are not valid`
    }
    for(let i = 0;i<string.length;i++){
        if(string[i] === "R" && orientation < 270){
            orientation+=90;
        }else if(string[i] === "R" && orientation>=270){
            orientation = 0;
        }

        if(string[i] === "L" && orientation === 0){
            orientation = 270;
        }else if(string[i] === "L" && orientation > 0){
            orientation-=90;
        }

        if(string[i] === "A"){
            if(orientation === 0){
                indexY++
            }
            if(orientation === 90){
                indexX++
            }
            if(orientation=== 180){
                indexY--
            }
            if(orientation === 270){
                indexX--
            }
        }
        if(indexX > 10 || indexX<0 || indexY >10 || indexY<0){
            return `error over the limits`
        }
    }
    return [indexX,indexY]

}