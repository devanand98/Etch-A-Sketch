const container=document.getElementById('container');

function makeRows(rows,columns){
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-columns',columns);
    for (i=0;i<(rows*columns);i++) {
        let cell = document.createElement('div');
        cell.innerText=(i+1);
        console.log('--grid-rows');
        container.appendChild(cell).className="cell";
    }


}

makeRows(16,16);