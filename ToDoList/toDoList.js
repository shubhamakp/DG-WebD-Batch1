var inputBox = document.getElementById("inputBox");
var addTaskbtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");

addTaskbtn.onclick = () => {
    var newTask = inputBox.value;
    inputBox.value = "";

    var listItem = document.createElement("li");
    var upBtn = document.createElement("button");
    var downBtn = document.createElement("button");
    var crossBtn = document.createElement("button");

    listItem.append(newTask)
    listItem.classList.add("liItem");
    // cross button
    crossBtn.innerText = "X";
    crossBtn.classList.add("crossBtn");
    crossBtn.onclick = () => {
        listItem.remove();
    }
    listItem.append(crossBtn);

    // up button

    upBtn.innerText = "U";
    upBtn.classList.add("upBtn");
    upBtn.onclick = () => {
        taskList.insertBefore(listItem, listItem.previousElementSibling);
    }
    listItem.append(upBtn);

    // down button
    downBtn.innerText = "D";
    downBtn.classList.add("downBtn");
    downBtn.onclick = () => {
        taskList.insertBefore(listItem, listItem.nextElementSibling.nextElementSibling);
    }

    listItem.append(downBtn);

    taskList.append(listItem)

}