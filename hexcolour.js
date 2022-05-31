const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const flipper = document.getElementById("flipper")
flipper.addEventListener("click",function(){
    let randomcolour ="#"
    for(let i = 0; i<6 ;i++){
        randomcolour += hex[randomno()]
    }
    document.body.style.backgroundColor = randomcolour;
    document.getElementById("colourname").innerHTML = `colour : ${randomcolour} `
})
function randomno(){
    return Math.floor(Math.random()* 15)
}