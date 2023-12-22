'user stric'


// Crear una función constructora para crear un Estudiante con las siguientes propiedades:

// nombre, 
// correo
// promedio.
// Una Funcion validarPromedio Que devuelva "Aprobado" si el promedio es mayor a 70 y "Reprobado" si es menor.
// Una Función obtenerUsuario que devuelva únicamente el nombre de usuario del email


function Estudiante(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;
  

    this.validarPromedio = function() {
      return this.promedio > 70 ? "Aprobado" : "Reprobado";
    };
  
   
    this.obtenerUsuario = function() {
      
      const partesCorreo = this.correo.split('@');
      return partesCorreo[0];
    };
  }
  
 
  let estudiante1 = new Estudiante("sebastian", "jsmcalle@gmail.com", 75);
  

  alert (estudiante1.validarPromedio()); 
  alert (estudiante1.obtenerUsuario()); 