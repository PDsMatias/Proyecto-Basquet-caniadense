console.log('My app')

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.send(equipos);
})

app.listen(port, () => {
  console.log("HOlaaa desde el puerto: " + port)
});


const equipos = [
  {"orden":"1","equipo":"San Martín(MJ)","pJugados":"18","pGanados":"18","pPerdidos":"0","puntosAcumulados":"39"},
  {"orden":"2","equipo":"Sport CC 2","pJugados":"18","pGanados":"17","pPerdidos":"1","puntosAcumulados":"38"},
  {"orden":"3","equipo":"Totoras Jrs","pJugados":"18","pGanados":"15","pPerdidos":"3","puntosAcumulados":"36"},
  {"orden":"4","equipo":"Sarmiento","pJugados":"18","pGanados":"15","pPerdidos":"3","puntosAcumulados":"35.5"},
  {"orden":"5","equipo":"Adeo","pJugados":"18","pGanados":"15","pPerdidos":"3","puntosAcumulados":"35"},
  {"orden":"6","equipo":"Carcarañá","pJugados":"18","pGanados":"13","pPerdidos":"5","puntosAcumulados":"32.5"},
  {"orden":"7","equipo":"Alba Maciel","pJugados":"18","pGanados":"10","pPerdidos":"8","puntosAcumulados":"30.5"},
  {"orden":"8","equipo":"Tennis CC","pJugados":"18","pGanados":"10","pPerdidos":"8","puntosAcumulados":"29"},
  {"orden":"9","equipo":"Argentino (Mj)","pJugados":"18","pGanados":"9","pPerdidos":"9","puntosAcumulados":"29"},
  {"orden":"10","equipo":"Dep. Norte","pJugados":"18","pGanados":"8","pPerdidos":"10","puntosAcumulados":"28.5"},
  {"orden":"11","equipo":"Unión De Totoras","pJugados":"18","pGanados":"9","pPerdidos":"9","puntosAcumulados":"28"},
  {"orden":"12","equipo":"Almafuerte","pJugados":"18","pGanados":"7","pPerdidos":"11","puntosAcumulados":"26"},
  {"orden":"13","equipo":"Sp. Las Parejas","pJugados":"18","pGanados":"6","pPerdidos":"12","puntosAcumulados":"25.5"},
  {"orden":"14","equipo":"Atlético SG","pJugados":"18","pGanados":"5","pPerdidos":"13","puntosAcumulados":"25"},
  {"orden":"15","equipo":"Sport CC 1","pJugados":"18","pGanados":"5","pPerdidos":"13","puntosAcumulados":"24"},
  {"orden":"16","equipo":"Sp. Rivadavia","pJugados":"18","pGanados":"4","pPerdidos":"14","puntosAcumulados":"23"},
  {"orden":"17","equipo":"Provincial","pJugados":"18","pGanados":"2","pPerdidos":"16","puntosAcumulados":"21.5"},
  {"orden":"18","equipo":"Campaña","pJugados":"18","pGanados":"2","pPerdidos":"16","puntosAcumulados":"21"},
  {"orden":"19","equipo":"Newbery Everton","pJugados":"18","pGanados":"2","pPerdidos":"17","puntosAcumulados":"20"}
];

// function hola() {
//   console.log("HOlaaa desde el puerto: " + port)
// }
