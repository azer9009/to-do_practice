document.getElementById('addButton').addEventListener('click', function() {
    const mainContainer = document.getElementById("container");
    const container = document.getElementsByClassName('to-do_cont')[0];
    const itemText = document.getElementById('todoInput').value;
    if (!itemText.trim()) {
        alert("No text content");
        return;
    }

    const listItem = document.createElement('li');

    listItem.style.display = "flex"

    listItem.style.justifyContent = "space-between"

    listItem.style.alignItems = "center"


    const textNode = document.createTextNode(itemText);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
        listItem.remove();
    });

    listItem.appendChild(textNode);
    listItem.appendChild(deleteButton);

    const todoList = document.getElementById("todoList");
    todoList.appendChild(listItem);

    
    const textButton = document.createElement('button')
    listItem.appendChild(textButton)

    textButton.style.backgroundColor = "blue"
    textButton.style.padding = "8px"
    textButton.style.border = "none"
    textButton.style.color = "white"
    textButton.style.borderRadius = "8px"

    textButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'

    document.createElement('p').classList.add('textParagraph')

    const textParagraph = document.getElementsByClassName("textParagraph")

 

    textButton.addEventListener('click', function() {
        listItem.innerText = 'text deyisdi ';
    });
    

});





