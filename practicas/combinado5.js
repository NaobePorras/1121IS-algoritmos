var n1 = 59;
var n2 = 70;

if(n1 < n2){
    switch(n1)
    {
        case 1:
            if(n1 < 999){
                console.log("n1 es menor a 999");
            }else{
                switch(n2){
                    case 80:                        
                        console.log("n2 es 80");
                    break;
                    case 38:
                        console.log("n2 es 38");
                    break;
                }
            }
        break;
        case 4:
            console.log("n1 es igual a 4");
        break;
        case "tarea":
            console.log("no entiendo la tarea");
        break;
        default:
            console.log("n1 no es igual a 1, 4 o tarea");
        break;
    }
}else{
    console.log("n1 es mayor que n2"); 
}