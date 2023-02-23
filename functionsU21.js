function onloadCompleteTable() {
    let table = document.getElementById("tablaU21");

    let row = table.insertRow();
    let cell = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let cell5 = row.insertCell();
    let cell6 = row.insertCell();

    cell.textContent = "#";
    cell2.textContent = "Equipos";
    cell3.textContent = "PJ";
    cell4.textContent = "PG";
    cell5.textContent = "PP";
    cell6.textContent = "Pts";

// Recorre la lista de equipos (o array de equipos)
    for(let equipo of listaEquipos) {
        
        //insertar una fila
        table.insertRow();

        //iterate over every index(cell) in each array(row)
        for(let dato of equipo) {


         let newCell = table.rows[table.rows.length - 1].insertCell();
         //add text to the created cell element
         newCell.textContent = dato;

        }
    }
}

const listaEquipos = [
    ["1","San Martín(MJ)","18","18","0","39"],
    ["2","Sport CC 2","18","17","1","38"],
    ["3","Totoras Jrs","18","15","3","36"],
    ["4","Sarmiento","18","15","3","35.5"],
    ["5","Adeo","18","15","3","35"],
    ["6","Carcarañá","18","13","5","32.5"],
    ["7","Alba Maciel","18","10","8","30.5"],
    ["8","Tennis CC","18","10","8","29"],
    ["9","Argentino (Mj)","18","9","9","29"],
    ["10","Dep. Norte","18","8","10","28.5"],
    ["11","Unión De Totoras","18","9","9","28"],
    ["12","Almafuerte","18","7","11","26"],
    ["13","Sp. Las Parejas","18","6","12","25.5"],
    ["14","Atlético SG","18","5","13","25"],
    ["15","Sport CC 1","18","5","13","24"],
    ["16","Sp. Rivadavia","18","4","14","23"],
    ["17","Provincial","18","2","16","21.5"],
    ["18","Campaña","18","2","16","21"],
    ["19","Newbery Everton","18","2","17","20"],
]


