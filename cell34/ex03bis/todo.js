var		array = [];

$(document).ready(function() {
	$("#new").click(addNewTask);
	$("#todo").click(deleteTask);
})

function	createDiv(value) {
	$("#todo").prepend('<div class="todo">' + value + '</div>');
	array.push(value);
}

function	addNewTask() {
	var taskContent = window.prompt("Add new task");
	if (taskContent && taskContent.trim())
		createDiv(taskContent);
}

function	deleteTask(event) {
	if (window.confirm("You are going to delete a task")) {
		var idx = jQuery.inArray(event.target.textContent, array);
		if (idx != -1)
			array.splice(idx, 1);
		$(event.target).remove();
	}
}

function	saveCookie() {
	localStorage.setItem("awesomeToDoList", JSON.stringify(array));
}

function	loadCookie() {
	var		cookieArray = JSON.parse(localStorage.getItem("awesomeToDoList"));

	if (cookieArray)
		for (var i = 0; i < cookieArray.length; i++)
			createDiv(cookieArray[i]);
}

window.onload = loadCookie;
window.onbeforeunload = saveCookie;