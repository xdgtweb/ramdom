/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// varibles a usar
var usuarioPreguntado;
var contraseñaPreguntada;
var usuarioGuardado = obtenerUsuario();
var contraseñaGuardada = obtenerContraseña();

orden();

function orden()
{

    // Obtenemos las variables guardadas en items de localStorage

    // Si el usuario GUARDADO NO es correcto (aunque no tenga nada)
    if (!(esUsuarioCorrecto(usuarioGuardado) && esContraseñaCorrecta(contraseñaGuardada)))
    {

//        console.log("Antes: \n" + usuarioGuardado + "\n" + contraseñaGuardada);
        //preguntamos al usuario y nos responde en esas variables
        usuarioPreguntado = preguntarUsuario();
        contraseñaPreguntada = preguntarContraseña();
        
        // Si el usuario PREGUNTADO es correcto
        if (esUsuarioCorrecto(usuarioPreguntado) && esContraseñaCorrecta(contraseñaPreguntada))
        {
//            console.log("dentro: "+esUsuarioCorrecto(usuarioPreguntado)+"   "+esContraseñaCorrecta(contraseñaPreguntada));
            guardarUsuarioContraseña(usuarioPreguntado, contraseñaPreguntada);
        }
        else // Entonces la funcion volvera a comenzar
        {
            orden();
        }
    }
    
//    usuarioGuardado = obtenerUsuario();
//    contraseñaGuardada = obtenerContraseña();
//
//    console.log("Despues: \n" + usuarioGuardado + "\n" + contraseñaGuardada);

}

function preguntarUsuario()
{
    let usuario = prompt("Introduce el Usuario").toString().toLocaleLowerCase().trim();
    
    return usuario;
}

function preguntarContraseña()
{
    let contraseña = parseInt(prompt("Introduce la Contraseña"));
    
    return contraseña;
}

function obtenerUsuario()
{
    var obtUsuario;
    
    var obtUsuario = localStorage.getItem("itemUsuario");
    
    return obtUsuario;
}

function obtenerContraseña()
{
    var obtContraseña;
    
    var obtContraseña = localStorage.getItem("itemContraseña");
    
    return obtContraseña;
}

function guardarUsuarioContraseña(pUsuario, pContraseña)
{
                
    localStorage.setItem("itemUsuario", pUsuario);
    localStorage.setItem("itemContraseña", pContraseña);
    
}

function esUsuarioCorrecto(pUsuarioIntrodCorrecto)
{
    var respuesta;
    
    if(pUsuarioIntrodCorrecto === "david")
    {
        respuesta = true;
    }
    else
    {
        respuesta = false;
    }
    
    return respuesta;
}

function esContraseñaCorrecta(pContraseñaIntrodCorrecta)
{
    var respuesta;
    
    if(pContraseñaIntrodCorrecta === "3067" || pContraseñaIntrodCorrecta === 3067)
    {
        respuesta = true;
    }
    else
    {
        respuesta = false;
    }
    
    return respuesta;
}
