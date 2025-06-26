document.addEventListener('DOMContentLoaded',function()
{
    crearGaleria()
})
function crearGaleria()
{
    const Cantidad_Imagenes =16
    const galeria =document.querySelector('.galeria-imagenes')
    for(let i =1; i<=Cantidad_Imagenes; i++)
    {
        const imagen =document.createElement('IMG')
        imagen.src =  `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Galeria Imagen'

        //event handler
        imagen.onclick = function
        galeria.appendChild(imagen)
    }
}