const bookList = document.querySelector('#book-list');
// Parent to Children and Children to Parent
console.log('the parent node is:', bookList.parentNode); // #wrapper is parent node
console.log('the parent element is:', bookList.parentElement.parentElement); // body is parent element
console.log(bookList.childNodes);
console.log(bookList.children);


// Next siblings to sibling
console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next element sibling is:', bookList.nextElementSibling);

//  Previous siblings to sibling
console.log('book-list previous sibling is:', bookList.previousSibling);
console.log('book-list previous element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br> This is apend paragh innerhtml. this go to previousElementSibling and go into p tag element. <br> And apend content.'
