const hex = ['red','green','blue',"brown",'yellow','violet','pink','orange','magenta'];
const flipper = document.getElementById("flipper");
flipper.addEventListener('click',function(){
    let colour = hex[Math.floor(Math.random()*9)]
    document.body.style.backgroundColor = colour;
    document.getElementById("colourname").innerHTML = `colour : ${colour}`
})