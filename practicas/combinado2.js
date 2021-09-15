var n1 = 40;
var n2 = 50;

if(n1 < n2){
    switch(n1)
    {
        case 1:
            if(n1 < 40){
                console.log("n1 es menor a 40");
            }else{
                switch(n2){
                    case 100:                        
                        console.log("n2 es 100");
                    break;
                    case 30:
                        console.log("n2 es 30");
                    break;
                }
            }
        break;
        case 3:
            console.log("n1 es igual a 3");
        break;
        case "gato":
        console.log("Saca al gato");
        break;
        default:
            console.log("n1 no es igual a 1, 2 o gato");
        break;
    }
}else{
    console.log("n1 es mayor que n2");
}    
