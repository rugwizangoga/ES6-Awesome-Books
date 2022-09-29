/* eslint-disable max-classes-per-file */

import Book from './Book.js';

export default class BooksList {
  storedbooks = [];

  count = 0;

  constructor(book) {
    this.book = book;
  }

  printbook= () => {
    const books = document.getElementById('books');
    const bookdata = JSON.parse(window.localStorage.getItem('books'));
    this.storedbooks = bookdata;
    books.replaceChildren();
    let num = 0;
    this.storedbooks.forEach((book) => {
      const newdiv = document.createElement('div');
      num += 1;
      newdiv.innerHTML = `
      <p>
          ${book.title} by ${book.author}
      </p>
      <button type="button" class="remove" id="${book.id}">Remove</button>
         `;
      newdiv.className = 'book';
      if (num % 2 === 0) {
        newdiv.classList.add('two');
      }
      books.append(newdiv);
      this.count = parseInt(book.id, 10);
    });
    const remove = document.querySelectorAll('.remove');
    remove.forEach((rem) => {
      rem.addEventListener('click', (rem) => {
        const { id } = rem.target;
        const btns = document.getElementById(id);
        btns.parentElement.remove();
        this.storedbooks = this.storedbooks.filter((b) => b.id !== id);
        window.localStorage.setItem('books', JSON.stringify(this.storedbooks));
      });
    });
  }

  Addbook = (title, author) => {
    this.count += 1;
    this.book = new Book(this.count, title, author);
    this.storedbooks.push(this.book);
    document.forms[0].reset();
    window.localStorage.setItem('books', JSON.stringify(this.storedbooks));
  }
}