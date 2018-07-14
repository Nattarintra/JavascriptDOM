var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
//book.textContent = 'Nattarintra'; // change from original to Nattarintra
book.textContent += ' Thutsanti'; // Apend text 
});

const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>Nattarintra books </h2>'; // This is gonna replace from the original HTML elements
bookList.innerHTML += '<p> I have no books list yet</p>'; // Apend text inner html.
