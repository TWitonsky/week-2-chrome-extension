const title = document.querySelector('h1');

const testNode = document.createElement('p');

testNode.innerText = 'Hello, World!';

title.insertAdjacentElement('afterend', testNode);
