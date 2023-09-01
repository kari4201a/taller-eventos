document.getElementById("boton").addEventListener("click",(event)=>
{
    event.stopPropagation();
    alert("Hola!");
});

document.getElementById("botonDiv").addEventListener("click", () => {
    alert("Hola, Soy el Div");
});
