// Write your code here!

// 1. Remove the 'main' node (if one exists)
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// 2. Create a new 'h1' node
const newHeader = document.createElement('h1');

// 3. Give it an id of 'victory'
newHeader.id = 'victory';

// 4. Set its text content
newHeader.textContent = 'Joshua Karanja is the champion';

// 5. Append it to the body
document.body.append(newHeader);
