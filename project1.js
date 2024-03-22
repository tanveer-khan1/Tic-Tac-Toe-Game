let boxes=document.querySelectorAll(".box")
let restbtn=document.querySelector("#reset")
let newbtn=document.querySelector("#new")
let mesg=document.querySelector(".mesg")
let win=document.querySelector("#win")

let turnO=true

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const resetgame=()=>{
    turnO=true
    enableboxes()
    mesg.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O"
            turnO=false
        }
        else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true
        checkwinner()
    })
})

const diableboxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}
const showwinner=(winner)=>{
    win.innerText=`Congratulation, Winner is ${winner}`
    mesg.classList.remove("hide")
    diableboxes()
}

const checkwinner=()=>{
    for(let pattern of winpattern){
       // console.log(pattern[0],pattern[1],pattern[2])
       // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)

        let pos1Val=boxes[pattern[0]].innerText
        let pos2Val=boxes[pattern[1]].innerText
        let pos3Val=boxes[pattern[2]].innerText

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
             showwinner(pos1Val)
            }
        }
    }
}
newbtn.addEventListener("click",resetgame)
restbtn.addEventListener("click",resetgame)

