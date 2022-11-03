function save () {
    const roll = document.getElementById('rollno').value;
    document.getElementById('rollno').value = "";
    const name = document.getElementById('name').value;
    document.getElementById('name').value = "";
    
    
    const tbody = document.querySelector('#student tbody');
    tbody.appendChild(createRow(roll, name));
}
  
function createRow(roll, name) {
    const tr = document.createElement('tr');
    tr.appendChild(createTd(roll));
    tr.appendChild(createTd(name));
    return tr;
}
  
function createTd(value) {
    const td = document.createElement('td');
    td.innerText = value;
    return td;
}

function del() {
    var table = document.getElementById('student');
    var rowCount = table.rows.length;
    table.deleteRow(rowCount-1);
}