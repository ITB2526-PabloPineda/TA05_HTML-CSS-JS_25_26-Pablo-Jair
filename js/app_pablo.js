//Menu lateral
let menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(let x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}



let bases = document.getElementById("bases");
crearBarra(bases);

let redes = document.getElementById("redes");
crearBarra(redes);

let sistema = document.getElementById("sistema");
crearBarra(sistema);


let contadores = [-1,-1,-1];

let entro = false;


function efectoHabilidades(){
    const habilidades = document.getElementById("habilidades");
    const distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        
        const intervalBases = setInterval(function(){
            pintarBarra(bases, 17, 1, intervalBases);
        },100);

        const intervalRedes = setInterval(function(){
            pintarBarra(redes, 10, 2, intervalRedes);
        },100);

        const intervalSistema = setInterval(function(){
            pintarBarra(sistema, 9, 0, intervalSistema);
        },100);

        
    }
}


function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#6366f1";
    }else{
        clearInterval(interval)
    }
}


window.onscroll = function(){
    efectoHabilidades();
}

