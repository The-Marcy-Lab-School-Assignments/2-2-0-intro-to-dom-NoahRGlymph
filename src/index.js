// Add an H1 to the body with an id of main-heading and text of "Hello World!"
const mainHeading = document.createElement('h1');
mainHeading.id = 'main-heading';
mainHeading.textContent = 'Hello World!';
document.body.appendChild(mainHeading);

// Add a p tag with an id of main-text, a class of boring-text, and text that reads "Look, I'm some text!"
const mainParagraph = document.createElement('p');
mainParagraph.id = 'main-text';
mainParagraph.className = 'boring-text';
mainParagraph.textContent = "Look, I'm some text!";
document.body.appendChild(mainParagraph);