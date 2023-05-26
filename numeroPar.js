
Matimath.esPar = function esPar(lista) {
    return !(lista.length % 2);
  }
  Matimath.esImpar = function esImpar(lista) {
    return lista.length % 2;
  }
  
  Matimath.mediana = function calcularMediana(listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);
  
    if (listaEsPar) {
      const indexMitad1ListaPar = (lista.length / 2) - 1;
      const indexMitad2ListaPar = lista.length / 2;
      const listaMitades = [];
      listaMitades.push(lista[indexMitad1ListaPar]);
      listaMitades.push(lista[indexMitad2ListaPar]);
  
      const medianaListaPar = calcularPromedio(listaMitades);
      return medianaListaPar;
    } else {
      const indexMitadListaImpar = Math.floor(lista.length / 2);
      const medianaListaImpar = lista[indexMitadListaImpar];
      return medianaListaImpar;
    }
  }
  
    Matimath.promedio = function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
      return valorAcumulado + nuevoValor;
    }
  
    const sumaLista = lista.reduce(sumarTodosElementos);  
    const promedio = sumaLista / lista.length;
    // console.log(promedio);
    return promedio;
  }
  
 Matimath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
      return valorAcumulado - nuevoValor;
    }
    
    // const lista = listaDesordenada.sort((a,b) => a-b);
    const lista = listaDesordenada.sort(ordenarListaSort);
    // menor a mayor 
    return lista;
  }


  const arrayBidimensional = [['c',2],['a',1],['b',3]]
  
  
Matimath.moda = function calcularModa(lista) {
  const listaCount = {}
  for (let i = 0; i < lista.length; i++) {

    const element = lista[i];

    if (listaCount[element]) {
      listaCount[element] += 1
    } else {
      listaCount[element] = 1
    }
  }
    
  const listaArray = Object.entries(listaCount);

  function ordenar(aV,nV){
    return aV[1]-nV[1];
  }
  
  const arrayOrdenado =  listaArray.sort(ordenar);
  const num = arrayOrdenado[arrayOrdenado.length - 1]

  return num[0]  
}  



const listaMP = [{valor : 10, peso : 20},
  {valor : 20, peso : 30},{valor : 30, peso : 40}]

//  function calcularMP(lista) {
//  const elementosMultiplicados = lista.map(element => {element.valor * element.peso})
// return elementosMultiplicados}

const acumular = (a,b) => a + b;


const valorPeso = listaMP.map(_ => _.valor * _.peso);

const sumatoriaDeValorXPeso = valorPeso.reduce(acumular)


const valores = listaMP.map(_ => _.valor);

const sumatoriaDeValor = valores.reduce(acumular)


const mediaPonderada = sumatoriaDeValorXPeso / sumatoriaDeValor

// mediaPonderada
// 33.333333333333336
 
 












































// function name(listaNumeros) {

// const sumaNumeros = listaNumeros.reduce((a,b)=> a = a + b )


// if (sumaNumeros % 2){
//     console.log('impar')
// } else{
//    console.log('par')
// }

// function esPar(lista) {
//     return !(lista.length % 2);
//   }
//   function esImpar(lista) {
//     return lista.length % 2;
//   }
  
//   function calcularMediana(listaDesordenada) {
//     const lista = ordenarLista(listaDesordenada);
//     const listaEsPar = esPar(lista);
  
//     if (listaEsPar) {
//       const indexMitad1ListaPar = (lista.length / 2) - 1;
//       const indexMitad2ListaPar = lista.length / 2;
//       const listaMitades = [];
//       listaMitades.push(lista[indexMitad1ListaPar]);
//       listaMitades.push(lista[indexMitad2ListaPar]);
  
//       const medianaListaPar = calcularPromedio(listaMitades);
//       return medianaListaPar;
//     } else {
//       const indexMitadListaImpar = Math.floor(lista.length / 2);
//       const medianaListaImpar = lista[indexMitadListaImpar];
//       return medianaListaImpar;
//     }
//   }

// const ordenarLista = (a,b) => a-b;

// function calcularPromedio(lista) {

//     let sumatoria = 0;

//     for(obj of lista){
//         sumatoria = sumatoria + obj;
//     }

//     const promedio = sumatoria / array.length
//     return promedio;
// }


//-----------------------------------------------------------------
// function esPar(lista) {
//     return !(lista.length % 2);
//   }
//   function esImpar(lista) {
//     return lista.length % 2;
//   }

// function calcularMediana(listaDesordenada) {
//     const lista = ordenarLista (listaDesordenada);
//     const listaEsPar = esPar(lista);
//     const listaEsImpar = esImpar(lista);

//     if (listaEsPar) {
//       const index1ListaPar = lista.lenght/2;
//       const index2ListaPar = (lista.lenght/2) - 1;
//       const arrayIndexes = [lista[index1ListaPar], lista[index2ListaPar]];
//       const MedianaCalculada = calcularPromedio(arrayIndexes)
//       return MedianaCalculada
//     } else if(listaEsImpar) {
//         const indexMitadListaImpar = Math.floor(lista.length / 2);
//         const medianaListaImpar = lista[indexMitadListaImpar];
//         return medianaListaImpar;
//       }
//   }
//   const ordenarLista = (a,b) => a-b;