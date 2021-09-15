var n1 = 90;
var n2 = 37;

if(n1 < n2){
    switch(n1)
    {
        case 1:
            if(n1 < 100){
                console.log("n1 es menor a 100");
            }else{
                switch(n2){
                    case 27:                        
                        console.log("n2 es 27");
                    break;
                    case 39:
                        console.log("n2 es 39");
                    break;
                }
            }
        break;
        case 2:
            console.log("n1 es igual a 2");
        break;
        case "Perro":
            console.log("Saca al perro");
        break;
        default:
            console.log("n1 no es igual a 1, 2 o perro");
        break;
    }
}else{
    console.log("n1 es mayor que n2"); 
}