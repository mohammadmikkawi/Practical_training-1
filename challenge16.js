function createList() {
  let ul = document.createElement("ul");
  for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.textContent = "Item " + i;
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}

createList();
