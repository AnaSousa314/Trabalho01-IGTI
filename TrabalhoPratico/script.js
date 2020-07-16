window.addEventListener('load',start);
function start(){
    console.log('start');
}

var rangeRed = document.querySelector('#red');
var valueOne = document.querySelector('#valueOne');


var rangeGreen = document.querySelector('#green');
var valueTwo = document.querySelector('#valueTwo');

var rangeBlue = document.querySelector('#blue');
var valueThree = document.querySelector('#valueThree');

var colors = document.querySelector('.colors');


rangeRed.addEventListener('input',handleRangeRed);
rangeGreen.addEventListener('input',handleRangeGreen);
rangeBlue.addEventListener('input',handleRangeBlue);
colors.addEventListener('onchange');//esse é realmente necessário


    function handleRangeRed(event){
        valueOne.value = event.target.value;
        
        colors.style.backgroundColor = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`;
       // console.log(colors.style.backgroundColor);
    }

    function handleRangeGreen(event){
        valueTwo.value = event.target.value;
        colors.style.backgroundColor = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`;
       // console.log(colors.style.backgroundColor)
    }

    function handleRangeBlue(event){
        valueThree.value = event.target.value;
        colors.style.backgroundColor = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`;
    }






//Esses abaixo são inúmeras tentativas de fazer funcionar

/* rangeRed.addEventListener('input', function(event){
valueOne.value = event.target.value;
//colors.style.backgroundColor = rgb(valueOne,0,0);
   //console.log(rangeRed.value)
}); */
/* rangeGreen.addEventListener('input', function(event){
    valueTwo.value = event.target.value;
       // console.log(rgb(event.target.value))
}); */

// rangeBlue.addEventListener('input', function(event){
//     valueThree.value = event.target.value;
//     colors.value = event.target.value;
//        // console.log(rgb(event.target.value))
// });


/* function handleRangeBlue(event) {
    valueThree.value = event.target.value;
    colors.value = event.target.value;
    //console.log(colors.value)
    return colors;
} */

//  colors.addEventListener('onchange',function(){


//      colors.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;

// // })

// var colors = document.querySelector('.colors');

// colors.addEventListener('onchange', handlerColors);

// function handlerColors(rangeRed,rangeGreen,rangeBlue){
//  //console.log(rangeRed.value)
 
 
//     //colors.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen}, ${rangeBlue})`;
    
//}


 //colors.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;




// colors.addEventListener('input',function(event){
//     colors.style.backgroundColor = rangeRed.value;
// })

//variavel.style.background = `rgb(${red}, ${green}, ${blue})`;