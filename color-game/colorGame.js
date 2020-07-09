var squareNum = 6;
var colors = generateColors(squareNum);

var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var msgDisplay = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

var colorPicked = pickColor();
easy.classList.remove('active');
hard.classList.add('active');


easy.addEventListener("click", function(){
    squareNum = 3;

    reset.textContent="NEW COLORS";
    colors = generateColors(squareNum);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    msgDisplay.textContent = "";
    
    for(var i =0; i<square.length; i++){
        if(colors[i]){
        square[i].style.background = colors[i];

        if(square[i].style.boxShadow === "none"){
            square[i].style.boxShadow = "0 4px 6px 0 rgba(0, 0, 0, 0.2)";
         }

        }
        else{
            square[i].style.display = "none";
        }
    }

    easy.classList.add('active');
    hard.classList.remove('active');

});

hard.addEventListener('click', function(){
    
    squareNum = 6;

    reset.textContent="NEW COLORS";
    colors = generateColors(squareNum);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    msgDisplay.textContent = "";
    
    for(var i =0; i<square.length; i++){
        square[i].style.display = "block";
        square[i].style.background = colors[i];

        if(square[i].style.boxShadow === "none"){
            square[i].style.boxShadow = "0 4px 6px 0 rgba(0, 0, 0, 0.2)";
         }

    }

    easy.classList.remove('active');
    hard.classList.add('active');

});

reset.addEventListener("click", function(){
    reset.textContent="NEW COLORS";
    colors = generateColors(squareNum);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    msgDisplay.textContent = "";
    
    for(var i =0; i<square.length; i++){
        square[i].style.background = colors[i];
        
        if(square[i].style.boxShadow === "none"){
            square[i].style.boxShadow = "0 4px 6px 0 rgba(0, 0, 0, 0.2)";
         }
    }

});

colorDisplay.textContent = colorPicked;

for(var i =0; i<square.length; i++){
    square[i].style.background = colors[i];

    square[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if(clickedColor === colorPicked){
            msgDisplay.textContent="YOU ARE CORRECT!";
            changeColor();
            reset.textContent="PLAY AGAIN?";
        }
        else{
            this.style.background = "none";
            this.style.boxShadow = "none";
            msgDisplay.textContent="YOU ARE WRONG!";
        }
    })
}

function changeColor(){
    for(var i=0; i<colors.length; i++){
     square[i].style.background = colorPicked;
     
     if(square[i].style.boxShadow === "none"){
        square[i].style.boxShadow = "0 4px 6px 0 rgba(0, 0, 0, 0.2)";
     }
     
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateColors(num){
    var arr = [];
    
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}


