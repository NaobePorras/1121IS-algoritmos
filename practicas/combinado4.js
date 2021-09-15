var n1 = 500;
var n2 = 187;

if(n1 < n2){
    switch(n1)
    {
        case 1:
            if(n1 < 150){
                console.log("n1 es menor a 150");
            }else{
                switch(n2){
                    case 800:                        
                        console.log("n2 es 800");
                    break;
                    case 300:
                        console.log("n2 es 300");
                    break;
                }
            }
        break;
        case 2:
            console.log("n1 es igual a 2");
        break;
        case "comida":
            console.log("Dame comida");
        break;
        default:
            console.log("n1 no es igual a 1, 2 o comida");
        break;
    }
}else{
    console.log("n1 es mayor que n2"); 
}