let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

/*
//Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distanciaSkills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("laravel");
        habilidades[4].classList.add("mysql");
        habilidades[5].classList.add("csharp");
        habilidades[6].classList.add("wordpress");
        habilidades[7].classList.add("adobepremierepro");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajoenequipo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("dedicacion");
        habilidades[12].classList.add("disciplina");
        habilidades[13].classList.add("aprendizaje");
    }
}

//Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}
*/