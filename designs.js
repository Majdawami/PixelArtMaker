//Declaring global variables 
const canvasGrid = document.getElementById("pixelCanvas");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const color = document.getElementById("colorPicker");
const sizePicker = document.getElementById("sizePicker");

//onsubmit event occurs when the size of the grid is picked
sizePicker.onsubmit = function (eve) {
    //Handles any unexpected action by preventing it
    eve.preventDefault();
    //clears grid canvas whenever submit button is clicked
    canvasGrid.innerHTML = "";
    makeGrid();
};

function makeGrid() {
    //creates rows and columns for the grid selected by the user
    for (let row = 0; row < height.value; row++) {
        let tr = canvasGrid.insertRow(row);

        for (let column = 0; column < width.value; column++) {
            let cell = tr.insertCell(column);
            //creates a clicking event by painting the grid square with the chosing color 
            cell.addEventListener('click', setColorOfGrid);
        }
    }
}

function setColorOfGrid(eve) {
    eve.target.setAttribute("style", "background-color: " + color.value);
}
