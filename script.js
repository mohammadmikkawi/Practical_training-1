//component 1:input field +button

//1-link with html element
let input = document.getElementById(
    "taskinput"
)

let button=document.getElementById(
    "taskbutton"
);
let viewTasks=document.getElementById(
    "viewtasks"
)
//read data from input when event happen
button.addEventListener("click",()=> {
let text= input.value;
if(text !==""){

let li=document.createElement("li")
li.innerText=text

    viewTasks.appendChild(li)

let deleteButton=document.createElement("button")
    deleteButton.innerText="delete"
    deleteButton.addEventListener("click",()=> {
        li.remove()
    });
li.appendChild(deleteButton)


    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });



}
else {
    console.log("text is empty")
}
});


