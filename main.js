//Tasks


//1. Select the section with an id of container without using querySelector.
document.getElementById('container').style.border = 'solid 5px turquoise';


// 2. Select the section with an id of container using querySelector.
document.querySelector('#container').style.backgroundColor = 'pink';


// 3. Select all of the list items with a class of "second".
let listItemsSecond = document.querySelectorAll('li.second');
[...listItemsSecond].map(item => item.style.fontWeight = 'bold');
//the . (dot) targets all li elements with the class of 'second'
//li .second (with space) would target all elements with the class 'second' that are inside li elements





// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol .third').style.fontSize = '2em';


// 5. Give the section with an id of container the text "Hello!".
let container = document.getElementById('container');
container.innerHTML = 'Hello!' + container.innerHTML;


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

let orderedList2 = document.querySelector('ol');
let newLiCopy = newLi.cloneNode('true');
orderedList2.appendChild(newLiCopy);


// 12. Remove the div with a class of footer.
footer.remove();
console.log(document.body);
