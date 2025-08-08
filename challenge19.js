function createTable() {
  let table = document.createElement("table");

  for (let r = 0; r < 3; r++) {
    let row = document.createElement("tr");

    for (let c = 0; c < 3; c++) {
      let cell = document.createElement("td");
      cell.textContent = `Row ${r+1} Col ${c+1}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  document.body.appendChild(table);
}

createTable();
