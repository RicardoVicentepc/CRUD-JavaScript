const modalEditar = document.getElementById("modal");
const modalcadastrar = document.getElementById("modalcadastrar");
const table = document.getElementById("table");
const cadastrar = document.getElementById("cadastrar");

function modalSpawn(value){
    if(value == 1){
        modalEditar.style.display = "grid";
        table.style.display = "none";
        cadastrar.style.display = "none";
    }else if(value == 0){
        modalEditar.style.display = "none";
        modalcadastrar.style.display= "none"
        table.style.display = "inline";
        cadastrar.style.display = "inline";
    }else if(value == -0.2){
        modalcadastrar.style.display = "grid";
        table.style.display = "none";
        cadastrar.style.display = "none";
        
        
    }
    return true;
}


