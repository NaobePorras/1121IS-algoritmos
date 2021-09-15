//              &&  //

var n1 = 5;
var n2 = 10;

if(n1 < n2){
    switch(n1)
    {
        case 1:
            if(n1 < 15){
                console.log("n1 es menor a 15");
            }else{
                switch(n2){
                    case 20:                        
                        console.log("n2 es 20");
                    break;
                    case 30:
                        console.log("n2 es 30");
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