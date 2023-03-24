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

/**
       * Print the names and majors of students in a sample spreadsheet:
       * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
       */
async function listMajors() {
    let response;
    console.log("Hello world!")
    try {
      // Fetch first 10 files
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1AioXlg1vKJvTMiOdZpnSYAM3YFg8qBhQH_136hqwLBk',
        range: 'Hoja 1!A1:B2',
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }
    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
      document.getElementById('content').innerText = 'No values found.';
      return;
    }
    // Flatten to string to display
    const output = range.values.reduce(
        (str, row) => `${str}${row[0]}, ${row[4]}\n`,
        'Name, Major:\n');
    document.getElementById('content').innerText = output;
  }
  function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
  }

  /**
   * Callback after the API client is loaded. Loads the
   * discovery doc to initialize the API.
   */
  async function initializeGapiClient() {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
  }
      const CLIENT_ID = '<YOUR_CLIENT_ID>';
      const API_KEY = 'AIzaSyCAOgMfg-52HO8cqWt0J65qc_87tTZhojE';

      // Discovery doc URL for APIs used by the quickstart
      const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';