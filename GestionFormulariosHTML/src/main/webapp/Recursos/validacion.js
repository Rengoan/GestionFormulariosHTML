
function validarForm(formulario){

    var usuarios= formulario.usuario;
    if (usuarios === "" || usuarios.value === "Debes escribir el nombre de usuario") {
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
    }
    if(!checkSeleccionado){
            alert("Debes seleccionar una tecnologia");
            return false;
        }
    
    
    var generos = formulario.genero;
    var radioSeleccionado = false;
    for(var i = 0; i<generos.length; i++){
        if(generos[i].checked){
            radioSeleccionado = true;
        }
    }
    if(!radioSeleccionado){
            alert("Debes seleccionar un genero");
            return false;
        }
        
        
    var profesiones = formulario.profesion;
    if(profesiones.value <1 || profesiones.value === null){
        alert("Debe seleccionar una profesion");
        return false;
    }
    
    
    /*Si hemos llegado a este punto y no hemos devuelto ningun false todo ha ido correcto*/
    
    alert("Formulario validado con exite, enviando datos al servidor.");
    return true;
    
            
}


