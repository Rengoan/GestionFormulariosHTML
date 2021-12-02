
function validarForm(formulario){

    if (user_name === "") {
        alert("Debes escribir el nombre de usuario");
        return false;
    }
    var password = formulario.password;

    if (password.value === "" || password.value.length < 6 ) {
        
        alert("Debes escribir un password de al menos 6 caracteres");
        return false;
    }
    
    
    var tecnologias = formulario.tecnologia;
    var checkSeleccionado = false;
    
    for(var i = 0; i<tecnologias.length; i++){
        if(tecnologias[i].checked){
            checkSeleccionado = true;
        }
        if(!checkSeleccionado){
            alert("Debes seleccionar una tecnologia");
            return false;
        }
    }
    
    var generos = formulario.genero;
    var radio = false;
    
    for(var i = 0; i<genero.length; i++){
        if(genero[i].checked){
            radio = true;
        }
        if(!radio){
            alert("Debes seleccionar un genero");
            return false;
        }
    }
    
    var profesiones = formulario.profesion;
    var radio = false;
    
    for(var i = 0; i<genero.length; i++){
        if(genero[i].checked){
            radio = true;
        }
        if(!radio){
            alert("Debes seleccionar un genero");
            return false;
        }
    }
    
            
}


