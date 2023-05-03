async function onloadCompleteTable(idTable) {

    let table = document.getElementById(idTable);
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

    

    var equiposFromApi = await obtenerEquipos();

    // Recorre la lista de equipos (o array de equipos)
    for (let equipo of equiposFromApi) {
        //insertar una fila
        table.insertRow();

        //iterate over every index(cell) in each array(row)
        for (let dato of Object.keys(equipo)) {

         let newCell = table.rows[table.rows.length - 1].insertCell();
         //add text to the created cell element
         newCell.textContent = equipo[dato];

        }
    }
}

async function obtenerEquipos() {
    const rawResponse = await fetch("http://127.0.0.1:3000/equipos");
    return  await rawResponse.json();
}

/*Aside*/ 

const NavEquipos = document.getElementById("NavEquipos")
const Aside = document.getElementById("aside")

NavEquipos.addEventListener("click", ToggleAside)

function ToggleAside(){
    Aside.classList.toggle("inactive");
}

