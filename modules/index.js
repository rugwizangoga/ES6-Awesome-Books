
import { BooksList } from "./BooksList.js";
import { time } from "./Dates.js";

/* eslint-disable max-classes-per-file */

const addnew = document.getElementById('addnew');
const read = document.getElementById('read');
const contact = document.getElementById('contact');
const now = document.getElementById('now');
const go = document.getElementById('go');
const then = document.getElementById('then');
const navitem = document.querySelectorAll('.navitem');
const timer = document.querySelector('.time');

const today = time();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
timer.innerHTML = `<p>${months[today.month-1]}&nbsp ${today.day}th &nbsp ${today.year}, &nbsp ${today.hour}: ${today.min} ${today.mid}<p>`;
addnew.classList.add('active');
contact.classList.add('active');
now.classList.add('active');

navitem.forEach((item) => {
  item.addEventListener('click', (nav) => {
    const { id } = nav.target;
    if (id === 'go') {
      addnew.classList.remove('active');
      read.classList.add('active');
      contact.classList.add('active');
      go.classList.add('active');
      now.classList.remove('active');
      then.classList.remove('active');
    } else if (id === 'then') {
      contact.classList.remove('active');
      addnew.classList.add('active');
      read.classList.add('active');
      go.classList.remove('active');
      now.classList.remove('active');
      then.classList.add('active');
    } else {
      read.classList.remove('active');
      addnew.classList.add('active');
      contact.classList.add('active');
      go.classList.remove('active');
      now.classList.add('active');
      then.classList.remove('active');
    }
  });
});


const mystore = new BooksList();

if (localStorage.getItem('books')) {
  mystore.printbook();
}

const add = document.getElementById('btn');

add.addEventListener('click', () => {
  const booktitle = document.forms[0].elements[0].value;
  const bookauthor = document.forms[0].elements[1].value;
  mystore.Addbook(booktitle, bookauthor);
  mystore.printbook();
});
