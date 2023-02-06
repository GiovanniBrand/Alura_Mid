
const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElement){
    document.querySelector(idElement).play()
}

for(let i = 0; i < listaDeTeclas.length; i++){
    
    const tecla = listaDeTeclas[i];
    const elemento = tecla.classList[1]

    const id = `#som_${elemento}`
    
    tecla.onclick = function (){
        tocaSom(id);
    }

}

