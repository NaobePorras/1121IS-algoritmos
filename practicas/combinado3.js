var n1 = 18;
var n2 = 17;

if(n1 > n2){
    switch(n1)
    {
        case 1:
            if(n1 < 50){
                console.log("n1 es menor a 50");
            }else{
                switch(n2){
                    case "profesor":                        
                        console.log("n2 es profesor");
                    break;
                    case "bueno":
                        console.log("n2 es bueno");
                    break;
                }
            }
        break;
        case 2:
            console.log("n1 es igual a 2");
        break;
        case "materia":
            console.log("pasa la materia");
        break;
        default:
            console.log("n1 no es igual a 1, 2 o materia");
        break;
    }
}else{
    console.log("n1 es menor que n2"); 
}