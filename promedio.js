const button = document.querySelector('#calcular');
button.addEventListener('click', calcularPromedio);


const arrayPrecios = [1,3,4]

// método con for()

function calcularPromedio() {

    let sumatoria = 0;

    for (precio of arrayPrecios){
        sumatoria = sumatoria + precio;
    }

    const promedio = sumatoria / arrayPrecios.length
    console.log(promedio)
}
//-----------------------------------------------------------
// método con array.reduce(function)


// function calcularPromedio(arrayPrecios) {



//     function sumaReduce(sumatoria , nuevoElemento) {
//         sumatoria = sumatoria + nuevoElemento
//         return sumatoria;
//     }
    
//     const sumaElementos = arrayPrecios.reduce(sumaReduce)

    

//     const promedio = sumaElementos / arrayPrecios.length
//     console.log(promedio)
// }

