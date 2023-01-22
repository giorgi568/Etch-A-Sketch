const container = document.querySelector("#container");
// for initial grid and functionality
for(i=0; i<256; i++){
    const div = document.createElement("div");
    div.className = "divs";   
    container.appendChild(div);
}
hoveringEffect();

// user input made grid
function userInput(){
    const columnNum = window.prompt("enter number of column: (maximum of 100)");
    const rowNum = window.prompt("enter number of rows: (maximum of 100)");
    // no more than 100 because its lags
    if(columnNum <= 100 && rowNum <= 100){
        // foloving line deletes initial grid which is initialized from start and is 16x16
        container.innerHTML = "";
        const customStyles = `
        grid-template-columns: repeat(${columnNum}, 1fr);
        grid-template-rows: repeat(${rowNum}, 1fr);
        `;
        container.style.cssText = customStyles;

        let alldivs = columnNum * rowNum;
        for(i=0; i<alldivs; i++){
            const div = document.createElement("div");
            div.className = "divs";   
            container.appendChild(div);
        }
        hoveringEffect();
    }else{
        alert("your number is too high");
    }
    
}

const btn = document.querySelector("#button");
btn.addEventListener("click", userInput);


function hoveringEffect(){
    const divs = document.querySelectorAll(".divs");
    i=0;
    while(i<divs.length){
        const n = divs[i];
        // this helps in later in hovering function, so we can initialize nums only once
        let num1 = -1;
        let num2 = -1;
        let num3 = -1;
        let shader = 90;
        
        function hovering(e){
            if(num1 > 0 && shader >= 10){
                shader = shader - 10;
                n.style.backgroundColor = `rgb(${(num1*shader)/100}, ${(num2*shader)/100},${(num3*shader)/100})`;
            }else if(num1>0){
                isCompleted = true;   
            }else{
                num1 = randomValue();
                num2 = randomValue();
                num3 = randomValue();
                shader = 90;
                n.style.backgroundColor = `rgb(${num1}, ${num2},${num3})`
            }
        }
        n.addEventListener("mouseover",hovering);
        
        i++;

    }
}
function randomValue(){
    return Math.floor(Math.random() * 256);
}


