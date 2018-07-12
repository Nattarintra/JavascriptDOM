var titles = document.getElementsByClassName('title');

    // console.log(Array.isArray(titles)); // chk if is arrey or not. if is false then is not an array.
    // console.log(Array.isArray(Array.from(titles))); // we convert from HTML collections to an Array. 
    
    
    //titles.forEach(function(item){ // main.js:8 Uncaught TypeError: titles.forEach is not a function 

Array.from(titles).forEach(function(item){ // convert from HTML collections to an Array.
     console.log(item);


 });



