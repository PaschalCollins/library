let container = document.querySelector(".container");
let table = container.querySelector("table");
let tbody = table.querySelector("tbody");


// Library array and constructor
let myLibrary = [
    { title: "Crises", author: "Paschal Collins", pages: "420", status: "Read" },
    { title: "Chike and the River", author: "Chinua Achebe", pages: '616', isRead: 'Not read'},];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary(title, author, pages, status) {
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    addNewRow(newBook);
    console.log(myLibrary);
}
// function render() {
    
// }

// Adding a new book
function addNewBook() {
    let addBookForm = document.querySelector(".addBookForm");
    if (addBookButton.classList.contains("displayNone") === false) {
        addBookButton.classList.add("displayNone");
        addBookForm.classList.remove("displayNone");
    } else {
        addBookButton.classList.remove("displayNone");
        addBookForm.classList.add("displayNone");
        let resets = container.querySelectorAll(".reset").forEach(reset => reset.value = "");
    }
}
let addBookButton = document.querySelector(".addBookButton");
addBookButton.addEventListener("click", addNewBook);

// Submitting the book to library
function submitNewBook() {
    let bookTitle = document.querySelector("#addBookTitle").value;
    let bookAuthor = document.querySelector("#addBookAuthor").value;
    let bookPages = document.querySelector("#addBookTotalPages").value;
    let bookStatus = document.querySelector("#haveReadThis");
    (bookStatus.checked === true) ? bookStatus = "Read" : bookStatus = "Not read";

    if (bookTitle && bookAuthor && bookPages !== "") {
        addBookToLibrary(bookTitle, bookAuthor, bookPages, bookStatus);
        addNewBook();
    } else {
        alert("Some inputs missing")
        // addNewBook();
    }
    
}
let submit = container.querySelector("#bookSubmit");
submit.addEventListener("click", submitNewBook);

// // Creating new row
// let closeButtonCount = 2;
function addNewRow(element) {
    // closeButtonCount++;
    let newRow = document.createElement("tr");

    let itemIndex = myLibrary.indexOf(element);
    newRow.setAttribute("data-index", `${itemIndex}`);
    tbody.appendChild(newRow);

    // Add th on the row
    let th = document.createElement("th");
    th.textContent = `${itemIndex + 1}`;
    th.setAttribute("scope", "row");
    newRow.appendChild(th);
    // console.log(th);

    // Adding td on the row
    for (key in element) {
        let td = document.createElement("td");
        td.textContent = `${element[key]}`;
        newRow.appendChild(td);
        // console.log(td);
    }

    // Adding close button
    let closeButton = document.createElement("td");
    let i = document.createElement("i");
    i.classList.add("material-icons");
    i.textContent = "close";
    closeButton.classList.add("closeButton");
    closeButton.appendChild(i);
    newRow.appendChild(closeButton);

    let closeButttons = tbody.querySelectorAll(".closeButton");
    closeButttons.forEach(cls => cls.addEventListener("click", deleteRow));
}

// Deleting book from table
function deleteRow(e) {
    console.log(e);
    let whichRowToRemove = e.target.parentElement.dataset.index
    console.log(whichRowToRemove);
    let rowToRemove = document.querySelector(`[data-index="${whichRowToRemove}"]`)
    console.log(rowToRemove);
    delete myLibrary[whichRowToRemove];
    console.log(myLibrary);
    tbody.removeChild(rowToRemove);
}



