const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const todayDate = document.getElementById("today-date");


const options = { year: "numeric", month: "long", day: "numeric" };
todayDate.innerText = new Date().toLocaleDateString(undefined, options);


function addTask(){
    if(inputBox.value === ''){
        alert("You Must Write Something !")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

inputBox.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        addTask();
    }
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
