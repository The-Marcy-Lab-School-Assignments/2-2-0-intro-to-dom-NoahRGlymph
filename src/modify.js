const getMainHeadingText = () => {
  // Grab the h1 element by its id
  const mainHeading = document.querySelector('#main-heading');
  
  // Check if the element exists
  if (mainHeading) {
    // Log the text content of the h1 element to the console
    console.log(mainHeading.textContent.trim());
  } else {
    console.log("Main heading element not found.");
  }
};

const getAllMainText = () => {
  // Grab all elements with the class of main-text
  const mainTextElements = document.querySelectorAll('.main-text');
  
  // Initialize an empty string to store the combined text
  let combinedText = '';
  
  // Iterate through each main-text element
  mainTextElements.forEach((element, index) => {
      // Append the text content of the element to the combinedText string
      combinedText += element.textContent.trim();
      
      // Add a comma after each element except for the last one
      if (index < mainTextElements.length - 1) {
          combinedText += ',';
      }
  });
  
  // Log the combined text to the console
  console.log(combinedText);
};



const setSubtitleText = () => {
  // Grab the h2 element by its id
  const subtitle = document.querySelector('#subtitle');
  
  // Check if the element exists
  if (subtitle) {
    // Update the text content of the h2 element
    subtitle.textContent = "This is a subtitle!";
  } else {
    console.log("Subtitle element not found.");
  }
};


const modifyDivClassList = () => {
  // Grab the div element by its id
  const divToModify = document.querySelector('#modify-classes');
  
  // Check if the element exists
  if (divToModify) {
    // Remove the class 'bad-class' if it exists
    divToModify.classList.remove('bad-class');
    
    // Add the class 'new-class'
    divToModify.classList.add('new-class');
  } else {
    console.log("Element to modify not found.");
  }
};


const addH2 = () => {
  // Create a new h2 element
  const newH2 = document.createElement('h2');
  
  // Set the id attribute of the new h2 element
  newH2.id = 'h2-test';
  
  // Set the text content of the new h2 element
  newH2.textContent = 'Another one!';
  
  // Append the new h2 element to the end of the body tag
  document.body.appendChild(newH2);
};


const removeOldInfo = () => {
  // Grab the p element by its id
  const oldInfo = document.getElementById('old-info');
  
  // Check if the element exists
  if (oldInfo) {
    // Remove the p element from its parent node
    oldInfo.parentNode.removeChild(oldInfo);
  } else {
    console.log("Old info element not found.");
  }
};


const makeAlphabet = () => {
  // Get the ul element with id 'alphabet'
  const alphabetList = document.querySelector('#alphabet');

  // Get the value of the num-letters data attribute
  const numLetters = parseInt(alphabetList.dataset.numLetters);

  // Loop through the alphabet and create li elements
  for (let i = 0; i < numLetters; i++) {
    // Create li element
    const listItem = document.createElement('li');
    
    // Set the text content of the li element
    listItem.textContent = `${String.fromCharCode(65 + i)} is letter #${i + 1} in the alphabet`;
    
    // Append the li element to the ul
    alphabetList.appendChild(listItem);
  }
};


const makeBio = () => {
  // Define the HTML content
  const bioHTML = `
    <h2 id="bio-heading">About Me</h2>
    <p>My name is Zo and I like learn cool new things</p>
    <h3 id="hobby-heading">My Hobbies</h3>
    <ul>
      <li>Running</li>
      <li>Reading</li>
      <li>Writing</li>
    </ul>`;
  
  // Get the div element with id 'my-bio'
  const bioDiv = document.querySelector('#my-bio');
  
  // Set the inner HTML of the div
  bioDiv.innerHTML = bioHTML;
};


// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
