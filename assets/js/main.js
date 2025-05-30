const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');
const icono = document.getElementById('icono-menu');

toggle.addEventListener('click', () => {

    menu.classList.toggle('show');

    // Alternar entre fa-bars y fa-xmark
    if(icono.classList.contains('fa-bars')) 
    {
        icono.classList.remove('fa-bars');
        icono.classList.add('fa-xmark');
    } 
    else 
    {
        icono.classList.remove('fa-xmark');
        icono.classList.add('fa-bars');
    }    
});