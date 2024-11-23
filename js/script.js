//PRIMERO NOS TRAEMOS LOS IDS QUE TENEMOS EN EL INDEX PARA CAPTULARLOS
const contadorVisitas = document.getElementById("contadorVisitas");
const botonReset = document.getElementById("btnReestablecer");
//BOTON PARA RESTABLECER EL CONTADOR
botonReset.addEventListener("click", function () {
    localStorage.setItem("contador", 0);
    mostrarContador();
})

//CONTADOR PARA VISITAS
function guardarVisitas (){
    
    if (isNaN(localStorage.getItem("contador"))){
        localStorage.setItem("contador", 0)

    }else {
        let contador =
        parseFloat(localStorage.getItem("contador"));
        contador += 1;
        localStorage.setItem("contador", contador);

    }
    mostrarContador();
}

function mostrarContador(){
    const contador = localStorage.getItem("contador");
    contadorVisitas.textContent=contador;
}

guardarVisitas();