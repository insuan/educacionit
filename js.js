// document.addEventListener("DOMContentLoaded", () =>{

//     const abrirBtn = document.querySelector("#fullscreen");
//     const salirBtn = document.querySelector("#resize");

//     abrirBtn.addEventListener("click", pantallacompleta);
//     salirBtn.addEventListener("click", salirpantallacompleta)

//     function pantallacompleta(){
//         document.documentElement.requestFullscreen();
//     }

//     function salirpantallacompleta(){
//         document.exitFullscreen();
//     }

//     console.log("pagina cargada");
//     titulo = document.querySelector(".titulo");

//     titulo.textContent = "Despedida";
//     titulo.style.color = "red";

// });

document.addEventListener("DOMContentLoaded", () =>{
    console.log("Documento cargado");

    const boton = document.querySelector("#fullscreen");

    boton.addEventListener("click", obtenerDatos);

    function obtenerDatos(){

        fetch("cosas.txt")
            .then(respuesta =>{
                return respuesta.text();
            })
            .then(datos => {
                document.write(datos);
            })
    }
})