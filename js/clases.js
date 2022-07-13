
class UsuarioAdministrador {
    constructor(unUsuario,unaClave){            
        this.nombreUsuario = unUsuario;
        this.password = unaClave;
        this.categoria="admin"
    }
}

class UsuarioPersona {
    constructor(unNombre, unApellido, unaCedula, unUsuario,unaClave){
        this.Nombre = unNombre;
        this.Apellido = unApellido;  
        this.Cedula = unaCedula;              
        this.nombreUsuario = unUsuario;
        this.password = unaClave;
        this.categoria= "persona"
    }
}
class UsuarioEmpresa {
    constructor(unRut, unaRazonSocial, unNombreFantasia, unVehiculo, unUsuario,unaClave,unEstado){
        this.Rut = unRut;
        this.RazonSocial = unaRazonSocial;
        this.NombreEmpresa = unNombreFantasia;
        this.vehiculo= unVehiculo; //Objeto Vehiculo
        this.nombreUsuario = unUsuario;
        this.password = unaClave;
        this.categoria = "empresa";
        this.estado = unEstado;
    }
}

//clase envios 
let identificadorPedido = 1;
class Envios{
    constructor(identificadorPedido,tipoVehiculo,unaDistancia,unaDescripcion,unaImagen,unCreador,unEstado,unaEmpresa){
         this.IdPedido = identificadorPedido;
         this.vehiculo = tipoVehiculo;
         this.distancia = unaDistancia;
         this.descripcion = unaDescripcion;
         this.imagen = unaImagen;
         this.UsuarioPersona = unCreador;
         this.estado = unEstado;
         this.empresa = unaEmpresa;
         identificadorPedido++
    }
}
//clase vehiculo
let identificadorVehiculo = 1;
class Vehiculo{
    constructor (identificadorVehiculo, unNombre){
        this.Id = identificadorVehiculo;
        this.nombre = unNombre;
        identificadorVehiculo++;
    }
}