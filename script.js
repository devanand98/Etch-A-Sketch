const container=document.getElementById('container');

//Make cell grid
function makeGrid(rows,columns){

    //check if button is already existing and if so remove it
    while(document.querySelector('button') !== null){
        document.querySelector('button').remove();
    }

    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-columns',columns);
    container.style.width = '960px';
    container.style.length ="960px"
    container.style.overflow='hidden';
    for (i=0;i<(rows*columns);i++) {
        let cell = document.createElement('div');
        cell.style.minHeight='0';
        cell.style.minWidth='0';
        cell.style.overflow='hidden';
        console.log('--grid-rows');
        container.appendChild(cell).className="grid-item";
        cell.addEventListener('mouseover',()=> {
            cell.style.backgroundColor = "black";
            });
        /*cell.addEventListener('mouseout',()=>{
            
             cell.style.backgroundColor = "white";
        })*/
         
  
    }
    createButton();
}

function createButton(){
    const buttonDiv = document.querySelector('#buttondiv');
    const resetButton = document.createElement('button');
    resetButton.textContent = "Reset";
    resetButton.style.margin="20 px";
    buttonDiv.appendChild(resetButton)

    //add event listener to button
    resetButton.addEventListener('click',()=>{
        document.querySelectorAll('.grid-item').forEach(e=>e.remove());
        let userGridInput=prompt("Enter the size of the Grid per side (Max 100!");
        if (userGridInput > 100){
            alert("Too High!")
        }
        
        rows=userGridInput;
        columns=userGridInput;
        makeGrid(rows,columns);
    })
    
}

makeGrid(16,16);









/*const box=document.getElementsByClassName("cell");

    for (i=0;i<(box.length);i++){
        box[i].addEventListener('mouseover',()=> {
            box[i].style.backgroundColor = "red";
            })
        box[i].addEventListener('mouseout', ()=>{
            box[i].setAttribute('style','background-color:white;');
            })
    }*/