const inputPrice = document.querySelector("#precio");
const inputCupon = document.querySelector('#cupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#resultado');
const esDirectTv = true;
//-------------------------------------------------

btn.addEventListener('click', calcularDescuento);


const listaDeCupones = []

listaDeCupones.push({
    name : 'cupon1',
    discount : 20,
});

listaDeCupones.push({
    name : 'cupon2',
    discount : 30,
});

listaDeCupones.push({
    name : 'directTv',
    discount : 10,
});


function calcularDescuento() {

    // Obtener los datos necesarios para calcular
    const cupon = inputCupon.value;
    const precio = Number(inputPrice.value);
    
    
    function buscarCupon(objFind){
        return objFind.name == cupon
    }
    
    // Valida si el cupon (dato entrada) es valido 
    // Y si es valido obtiene el descuento (dato almacenado)
    let descuento;
    const obj = listaDeCupones.find(buscarCupon) 

    if (obj) {
        descuento = obj.discount
    } else {
        return pResult.innerText = 'cupón no valido'
    }

    // Calula el precio final (con descuento)
    const precioFinal = precio * (100 - descuento) / 100

    // Muestra en pantalla el resultado
    pResult.innerText = 'tu nuevo precio es $' + precioFinal
}

function calcularDescuentoCuponDirectTv() {
    // Obtener los datos necesarios para calcular
    const cupon = inputCupon.value;
    const precio = Number(inputPrice.value);
    
    
    function buscarCupon(objFind){
        return objFind.name == cupon
    }
    
    // Valida si el cupon (dato entrada) es valido 
    // Y si es valido obtiene el descuento (dato almacenado)
    let descuento;
    const obj = listaDeCupones.find(buscarCupon) 

    if (obj) {
        descuento = obj.discount
    } else {
        return pResult.innerText = 'cupón no valido'
    }

    // Calula el precio final (con descuento)
    let precioParcial = precio * (100 - descuento) / 100

    const descuentoDirectTv = listaDeCupones.find(_ => _.name == 'directTv')

    const precioFinal = precioParcial * (100 - descuentoDirectTv) / 100

    // Muestra en pantalla el resultado
    pResult.innerText = 'tu nuevo precio es $' + precioFinal
}

const Matimath = {}

