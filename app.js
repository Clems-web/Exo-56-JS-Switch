let a = prompt("votre matériel ?");
let b = "ce matériel est inconnu au bataillon";
switch (a) {
    case "souris" :
        alert("j'utilise une " + a);
            break;
    case "clavier" :
        alert("j'utilise un " + a);
            break;
    case "ordinateur" :
        alert("j'utilise un " + a);
            break;
    case "tapis" :
        alert("j'utilise un " + a);
            break;
    case "imprimante" :
        alert("j'utilise une " + a);
            break;
    case "ondulateur" :
        alert("j'utilise un " + a);
            break;
    default :
        alert(b);
}