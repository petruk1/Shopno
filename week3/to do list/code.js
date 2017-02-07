//функція що створює таск та додає його до інших тасків
function addToList(){
	var inputField = document.getElementById("inputField");
	var inputTask = inputField.value;

	//отримую контейнер для тасків
	var taskContainer = document.getElementById("taskContainer");
	var listItem = document.createElement("div");
	listItem.classList.add("collection-item");
	listItem.classList.add("col");
	listItem.classList.add("s12");
	listItem.classList.add("valign-wrapper");

	//дізнаюся скільки елементів вже є в контейнері для таксів
	var countTask = taskContainer.childElementCount;

	//створююклкмент з порядковим номером таска
	var numberOfTask = document.createElement("span");
	numberOfTask.classList.add("col");
	numberOfTask.classList.add("s1");
	numberOfTask.classList.add("badge");
	numberOfTask.innerHTML = ++countTask;
	listItem.appendChild(numberOfTask);

	//створюю елемент який міститиме сам таск
	var task = document.createElement("span");
	task.classList.add("col");
	task.classList.add("s7");
	task.innerHTML = inputTask;
	listItem.appendChild(task);

	//створюю елемент з часом та датою створення таска
	var date = document.createElement("span");
	date.classList.add("col");
	date.classList.add("s2");
	date.innerHTML = new Date().toUTCString();
	listItem.appendChild(date);

	//створюю кнопку для видалення таску
	var delButton = document.createElement("a");
	delButton.classList.add("btn");
	delButton.classList.add("col");
	delButton.classList.add("s2");
	delButton.setAttribute("id","delButton"+countTask);
    delButton.setAttribute("onClick","deleteTask(this.id);");
	delButton.innerHTML="delete";
	listItem.appendChild(delButton);

	//видаляю текст inputField
	inputField.value="";

	//додаю новий таск в контейнер тасків
	taskContainer.appendChild(listItem);

}
//функція що видаляє таск
function deleteTask(id) {
    var taskContainer = document.getElementById("taskContainer");
	var delayBlock =  document.getElementById(id).parentNode;
	taskContainer.removeChild(delayBlock);
}