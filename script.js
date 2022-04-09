const container=document.getElementById('container');

//Make cell grid
function makeRows(rows,columns){
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-columns',columns);
    for (i=0;i<(rows*columns);i++) {
        let cell = document.createElement('div');
        console.log('--grid-rows');
        container.appendChild(cell).className="grid-item";
        cell.addEventListener('mouseover',()=> {
            cell.style.backgroundColor = "black";
            });
  
    }
}




makeRows(16,16);







/*const box=document.getElementsByClassName("cell");

    for (i=0;i<(box.length);i++){
        box[i].addEventListener('mouseover',()=> {
            box[i].style.backgroundColor = "red";
            })
        box[i].addEventListener('mouseout', ()=>{
            box[i].setAttribute('style','background-color:white;');
            })
    }*/