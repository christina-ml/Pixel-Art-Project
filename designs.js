/*
Christina Loiacono - Pixel Art Maker - Udacity Project Jan. 2021
Intro to Programming
creating the grid to appear:
row and column are parameters; creates the grid; selecting blank pixel canvas
appends the new grid element to the pixel canvas; gets an element's HTML content,
sets an element's HTML content
*/
function makeGrid(row, col) {                                   
    const gridBody = document.createElement('gridBody');
    const blankCanvas = document.querySelector('#pixelCanvas');
    blankCanvas.appendChild(gridBody);
    document.querySelector('#pixelCanvas').innerHTML = '';
    /*
    row will increase by n; creating row element 'tr';
    appending 'tr' to the pixel canvas.
     */
    for (var n = 0; n < row; n++) {
        const tableRow = document.createElement('tr');
        blankCanvas.appendChild(tableRow);
        /*
        col will increase by m; 'td' creates the box;
        appending 'td' to the pixel canvas.
         */
        for (var m = 0; m < col; m++) {
            const tDataCell = document.createElement('td');
            tableRow.appendChild(tDataCell);
            /*
            when clicked; color picked; adds the color to the table data cell
             */
            tDataCell.addEventListener('click', function() {
                const colorfulColor = document.getElementById('colorPicker').value;
                tDataCell.style.backgroundColor = colorfulColor;
            });
        };
    };
};


/*
Making the submit button work with the height and width inputs:
submit makes you click on the button for it to work; defines height variable;
defines width variable; adds the current height/width values; stops the page from reloading instantly
*/
document.addEventListener("submit", function(event){
    const row = document.getElementById("inputHeight").value;
    const col = document.getElementById("inputWidth").value;
    makeGrid(row, col);
    event.preventDefault();
});


// adding another button to save the current Hex # while coloring; color picked:
hexColor.form.addEventListener('click', function write (e) {   
    e.preventDefault();
    const colorfulColor = document.getElementById('colorPicker').value;
    var hexCode = document.createElement("INPUT");
    hexCode.setAttribute("type", "text");
    hexCode.setAttribute("value", " " + colorfulColor);
    document.body.appendChild(hexCode);
  });
      

/*
1. Select color input
2. Select size input

Info/Urls:
Event Listener - https://www.w3schools.com/js/js_htmldom_eventlistener.asp

Inner HTML - https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
const innerResults = document.querySelector('#pixelCanvas').innerHTML;
console.log(innerResults);

Set Attribute - https://www.w3schools.com/jsref/met_element_setattribute.asp
Bad:
element.setAttribute("style", "background-color: red;");
Good:
element.style.backgroundColor = "red";

Text box example:
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_text_create
*/


