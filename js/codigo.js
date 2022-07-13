window.addEventListener("load", inicio)


function inicio(){
    document.querySelector("#mnuIniciarSesion").addEventListener("click", mostrarLogin);
    document.querySelector("#mnuRegistrarse").addEventListener("click", mostrarRegistrarse);
    document.querySelector("#btnSoyPersona").addEventListener("click", mostrarRegistroPersona);
    document.querySelector("#btnSoyEmpresa").addEventListener("click", mostrarRegistroEmpresa);
    document.querySelector("#btnHacerLogin").addEventListener("click", hacerlogin);
    document.querySelector("#mnuCerrarSesionA").addEventListener("click", cerrarSesion);
    document.querySelector("#mnuCerrarSesionP").addEventListener("click", cerrarSesion);
    document.querySelector("#mnuCerrarSesionE").addEventListener("click", cerrarSesion);
    document.querySelector("#btnRegistroPersona").addEventListener("click", registrarNuevaPersona);
    document.querySelector("#btnRegistroEmpresa").addEventListener("click", registrarNuevaEmpresa);
    document.querySelector("#mnuRegistrarEnvio").addEventListener("click", mostrarRegistroEnvio);
    document.querySelector("#btnGuardarEnvio").addEventListener("click", altaEnvio);
    document.querySelector("#mnuHabDeshabEmpresa").addEventListener("click", mostrarHabilitarDeshabilitarEmpresa);
    document.querySelector("#txtbuscaEmpresa").addEventListener("keyup", crearTablaEmpresa);
    document.querySelector("#mnuCrearVehiculo").addEventListener("click", mostrarListaVehiculos);
    document.querySelector("#btnIngresarVehiculo").addEventListener("click", ingresarNuevoVehiculo);
    document.querySelector("#mnuListadoEnviosPersona").addEventListener("click", mostrarListaEnviosPersona);
    document.querySelector("#solicitudesEnvioPendientes").addEventListener("click", mostrarListadoEnviosPendientes);
    document.querySelector("#soliditudesTomadas").addEventListener("click", mostrarListadoEnviosTomados);
    document.querySelector("#mnuInfoEstadisticaAdmin").addEventListener("click", mostrarInfoEstadisticaAdmin);
    document.querySelector("#mnuInfoEstadisticaPers").addEventListener("click", mostrarInfoEstadisticaPers);
    document.querySelector("#mnuInfoEstadisticaEmp").addEventListener("click", mostrarInfoEstadisticaEmp);

    
    precargarDatos();
    ocultarTodo();
    mostrarBienvenida();
    agregarUsuarioAdministrador();
    agregarUsuarioPersona();
    agregarUsuarioEmpresa();
   
}

/*Con esta función se ocultan los elementos del HTML, usando sus id. 
Podemos mostrarlos, habilitandolos en otras funciones de acuerdo a la interacción del usuario.*/
function ocultarTodo(){
    document.querySelector("#navPrincipalAdministrador").style.display = "none";
    document.querySelector("#navPrincipalPersona").style.display = "none";
    document.querySelector("#navPrincipalEmpresa").style.display = "none";
    document.querySelector("#aux").style.display = "none";
    document.querySelector("#bienvenida").style.display = "none";
    document.querySelector("#login").style.display = "none";
    document.querySelector("#opcionRegistro").style.display = "none";
    document.querySelector("#registroPersona").style.display = "none";
    document.querySelector("#registroEmpresa").style.display = "none";
    document.querySelector("#altaEnvio").style.display = "none";
    document.querySelector("#buscadorEmpresa").style.display = "none";
    document.querySelector("#habilitarDeshabilitarEmpresa").style.display = "none";
    document.querySelector("#listaVehiculos").style.display = "none";
    document.querySelector("#listaEnvios").style.display = "none";
    document.querySelector("#solicitudEnvioPendiente").style.display = "none";
    document.querySelector("#solicitudEnviosTomados").style.display = "none";
    document.querySelector("#estadisticasAdmin").style.display = "none";
    document.querySelector("#estadisticasPersona").style.display = "none";
    document.querySelector("#estadisticasEmpresa").style.display = "none";


}
//FUNCIONES PARA MOSTRAR
function mostrarBienvenida(){
    ocultarTodo();
    document.querySelector("#aux").style.display = "block";
    document.querySelector("#bienvenida").style.display = "block";
}
function mostrarLogin (){
    ocultarTodo();
    document.querySelector("#login").style.display = "block";
}
function cerrarSesion(){  //CERRAR SESIÓN
    usuarioLogueado = null;
    ocultarTodo();
    mostrarBienvenida();
}
function mostrarRegistrarse (){
    ocultarTodo();
    document.querySelector("#opcionRegistro").style.display = "block";
}
function mostrarRegistroPersona (){
    ocultarTodo();
    document.querySelector("#registroPersona").style.display = "block";
}
function mostrarRegistroEmpresa (){
    cargarComboVehiculos();
    ocultarTodo();
    document.querySelector("#registroEmpresa").style.display = "block";
}
function mostrarHabilitarDeshabilitarEmpresa(){
    ocultarTodo();
    crearTablaEmpresa();
    document.querySelector("#buscadorEmpresa").style.display = "block";
    document.querySelector("#habilitarDeshabilitarEmpresa").style.display = "block";
    document.querySelector("#navPrincipalAdministrador").style.display = "block";
}
function mostrarListaVehiculos(){
    ocultarTodo();
    ingresarNuevoVehiculo();
    listarVehiculos();
    document.querySelector("#listaVehiculos").style.display = "block";
    document.querySelector("#navPrincipalAdministrador").style.display = "block";
}
function mostrarRegistroEnvio(){ 
    cargarComboVehiculosSolicitudEnvio()
    ocultarTodo();
    document.querySelector("#navPrincipalPersona").style.display = "block";
    document.querySelector("#altaEnvio").style.display = "block";

}
function mostrarListaEnviosPersona(){
    
    ocultarTodo();
    crearTablaEnvioPersona(); 
    document.querySelector("#listaEnvios").style.display = "block";
    document.querySelector("#navPrincipalPersona").style.display = "block";

}

function mostrarListadoEnviosPendientes(){
    ocultarTodo();
    crearListadoEnviosPendientes();
    document.querySelector("#navPrincipalEmpresa").style.display = "block";
    document.querySelector("#solicitudEnvioPendiente").style.display = "block";
}
function mostrarListadoEnviosTomados(){
    ocultarTodo();
    crearListadoEnviosTomados();
    document.querySelector("#navPrincipalEmpresa").style.display = "block";
    document.querySelector("#solicitudEnviosTomados").style.display = "block";
}
function mostrarInfoEstadisticaAdmin(){
    ocultarTodo();
    document.querySelector("#navPrincipalAdministrador").style.display = "block";
    document.querySelector("#estadisticasAdmin").style.display = "block";
    generarEstadisticaAdministrador();
}
function mostrarInfoEstadisticaPers(){
    ocultarTodo();
    document.querySelector("#navPrincipalPersona").style.display = "block";
    document.querySelector("#estadisticasPersona").style.display = "block";
    generarEstadisticaPersona();
    obtenerPorcentajeSolicitudesTomadas();
}
function mostrarInfoEstadisticaEmp(){
    ocultarTodo();
    document.querySelector("#navPrincipalEmpresa").style.display = "block";
    document.querySelector("#estadisticasEmpresa").style.display = "block";
    generarEstadisticaEmpresa();
    generarEstadisticaEmpresaCombo();
}
//LOGIN

function hacerlogin(){
    
	var selectElementNombre = document.querySelector('#txtUsuarioLogin'); 
    var nombre = selectElementNombre.value;
	
	var selectElementPass = document.querySelector('#txtPasswordLogin');
    var pass = selectElementPass.value;
    
    if(nombre == "" || pass == ""){
        document.querySelector("#mensajesLogin").innerHTML = "Debe completar todos los campos";
    }else{     
        
        if(validarLogin(nombre, pass)){
            let indice1=-1
            let indice2=-1
            let indice3=-1
            for(let obj of listaUsuarios){
                if(obj.nombreUsuario != undefined){
                    if(obj.nombreUsuario.toLowerCase() == nombre.toLowerCase() && obj.password == pass){
                        indice1 = 1
                    }
                }
            }
            for(let obj of listaUsuarioPersona){
                if(obj.nombreUsuario != undefined){
                    if(obj.nombreUsuario.toLowerCase() == nombre.toLowerCase() && obj.password == pass){
                        
                        indice2= 1
                    }
                }
            }
            for(let obj of listaUsuarioEmpresa){
                
                if(obj.nombreUsuario != undefined){//no entra al if 189
                    if(obj.nombreUsuario.toLowerCase() == nombre.toLowerCase() && obj.password == pass && obj.estado=="Activo"){
                        indice3 = 1
                    }else{
                    document.querySelector("#mensajesLogin").innerHTML="Su empresa aun no ha sido dada de alta"
                    }
                }
            }
            
            
           if (indice1 != -1){
               ocultarTodo();
               document.querySelector("#navPrincipalAdministrador").style.display = "block";
               document.querySelector("#bienvenida").style.display = "block";

           } 
           if (indice2 != -1){
             ocultarTodo();
            document.querySelector("#navPrincipalPersona").style.display = "block";
            document.querySelector("#bienvenida").style.display = "block";

            } 
           if (indice3 != -1){
            ocultarTodo();
            document.querySelector("#navPrincipalEmpresa").style.display = "block";
            document.querySelector("#bienvenida").style.display = "block";

            }
        }else{
            
            document.querySelector("#mensajesLogin").innerHTML = "Datos incorrectos";
        }
    }
    document.querySelector('#txtUsuarioLogin').value="";
    document.querySelector('#txtPasswordLogin').value="";
}

//NUEVOS REGISTROS

//Registrar nueva persona
function registrarNuevaPersona(){
    let documentoIdentidad = Number(document.querySelector("#documentoIdentidad").value);
    let nombrePersona = document.querySelector("#nombrePersona").value;
    let apellidoPersona = document.querySelector("#apellidoPersona").value;
    let nombreUsuarioPersona = document.querySelector("#nombreUsuarioPersona").value;
    let contraseñaPersona = document.querySelector("#contraseñaPersona").value;
    let mensaje=""

   if (validarCamposVaciosPersona(documentoIdentidad,nombrePersona,apellidoPersona,nombreUsuarioPersona,contraseñaPersona)){
       if(!existeUsuarioPersona(nombreUsuarioPersona)){
          
          if (validarContraseña(contraseñaPersona)){
            
             agregarUsuarioPersona(nombrePersona, apellidoPersona, documentoIdentidad, nombreUsuarioPersona,contraseñaPersona)
            
             alert( "Registro exitoso! Bienvenido!")
            
              mostrarLogin();
             
          }else {
             
              mensaje = "La contraseña debe ser mayor a 6 caracteres, tener al menos una mayúscula, una minúscula y un número"
          }

       }else {
           mensaje = "Ya existe un usuario con ese nombre, intente con otro diferente"
       }
   }else{
       mensaje = "Debe completar todos los campos"
   }
   document.querySelector("#mensajePersona").innerHTML=mensaje
}
//Registrar nueva empresa
function registrarNuevaEmpresa(){
    let RUT= Number(document.querySelector("#nroRUT").value);
    let razonSocial = document.querySelector("#razonSocial").value;
    let nombreFantasia = document.querySelector("#nombreFantasia").value;
    let vehiculo = document.querySelector("#vehiculoTipo").value;
    let nombreUsuarioEmpresa = document.querySelector("#nombreUsuarioEmpresa").value;
    let contraseñaEmpresa = document.querySelector("#contraseñaEmpresa").value;
    let mensaje = ""
    let estado="Inactivo"

    if (validarCamposVaciosEmpresa(RUT,razonSocial, nombreFantasia, vehiculo, nombreUsuarioEmpresa, contraseñaEmpresa)){
        if(!existeUsuarioEmpresa(nombreUsuarioEmpresa)){
           
           if (validarContraseña(contraseñaEmpresa)){
              agregarUsuarioEmpresa(RUT, razonSocial, nombreFantasia, vehiculo, nombreUsuarioEmpresa,contraseñaEmpresa,estado)
              
              alert( "Registro exitoso! Bienvenido!")
             
              mostrarLogin();
             
           }else {
              
               mensaje = "La contraseña debe ser mayor a 6 caracteres, tener al menos una mayúscula, una minúscula y un número"
           }
 
        }else {
            mensaje = "Ya existe un usuario con ese nombre, intente con otro diferente"
        }
    }else{
        mensaje = "Debe completar todos los campos"
    }
    document.querySelector("#mensajeEmpresa").innerHTML=mensaje
}

//CARGAR COMBO DESPLEGABLE VEHICULO
function cargarComboVehiculos(){
    let combo= document.querySelector("#vehiculoTipo");
    combo.innerHTML="";
   
    for( let vehiculo of listaVehiculos){
        
        let option = "<option value='"+vehiculo.nombre+"'>"+vehiculo.nombre+"</option>";
        combo.innerHTML+= option;
    }
}
function cargarComboVehiculosSolicitudEnvio(){
    let combo= document.querySelector("#txtTipoVehiculo");
    combo.innerHTML="";
   
    for( let vehiculo of listaVehiculos){
        
        let option = "<option value='"+vehiculo.nombre+"'>"+vehiculo.nombre+"</option>";
        combo.innerHTML+= option;
    }
}

//ALTA DE ENVIO

function altaEnvio(){ 
    let tipoVehiculo = document.querySelector("#txtTipoVehiculo").value;
    let distancia = document.querySelector("#txtDistancia").value;
    let descripcion = document.querySelector("#txtDescripcion").value;
    let unaImagen = document.querySelector("#txtImagen").value;
    let id_envio = listaEnvios.length+1 ;
    let creador = usuarioLogueado.nombreUsuario;  
    let estado = "Pendiente";                     
    let empresa = "Sin empresa asignada";          
    if(validarCamposEnvios(tipoVehiculo,distancia,descripcion,unaImagen,creador,estado,empresa)){    
        agregarEnvio(id_envio, tipoVehiculo,distancia,descripcion,obtenerNombreArchivo(unaImagen),creador,estado,empresa);  
        document.querySelector("#txtTipoVehiculo").value = "";
        document.querySelector("#txtDistancia").value = "";
        document.querySelector("#txtDescripcion").value = "";
        document.querySelector("#txtImagen").value = "";
        document.querySelector("#mensajesEnvio").innerHTML = "Alta exitosa";
    }else{
        document.querySelector("#mensajesEnvio").innerHTML = "No puede haber campos vacíos";
    }
}
//HABILITAR Y DESHABILITAR EMPRESA - ADMINISTRADOR
//Actualiza el estado de la empresa en la funcion crearTablaEmpresa()
 function actualizarEstado(unRut){
   
    for (let usu of listaUsuarioEmpresa){

      if  (usu.Rut==unRut){
          
        if (usu.estado=="Inactivo"){
            usu.estado="Activo"
            document.getElementById(unRut).innerHTML = "Activo"
           
        }else{
            usu.estado="Inactivo";
            document.getElementById(unRut).innerHTML = "Inactivo"
        }
        
      }
    }
}
//Crea una tabla con todas las empresas habilitadas y deshabilitadas junto con un botón para cambiar su estado.
function crearTablaEmpresa(){
    let listaEmpresa = document.querySelector("#listaEmpresas");
    let tablaHTML = "<tr><td>RUT</td><td>Razón Social</td><td>Nombre de Fantasía</td><td>Estado</td><td>Activar</td></tr>";
    let texto = document.querySelector("#txtbuscaEmpresa").value;
    let empresas = buscarEmpresas(texto);
   

    for(let empresa of empresas){
        if(empresa.NombreEmpresa != undefined){
            
        tablaHTML += "<tr><td>"+empresa.Rut+"</td><td>"+empresa.RazonSocial+"</td><td>"+empresa.NombreEmpresa+"</td><td id='"+empresa.Rut +"'>"+empresa.estado+"</td><td><button type='button' value='Cambiar' onclick='actualizarEstado("+empresa.Rut+")'>Cambiar</button></td></tr>"
        }
    }
    
    listaEmpresa.innerHTML= tablaHTML;

    if (empresas.length == 0){
        document.querySelector("#msjHabDeshabEmpresa").innerHTML = "No hay resultados para su búsqueda";
    }
}


// LISTADO DE ENVIOS - PERSONA
function crearTablaEnvioPersona(){
    document.querySelector("#listaEnviosPersona").innerHTML = "";
    let enviosHTML = "";
        for(let envios of listaEnvios){
            enviosHTML = "<div id='tablaEnviosPersona'>";
            enviosHTML += "<img src='../imagenes/"+envios.imagen+"' />";
            enviosHTML += "<h4>"+envios.estado+"</h4>";
            enviosHTML +=  "<h3>"+envios.empresa+"</h3>";
            enviosHTML += "<input type='button' id='btnEliminarEnvio' value='Eliminar' onclick='eliminarEnviosPersona("+envios.IdPedido+")'>";
            enviosHTML += "</div>";
            
            
        } 
        document.querySelector("#listaEnviosPersona").innerHTML = enviosHTML;
}

function eliminarEnviosPersona(idEnvio){
    let resultado = null;

    for(let p = 0 ; p < listaEnvios.length && resultado == null ;p++){

        if(listaEnvios[p].IdPedido == idEnvio){
            
            listaEnvios.splice(p,1);

            document.querySelector("#tablaEnviosPersona").innerHTML = "";
        }
    }
}

//INGRESAR NUEVO TIPO DE VEHICULO  
//Funcion para agregar un nuevo vehiculo
function ingresarNuevoVehiculo(){
    let nuevoVehiculo = document.querySelector("#nuevoVehiculo").value;
    nuevoVehiculo.innerHTML="";
    existe = false;
    let id_vehi = listaVehiculos.length+1
    
    for ( let veh of listaVehiculos){
        
        if (veh.nombre.toUpperCase()==nuevoVehiculo.toUpperCase()){
            existe = true;
        }
    }
    if(!existe){
           agregarVehiculo (id_vehi, nuevoVehiculo); 
           document.querySelector("#msjListaVehiculos").innerHTML="Ingreso exitoso";
           listarVehiculos();
            document.querySelector("#msjListaVehiculos").innerHTML="";
        }
        else{
        document.querySelector("#msjListaVehiculos").innerHTML="Ya existe ese vehiculo";
    }
    document.querySelector("#nuevoVehiculo").value="";
}
// Crea una tabla con todos los vehiculos disponibles 
function listarVehiculos(){
    let tablaVehiculos = document.querySelector("#tableListaVehiculos");
    let tablaVehiculosHTML = "<tr><td><strong>Identificador</strong></td><td><strong>Nombre</strong></td></tr>";
    
    for (let vehiculo of listaVehiculos){
        tablaVehiculosHTML+= "<tr><td>"+vehiculo.Id+"</td><td>"+vehiculo.nombre+"</td></tr>";
        
    } 
    tablaVehiculos.innerHTML = tablaVehiculosHTML;
}
//ENVIOS PENDIENTES - USUARIO EMPRESA
function actualizarEstadoPedido(identificadorPedido){
    for (let pedido of listaEnvios){

      if  (pedido.IdPedido==identificadorPedido){
          
        if (pedido.estado=="Pendiente"){
            pedido.estado="En transito";
            document.getElementById(identificadorPedido).innerHTML = "En tránsito";
            document.getElementById(identificadorPedido).innerHTML="<div></div>";
           
        }else{
            pedido.estado="Pendiente";
            document.getElementById(identificadorPedido).innerHTML = "Pendiente";
        }
        
      }
    }

}
function crearListadoEnviosPendientes(){
    document.querySelector("#solicitudEnvioPendiente").innerHTML = "";
    let solicitudesHTML = "";
    let contador = 0;
        for(let pedido of listaEnvios){
            
            
            if(usuarioLogueado.estado=="Activo" /*&& usuarioLogueado.vehiculo.nombre==pedido.vehiculo.nombre*/ && pedido.estado=="Pendiente"){
             contador++

            solicitudesHTML += "<div id='"+pedido.IdPedido+"'>";
            solicitudesHTML += "<img src='../imagenes/"+pedido.imagen+"' />";
            solicitudesHTML += "<p>Distancia a recorrer: "+pedido.distancia+"Km</p>";
            solicitudesHTML += "<h2>"+pedido.UsuarioPersona+"</h2>";
            solicitudesHTML += "<h4 id='"+pedido.IdPedido+"'>"+pedido.estado+"</h4>";
            solicitudesHTML +=  "<button type='button' onclick='actualizarEstadoPedido("+pedido.IdPedido+")'>Tomar envio</button><br><br>";
            solicitudesHTML += "</div>";
            
            
            }
        
        }
        document.querySelector("#solicitudEnvioPendiente").innerHTML = solicitudesHTML;   
    
}


//ENVIOS TOMADOS - USUARIO EMPRESA
//Crea un listado de envios "Pendientes" con un botón para que el usuario empresa pueda tomar
function finalizarPedido(identificadorPedido){
    for (let pedido of listaEnvios){

        if  (pedido.IdPedido==identificadorPedido){
          
            if (pedido.estado=="En Transito"){
                pedido.estado="Finalizado";
                document.getElementById(identificadorPedido).innerHTML = "Finalizado";
                document.getElementById(identificadorPedido).innerHTML = "<div></div>";

           
            }else{
                pedido.estado="En Transito";
                document.getElementById(identificadorPedido).innerHTML = "En Transito";
            }
        
        }
    }

}
function crearListadoEnviosTomados(){
    document.querySelector("#solicitudEnviosTomados").innerHTML = "";
    let solicitudesHTML = "";
    
        for(let pedido of listaEnvios){
            
           if(usuarioLogueado.estado=="Activo" && pedido.estado=="En Transito"){
                
            solicitudesHTML += "<div id='"+pedido.IdPedido+"'>";
            solicitudesHTML += "<img src='../imagenes/"+pedido.imagen+"' />";
            solicitudesHTML += "<p>Distancia a recorrer: "+pedido.distancia+"Km</p>";
            solicitudesHTML += "<h2>"+pedido.UsuarioPersona+"</h2>";
            solicitudesHTML += "<h4 id='"+pedido.IdPedido+"'>"+pedido.estado+"</h4>";
            solicitudesHTML +=  "<button type='button' onclick='finalizarPedido("+pedido.IdPedido+")'>Finalizado</button>";
            solicitudesHTML += "</div>"
             
            }
          
        }
        document.querySelector("#solicitudEnviosTomados").innerHTML = solicitudesHTML;
    
}

//INFORMACIÓN ESTADISTICA
//Usuario Administrador
function generarEstadisticaAdministrador(){
  let lista="<ul>";
    let emp_encuentra = []
    for(let envios of listaEnvios){
        if(envios.estado == "Finalizado" && !emp_encuentra.includes(envios.empresa)){
            emp_encuentra.push(envios.empresa)
            lista += "<li>"+envios.empresa+" "+sumarKilometros(envios.empresa)+"Km</li>"
            
        }
    }
    lista+="</ul>"
    document.querySelector("#listaEmpresas2").innerHTML=lista

}
//Usuario Persona

function obtenerPorcentajeSolicitudesTomadas(){
    let pedidosTomados = 0;
    let pedidosTotalPersona = 0;
    for( let pedidos of listaEnvios){
        if(pedidos.UsuarioPersona== usuarioLogueado.Nombre){
           pedidosTotalPersona++
            if ( pedidos.estado == "En Transito" || pedidos.estado == "Finalizado"){
               pedidosTomados++;
            }
        }
    }
    document.querySelector("#porcentaje").innerHTML="Porcentaje de envios tomados por empresas: "+ ((pedidosTomados/pedidosTotalPersona)*100)+"%"    
}
function generarEstadisticaPersona(){
    let pendiente = 0;
    let enTransito = 0;
    let finalizado = 0;
    for(let envios of listaEnvios){
        if (envios.UsuarioPersona== usuarioLogueado.Nombre){
          
           let estado= envios.estado
           if(estado=='Pendiente'){
               pendiente+=1
           }
           if(estado=='En Transito'){
               enTransito+=1
            }
          if(estado=='Finalizado'){
               finalizado+=1
           }

        }
    }
    if(pendiente>0){
        document.querySelector("#pendientes").innerHTML= "Cantidad de envios sin empresa asignada: "+pendiente;
    }
    if(enTransito>0){
        document.querySelector("#enTransito").innerHTML= "Cantidad de envios en transito: "+enTransito;
    }
    if(finalizado>0){
        document.querySelector("#finalizado").innerHTML= "Cantidad de envios entregados: "+finalizado;
 
    }
   

}
//Usuario Empresa
function generarEstadisticaEmpresa(){
    let nombrePersona = "";
    let max = Number.MIN_SAFE_INTEGER;
    for(let persona of listaUsuarioPersona){
        let auxmax=0
        for(let envio of listaEnvios){

            if(envio.UsuarioPersona == persona.Nombre){
              auxmax+=1
            }
        }
        if (auxmax>max){
            max=auxmax
            nombrePersona=persona.Nombre
        }
    }
    document.querySelector("#conMasEnvios").innerHTML="La persona con más envios es: "+nombrePersona+" con un total de "+max+" envios";
}
//En caso de cambiar de opcion (atributo "onchange")
function comboAutomatico(selectObject) {
    var option = selectObject.value;  
    let totalEnTransito = 0;
    let totalFinalizado = 0;
        for(let envio of listaEnvios){
            if(option=="EnTransito" && envio.estado == "En Transito"){
                totalEnTransito++;
                document.querySelector("#cantidadEnvios").innerHTML="Total de envios en transito: "+totalEnTransito
            }
            
            if(option=="Finalizado" && envio.estado== "Finalizado"){
                totalFinalizado++;
                document.querySelector("#cantidadEnvios").innerHTML="Total de envios finalizados: "+totalFinalizado

            }
        }
  }
function generarEstadisticaEmpresaCombo(){
    let option= document.querySelector("#estado").value;
    let totalEnTransito = 0;
    let totalFinalizado = 0;
        for(let envio of listaEnvios){
            if(option=="EnTransito" && envio.estado == "En Transito"){
                totalEnTransito++;
                document.querySelector("#cantidadEnvios").innerHTML="Total de envios en transito: "+totalEnTransito
            }
            
            if(option=="Finalizado" && envio.estado== "Finalizado"){
                totalFinalizado++;
                document.querySelector("#cantidadEnvios").innerHTML="Total de envios finalizados: "+totalFinalizado

            }
        }
    

    
}


/*
            LOGICA DE NEGOCIO
*/

let listaUsuarios = [];
let listaUsuarioPersona = [];
let listaUsuarioEmpresa = [];
let listaVehiculos = [];
let listaEnvios = []; 

let usuarioLogueado = null;



/////////////////// Datos precargados///////////////////////////
function precargarDatos (){
    agregarUsuarioPersona("Edinson", "Cavani", "12345678", "EdiCavani", "Ec12345");
    agregarUsuarioPersona("Luis", "Suarez", "12345678", "Luisito", "Ls12345");
    agregarUsuarioPersona("Diego", "Godin", "12345678", "Capitan", "Dg12345");
    agregarUsuarioPersona("Fernando", "Muslera", "12345678", "Fer", "Fm12345");
    agregarUsuarioPersona("Lucas", "Torreira", "12345678", "Luquitas", "Lt12345");


    agregarUsuarioEmpresa("216309000000", "Solcito", "Sol", listaVehiculos[2], "emp1", "Sol12345","Activo");
    agregarUsuarioEmpresa("216309000001", "Lunita", "Luna", listaVehiculos[1],"emp2", "Luna12345", "Activo");
    agregarUsuarioEmpresa("216309000002", "Estrellita", "Estrella", listaVehiculos[3], "emp3", "Estrella12345", "Activo");
    agregarUsuarioEmpresa("298356972568", "Rapido", "El mas veloz", listaVehiculos[2], "emp4", "Veloz12345", "Inactivo" );
    agregarUsuarioEmpresa("258914783698", "Correcaminos", "Correcaminos", listaVehiculos[1], "emp5", "Corre12345", "Inactivo");

    agregarUsuarioAdministrador("Admin", "Admin01");
   
    agregarVehiculo("1", "Moto");
    agregarVehiculo("2", "Camioneta");
    agregarVehiculo("3", "Camion"); 
    agregarVehiculo("4", "Auto");
    agregarVehiculo("5", "Bicicleta");

    //ENVIOS
    usuarioLogueado = listaUsuarioPersona[0];//Edinson Cavani
    agregarEnvio("1", listaVehiculos[2],"32","Celular SamsungA10", "celular.png", listaUsuarioPersona[0].Nombre, "Pendiente","Sin empresa asignada");
    usuarioLogueado = listaUsuarioPersona[0];//Edinson Cavani
    agregarEnvio("5", listaVehiculos[3],"32","Moto último modelo", "Moto.jpeg", listaUsuarioPersona[0].Nombre, "En transito",listaUsuarioEmpresa[0].NombreEmpresa);

    usuarioLogueado = listaUsuarioPersona[1];// Luis Suarez
    agregarEnvio("2", listaVehiculos[3],"12", "Fiat mobile rojo","auto.jpeg", listaUsuarioPersona[1].Nombre, "En Transito",listaUsuarioEmpresa[2].NombreEmpresa);
    usuarioLogueado = listaUsuarioPersona[1];// Luis Suarez
    agregarEnvio("6", listaVehiculos[3],"12", "iPod watch","iPod.jpeg", listaUsuarioPersona[1].Nombre, "En Transito",listaUsuarioEmpresa[1].NombreEmpresa);
    usuarioLogueado = listaUsuarioPersona[1];// Luis Suarez
    agregarEnvio("9", listaVehiculos[3],"12", "Mate con detalles en plata con bombilla de plata","Mate.jpeg", listaUsuarioPersona[1].Nombre, "En Transito",listaUsuarioEmpresa[1].NombreEmpresa);
   
    usuarioLogueado = listaUsuarioPersona[3];//Fernando Muslera
    agregarEnvio("3", listaVehiculos[1],"50", "Sobre tamaño carta","sobre.jpeg", listaUsuarioPersona[3].Nombre,  "En Transito", listaUsuarioEmpresa[0].NombreEmpresa);
    usuarioLogueado = listaUsuarioPersona[3];//Fernando Muslera
    agregarEnvio("7", listaVehiculos[1],"50", "Pelota mundial 2014 ","pelota.jpeg", listaUsuarioPersona[3].Nombre,  "Pendiente", listaUsuarioEmpresa[1].NombreEmpresa);
   
    usuarioLogueado = listaUsuarioPersona[2];// Diego Godin
    agregarEnvio("4", listaVehiculos[2],"120", "Heladera Panavox gris modelo 2019", "heladera.jpeg", listaUsuarioPersona[2].Nombre, "Finalizado",listaUsuarioEmpresa[2].NombreEmpresa);
    usuarioLogueado = listaUsuarioPersona[2];// Diego Godin
    agregarEnvio("8", listaVehiculos[2],"120", "Televisor Samsung 55 pulgadas", "Tv.jpeg", listaUsuarioPersona[2].Nombre, "Finalizado",listaUsuarioEmpresa[2].NombreEmpresa);

  
}

//Función que busca entre los usuarios registrados y valida LOGIN
function validarLogin(unUsuario, unaClave){
    let valida = false;
    for(let user of listaUsuarios){
        if(user.nombreUsuario != undefined){
            if(user.nombreUsuario.toLowerCase() == unUsuario.toLowerCase() && user.password == unaClave){
                valida = true;
                usuarioLogueado = user;
            }
        }
    }        
    for(let user of listaUsuarioPersona){
        if(user.nombreUsuario != undefined){
            if(user.nombreUsuario.toLowerCase() == unUsuario.toLowerCase() && user.password == unaClave){
                        valida = true;
                        usuarioLogueado = user;
            }
        }
    }    

    for(let user of listaUsuarioEmpresa){
        if(user.nombreUsuario != undefined){    
            if(user.nombreUsuario.toLowerCase() == unUsuario.toLowerCase() && user.password == unaClave){
                valida = true;
                usuarioLogueado = user;
            }
        }
    }
    
    return valida;
}
//AGREGAR OBJETOS
function agregarUsuarioAdministrador (unNombreUsuario, unaClave){
    let unUsuarioAdministrador = new UsuarioAdministrador(unNombreUsuario, unaClave);
    listaUsuarios.push(unUsuarioAdministrador);
}
function agregarUsuarioPersona (unNombre, unApellido, unaCedula, unNombreUsuario, unaClave){
    let unUsuarioPersona = new UsuarioPersona(unNombre, unApellido, unaCedula, unNombreUsuario, unaClave);
    listaUsuarioPersona.push(unUsuarioPersona);
}
function agregarUsuarioEmpresa (unRut, unaRazonSocial, unNombreFantasia, unVehiculo, unUsuario, unaClave,unEstado){
    let unUsuarioEmpresa = new UsuarioEmpresa(unRut, unaRazonSocial, unNombreFantasia,unVehiculo, unUsuario, unaClave,unEstado);
    listaUsuarioEmpresa.push(unUsuarioEmpresa);
}
function agregarVehiculo (identificadorVehiculo, unNombre){
    let unVehiculo = new Vehiculo(identificadorVehiculo, unNombre);
    if(unNombre != ""){
        listaVehiculos.push(unVehiculo);
    }
}
function agregarEnvio(identificadorPedido,tipoVehiculo,unaDistancia,unaDescripcion,unaImagen,unCreador,unEstado,unaEmpresa){  
    let unEnvio = new Envios(identificadorPedido,tipoVehiculo,unaDistancia,unaDescripcion,unaImagen,unCreador,unEstado,unaEmpresa);  
    listaEnvios.push(unEnvio);
}


//VALIDAR CAMPOS VACIOS
function validarCamposVaciosPersona(unNombre, unApellido, unaCedula, unNombreUsuario, unaClave){
    return unaCedula != "" && unNombre != "" && unApellido != "" && unNombreUsuario != "" && unaClave != ""
}
function validarCamposVaciosEmpresa(unRut, unaRazonSocial, unNombreFantasia, unVehiculo, unUsuario, unaClave){
    return unRut != "" && unaRazonSocial != "" && unNombreFantasia != "" && unVehiculo && unUsuario != "" && unaClave != ""
}
function validarCamposEnvios(unTipoVehiculo,unaDist, unaDesc, unaImagen, unCreador, unEstado, unaEmpresa){   
    return unTipoVehiculo != "" && unaDist != "" && unaDesc != "" && unaImagen != "" && unCreador != "" && unEstado != "" && unaEmpresa != "";  //agregado
}


//Funciones para validación de campos de registro de nuevo Usuario y nuevo vehiculo
function existeUsuarioAdmin( unUsuario){
    let existe = false; 
    for (let user of listaUsuarios){
        if (user.nombreUsuario == unUsuario){
            existe=true;
        }
    }
    return existe
}
function existeUsuarioPersona( unUsuario){
    let existe = false; 
    for (let user of listaUsuarioPersona){
        if (user.nombreUsuario == unUsuario){
            existe=true;
        }
    }
    return existe
}
function existeUsuarioEmpresa( unUsuario){
    let existe = false; 
    for (let user of listaUsuarioEmpresa){
        if (user.nombreUsuario == unUsuario){
            existe=true;
        }
    }
    return existe
}
function existeVehiculo(unNombre){
    let existe = false; 
    for (let vehi of listaVehiculos){
        if (vehi.nombre == unNombre){
            existe=true;
        }
    }
    return existe
}
//CONTRASEÑA VALIDA??
function validarContraseña(unaClave){
    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tienedigito = false;

    if (unaClave.length>=6){
        for (var i = 0; i < unaClave.length; i++) {

            var letra = unaClave.charAt(i);
            
            if (isNaN(letra) && letra == letra.toUpperCase()) {  
             tieneMayuscula = true;
            }
            if (isNaN(letra) && letra == letra.toLowerCase()){     
             tieneMinuscula = true;
            }

            if (Number(unaClave[i])!= NaN){
                tienedigito = true;
            }

        }
       
         if(tieneMayuscula && tieneMinuscula && tienedigito){
            return true;
        }else{
            return false;
        }
    }else{
       return false;
    }
}
//OBTENER RUTA PARA LAS IMAGENES
function obtenerNombreArchivo(ruta){
    let nombreArchivo;
    let posicionUltimaBarra = ruta.lastIndexOf("\\");
    nombreArchivo = ruta.substring(posicionUltimaBarra+1);
    return nombreArchivo;
}


//Para el input buscador de Empresas -Administrador
function buscarEmpresas(texto){
    let lista = [];
    let encontrada = false;
    
    for (let emp of listaUsuarioEmpresa){
        
        if (emp != undefined && texto !=undefined && emp.RazonSocial && emp.RazonSocial != undefined ){
           let aux = emp.RazonSocial.toLowerCase();
           if (aux.includes(texto.toLowerCase())){
                encontrada = true;
              lista.push(emp);
            
            }
        }
        
        if ( !encontrada && emp != undefined && texto !=undefined && emp.NombreEmpresa && emp.NombreEmpresa != undefined ){
                let aux2 = emp.NombreEmpresa.toLowerCase();
                if (aux2.includes(texto.toLowerCase())){
                lista.push(emp)
                }
                
            }
        
        
    }
    return lista
}
//GENERAR ESTADISTICAS
//Funcion que permite sumar los kilometros por empresa
function sumarKilometros(nombreEmp){
    let sumaTotal=0;

    for (let envio of listaEnvios){
        if(envio.empresa==nombreEmp && envio.distancia>0 && envio.estado=="Finalizado"){
            sumaTotal+=Number(envio.distancia)
        }
    }
    return sumaTotal
}

