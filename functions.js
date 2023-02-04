const saludoDefault = "Hola "

const apellidoDefault = "No tiene apellido"
const nombreDefaultParaPantallaEspecifica = "Nombre"

function cambiarNombre(nombrePersona) {
    return saludoDefault + " " + nombrePersona;
}

function cambiarApellido(apellidoPersona) {
    
    if (apellidoPersona === undefined)
        return apellidoDefault;
    
    return apellidoPersona;
}

var nombre = "Mati"
var apellido = "Di Salvo"
var edad = 16
var artistasFavoritos = ["Eminem","Nicki Nicole"] 
var persona = {nombre,apellido,edad,artistasFavoritos}


// BIEN
function logearPersona(nombre,apellido) {

    var NombreCompleto = nombre + " " + apellido;

    console.log(NombreCompleto);
}

///// MALLLLL
function a(b,c) {    
    var d = b + " " + c;
    console.log(d);
}

//String(h)

// Compilas 
// Es un lenguaje que se escribe y requiere un proceso intermedio de compilado / procesado en el que se corrobora 
// que esté correctamente escrito/funcional. Esto nos evita problemas al momento de ejecucion.

// Interpretados
// Es un lenguaje que se escribe y no se lee o procesa hasta el momento de su uso, en este caso en el navegador.

// Tipados 
// C#, Java, Typescript

// No Tipados
// Javascript

