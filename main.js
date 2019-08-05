//Tasks


//1. Select the section with an id of container without using querySelector.
document.getElementById('container').style.border = 'solid 5px turquoise';


// 2. Select the section with an id of container using querySelector.
document.querySelector('#container').style.backgroundColor = 'pink';


// 3. Select all of the list items with a class of "second".
let listItemsSecond = document.querySelectorAll('#container .second');
[...listItemsSecond].map(item => item.style.fontWeight = 'bold');
// but not specific to li items, could be any element with class of second


// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol .third').style.fontSize = '2em';


// 5. Give the section with an id of container the text "Hello!".
// let container = document.getElementById('container');
// container.textContent = 'Hello!';


// 6. Add the class main to the div with a class of footer
let footer = document.querySelector('.footer');
footer.classList.add('main');


// 7. Remove the class main on the div with a class of footer.
footer.classList.remove('main');
console.log(footer);


// 8. Create a new li element.
let newLi = document.createElement('li');


// 9. Give the li the text "four".
newLi.innerHTML = 'four';
console.log(newLi);


// 10. Append the li to the ul element.
let unorderedList = document.querySelector('ul');
unorderedList.appendChild(newLi);


// 11. Loop over all of the lis inside the ol tag and give them a background color of "green".
let orderedList = document.querySelectorAll('ol');
[...orderedList].map(item => item.style.backgroundColor = 'green');


// 12. Remove the div with a class of footer.
footer.remove();
console.log(document.body);
