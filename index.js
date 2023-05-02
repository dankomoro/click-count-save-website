
let count = 0 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment(){
    console.log("clicked") 
    count += 1
    console.log("count")
    countEl.innerText = count

}
function save(){
    
    let countStr = count + " -"
    saveEl.innerText += " " + countStr
    countEl.innerText = 0
    count = 0 
    }