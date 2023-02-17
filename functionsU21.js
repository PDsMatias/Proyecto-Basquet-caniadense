function onclickCompleteTable() {
    let table = document.getElementById("tablaU21");

    let row = table.insertRow();
    let cell = row.insertCell();
    let cell2 = row.insertCell();
    cell.textContent = "New Cell!";
    cell2.textContent = "New Cell2!";
}

// var tableArr = [
//     [“row 1, cell 1”, “row 1, cell 2”],
//     [“row 2, cell 1”, “row 2, cell 2”]
//    ]