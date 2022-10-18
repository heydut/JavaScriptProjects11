let addForm = document.querySelector(".add");
let list = document.querySelector(".todos");
let search = document.querySelector(".search input");

let generateTemplate = (todo) => {
  let html = `<li class="list-group-item d-flex justify-content-between align-items-center text-light">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//

let filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));

  //   Array.from(list.children)
  //     .filter((todo) => {
  //       return !todo.textContent.includes(term);
  //     })
  //     .forEach((todo) => {
  //       todo.classList.add("filtered");
  //     });
  //   Array.from(list.children)
  //     .filter((todo) => {
  //       return todo.textContent.includes(term);
  //     })
  //     .forEach((todo) => {
  //       todo.classList.remove("filtered");
  //     });
};

// keyup event

search.addEventListener("keyup", () => {
  let term = search.value.trim().toLowerCase();
  filterTodos(term);
});
