
function encriptar () {

    let texto = document.getElementById("texto").value; 


    let texoCifrado = texto

        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */


    if (document.getElementById("texto").value.length !=0) {

        document.getElementById("texto").value = texoCifrado;

        document.getElementById("titulo-mensaje").textContent = "Texto encriptado con exito";
    
        document.getElementById.textContent = ""; 

    
    }

}

function desencriptar () {

    let texto = document.getElementById("texto").value; 

    let texoCifrado = texto

        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");


    if (document.getElementById("texto").value.length !=0) {

        document.getElementById("texto").value = texoCifrado;
    
        document.getElementById("titulo-mensaje").textContent = "Texto desencriptado con exito";
        
        document.getElementById.textContent = ""; 
    ;
        
    }
}

