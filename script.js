/*----------------------------------------------------- */
const handleButton1 = document.querySelector(".btn1");
const handleButton2 = document.querySelector(".btn2");

const divContainer = document.querySelector(".divContainer");

/*------------------------------------------------------------- */

function handleButtonEvent1(){
    divContainer.innerHTML="";

    const gridContainer = document.createElement("div");
    gridContainer.style.display = "flex";
    gridContainer.style.flexWrap = "wrap";
    gridContainer.style.width = "100%";
    
    let n = 16;
    for( let i = 0; i < n*n; i++){
        const createDiv = document.createElement("div");
        createDiv.style.border = "solid black 1px";
        createDiv.classList.add("newDiv");
        createDiv.style.height = `${100/n}%`;
        createDiv.style.width = `${100/n}%`;
        createDiv.style.boxSizing = "border-Box";
        gridContainer.appendChild(createDiv);
    }
    divContainer.appendChild(gridContainer); 
}

function handleButtonEvent2(){
    divContainer.innerHTML="";

    const gridContainer = document.createElement("div");
    gridContainer.style.display = "flex";
    gridContainer.style.flexWrap = "wrap";
    gridContainer.style.width = "100%";

    let n = 8;
    for( let i = 0; i < n*n; i++){
        const createDiv = document.createElement("div");
        createDiv.classList.add("newDiv");
        createDiv.style.border = "solid black 1px";
        createDiv.style.height = `${100/n}%`;
        createDiv.style.width = `${100/n}%`;
        createDiv.style.boxSizing = "border-Box";
        gridContainer.appendChild(createDiv);
    }
    divContainer.appendChild(gridContainer); 
};

/*---------------------------------------------------------- */


/*---------------EVENT LISTENER FOR BUTTONS------------------------- */
handleButton1.addEventListener( "click" , handleButtonEvent1 );
handleButton2.addEventListener( "click" , handleButtonEvent2 );