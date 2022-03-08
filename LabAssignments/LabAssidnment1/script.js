const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function newTodo() {
  /*Add Logic for creating a new Todo Item. */

  /*Below lines can be used to updated the data on frontend */
  list.innerHTML = "New Item ";
  itemCountSpan.innerHTML = "1";
  uncheckedCountSpan.innerHTML = "1";
}

function removeTodo() {
  /*Add Logic for removing an existing TODO Item */
  /*Below lines can be used to updated the data on frontend */
  list.innerHTML = " ";
  itemCountSpan.innerHTML = "";
  uncheckedCountSpan.innerHTML = "";
}
