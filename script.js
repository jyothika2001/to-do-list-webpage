const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === "") { //empty aanengil
        alert("You must write something there");
    }
    else {
        let li = document.createElement("li"); //an html element is created with tagname li
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        //ini spaninj css kodkkuka
    }
    //ooro lineilum oru cross sign venam..so for that, 
    //text add cheymboo thanne ath input placeil ninn del aakuka
    inputBox.value = "";
    saveData();
}
//ini cheyyendath,,first input checked aano unchecked anao enn 
//nokkanam + cross sign njekkiyal aa input delete aavuem venam.

//The toggle() method toggles between hide() and show() for
// the selected elements.

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {          //when we check or uncheck the task
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {   //when we delete the task  
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); //nammal itta name aan data
}
 
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
