//add new paragraph in section1

const pnew = document.createElement("p")
const textnew = document.createTextNode("This is a New Paragraph")

pnew.appendChild(textnew)

const s1 = document.getElementById("section1")
s1.appendChild(pnew)

//Event Handler inline

function changeToBlue(){
    const p3 = document.getElementsByClassName("p3")[0]
    p3.style.backgroundColor= "blue"
}

const p2 = document.getElementsByClassName("p2")[0]
p2.addEventListener('mouseenter', function(){
    p2.style.backgroundColor = "yellow"
})

p2.addEventListener('mouseleave', function(){
    p2.style.backgroundColor = 'lightblue'
})