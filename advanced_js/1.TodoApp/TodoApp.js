
let data = [];
const createTodoForm = document.getElementById("createTodo");
const updateTodoForm = document.getElementById("updateTodo");
const todoListingContainer = document.getElementById("todo-lisiting-container");

//add event listener to the form

createTodoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e);
    const titleElememt = e.target[0];
    const descriptionElement = e.target[1];

    const newTodo = {
        id: data.length + 1,
        title: titleElememt.value,
        description: descriptionElement.value


    }
    // check if the form is empty
    if (titleElememt.value === "" || descriptionElement.value === "") {
        return;
        alert("Please fill the form")

    }


    //push the newTodo to the data array
    data.push(newTodo);

    //adding to appendChild
    todoListingContainer.appendChild(createTodoCard(newTodo));


    //clear the form
    titleElememt.value = "";
    descriptionElement.value = "";

});

updateTodoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e);
    const titleElememt = e.target[0];
    const descriptionElement = e.target[1];
    const id = e.target[2];

    // check if the form is empty
    if (titleElememt.value === "" || descriptionElement.value === "" || id.value === "") {
        return;
        alert("Please fill the form")

    }
    const filteredData = data.filter((d) => d.id !== parseInt(id.value));
    const updatedTodo = {
        id: parseInt(id.value),
        title: titleElememt.value,
        description: descriptionElement.value
    }
    filteredData.push(updatedTodo);
    data = filteredData;
    refreshApp();

    titleElememt.value = "";
    descriptionElement.value = "";

});

function createTodoCard(data = {}) {
    const card = document.createElement("div");
    card.setAttribute("class", "cols-2");
    card.setAttribute("id", data.id)
    card.innerHTML = `<div class="card todo-card">
                        <div class="card-body">
                            <h5 class="card-title">${data.title} </h5>
                            <p class="card-text">${data.description}</p>
                            <button type="button" data-id="${data.id}" class="btn btn-primary">Delete</button>
                            <button type="button" data-id="${data.id}" class="btn btn-danger">Edit</button>
                        </div>
                    </div>`;


    const ctaNodes = card.querySelectorAll("button");
    console.log(ctaNodes);
    ctaNodes[0].addEventListener("click", handleDeleteClick)
    ctaNodes[1].addEventListener("click", handleEditClick)
    return card;
}

function handleEditClick(e) {

    console.log("edit")
    e.stopPropagation();
    console.log(">>", e.target.dataset, Number(e.target.dataset.id))
    const matchingElement = data.find((d) => {
        return d.id === Number(e.target.dataset.id)
    });
    console.log(matchingElement);
    const titleElememt = updateTodoForm[0];
    const descriptionElement = updateTodoForm[1];
    const id = updateTodoForm[2];
    titleElememt.value = matchingElement.title;
    descriptionElement.value = matchingElement.description;
    id.value = matchingElement.id;
}

function handleDeleteClick(e) {
    e.stopPropagation();
    console.log("deleted");
    const newData = data.filter((d) => d.id !== Number(e.target.dataset.id));
    data = newData;
    refreshApp();



}
function refreshApp() {
    todoListingContainer.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        todoListingContainer.appendChild(createTodoCard(data[i]));
    }
}