// Exercise-1 
// Write the code necessary to do the following: 
// a.Select the section with an id of container without using querySelector.
// b.Select the section with an id of container using querySelector.
// c.Select all of the list items with a class of "second".
// d.Select a list item with a class of third, but only the list item inside of the ol tag.
// e.Give the section with an id of container the text "Hello!".
// f.Add the class main to the div with a class of footer.
// g.Remove the class main on the div with a class of footer.
// h.Create a new li element.
// i.Give the li the text "four".
// j.insert this li before the li with class of five
// k.Loop over all of the lis inside the ol tag and give them a background color of "green".
// l.Remove the div with a class of footer.

// a)
const container = document.getElementById('container');

// b)
const containerQuery = document.querySelector('#container');

// c)
const secondItems = document.querySelectorAll('li.second');

// d)
const thirdItemInOl = document.querySelector('ol li.third');

// e)
container.textContent = 'Hello!';

// f)
const footer = document.querySelector('.footer');
footer.classList.add('main');

// g)
footer.classList.remove('main');

// h)
const newLi = document.createElement('li');

// i)
newLi.textContent = 'four';

// j)
const fiveItem = document.querySelector('li.five');
fiveItem.insertAdjacentElement('beforebegin', newLi);

// k)
const olItems = document.querySelectorAll('ol li');
olItems.forEach(item => {
    item.style.backgroundColor = 'green';
});

// l)
document.querySelector('.footer').remove();


// Exercise-2(Try to create following structure by using Dom properties and method) insert into body of your html document 
const bodytag =document.body;
const newContainer = document.createElement('div');
newContainer.className = 'container';
newContainer.id = 'container';
const newHeading = document.createElement('h1');
newHeading.className = 'h1';
newHeading.textContent = 'Product List';
newContainer.appendChild(newHeading);

const newList = document.createElement('ul');
newList.className = 'product-collection mb-3';
const newListItem = document.createElement('li');
newListItem.className = 'product-collection-item';
newListItem.id = 'sample';
newListItem.textContent = 'Shoes';
newList.appendChild(newListItem);
newContainer.appendChild(newList);

bodytag.appendChild(newContainer)


// Exercise-3(Try to Examine the common event like mouse Events and Keyboard events found in MDN DOCS "https://developer.mozilla.org/en-US/docs/Web/Events")
// Exercise-3:What are the difference between event bubbling and event capturing
// Event Bubbling: In event bubbling, the event starts from the target element and bubbles up to the root of the DOM tree. This means that the innermost 
// element's event handler is executed first, followed by its parent elements, and so on up to the document object.
// Event Capturing: In event capturing, the event starts from the root of the DOM tree and travels down to the target element. 
// This means that the outermost element's event handler is executed first, followed by its child elements, and so on down to the target element.
// Event Bubbling Example
document.addEventListener('click', function(event) {
    console.log('Clicked on:', event.target);
});
// Event Capturing Example
document.addEventListener('click', function(event) {
    console.log('Captured click on:', event.target);
}, true); // The third parameter 'true' enables capturing mode

// Exercise-4: Write down the benefits of using event delegation? Explain with a practical Example 
// Benefits of Event Delegation:
// 1. Performance: Event delegation reduces the number of event listeners in the DOM, which can improve performance, especially with many child elements.
// 2. Dynamic Content: It allows handling events for dynamically added elements without needing to reattach event listeners.
// 3. Simplified Code: It simplifies the code by managing events at a higher level, making it easier to maintain.
// Practical Example of Event Delegation
const list = document.querySelector('.product-collection');
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});
// In this example, we attach a single click event listener to the parent element (the list).
// When any list item is clicked, the event bubbles up to the parent, and we can handle it based on the target element.
// This way, we don't need to attach individual event listeners to each list item, which is more efficient and easier to manage.
