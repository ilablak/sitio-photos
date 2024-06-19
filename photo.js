document.addEventListener("DOMContentLoaded", () => {
const animales = document.getElementById("animales");
const boxeadores = document.getElementById("boxeadores");
const motos = document.getElementById("motos");


//funccion para ocultar todas las galerias
function ocultarTodasLasGalerias() {
   animales.style.display = 'none';
   boxeadores.style.display = 'none';
   motos.style.display = 'none';

}
 //funcion para mostrar una galeria especifica
 function mostrarGaleria(galeria){
    ocultarTodasLasGalerias(); //....
    galeria.style.display = 'grid';//....

 }
 //anadir eventos de clic a los enlaces del menu
 document.getElementById("anim11").addEventListener("click",(event) =>{
    event.preventDefault();
    mostrarGaleria(animales);
 })

 document.getElementById("box").addEventListener("click",(event) =>{
    event.preventDefault();
    mostrarGaleria(boxeadores);
 })

 document.getElementById("motos11").addEventListener("click",(event) =>{
    event.preventDefault();
    mostrarGaleria(motos);
 })

ocultarTodasLasGalerias();

});