
// Changing bcg of body to dark mode with js

// accessing the body tag
let body = document.querySelector("body") //API
// changing the style
body.style.backgroundColor = "#1f1f1f"

// Creating a div with a heading with js

// creating a div with id = "root"

// creating a div elem
let divRoot = document.createElement("div")
// adding an id to it
divRoot.id = "root"
// adding an innerHTML to div
divRoot.innerHTML = "<h1>Hello World</h1>"
// appending it into HTML tree under body
document.body.appendChild(divRoot)//function

// changing the color of heading
let divRootH1 = document.querySelector("#root h1")
divRootH1.style.color = "white"

// how browser knows all this?
/*
The browser knows how to manipulate the HTML DOM (Document Object Model) through the use of the JavaScript language and its built-in APIs. Here's a brief explanation of how this works:

1. **DOM Representation**: When a web page is loaded, the browser parses the HTML and creates a representation of the document called the DOM. This is a tree-like structure where each element, attribute, and piece of text in the HTML is represented as a node.

2. **JavaScript and the DOM**: JavaScript provides a set of methods and properties that allow developers to interact with the DOM. For example:
   - `document.createElement(tagName)`: This method creates a new element of the specified type (e.g., `div`, `h1`, etc.).
   - `document.querySelector(selector)`: This method returns the first element that matches the specified CSS selector, allowing you to access and manipulate existing elements.
   - `element.appendChild(child)`: This method adds a new child node to a specified parent node in the DOM.

3. **Event Loop and Execution Context**: When JavaScript code is executed, it runs in an execution context managed by the browser's JavaScript engine. The engine processes the code, executes the commands, and updates the DOM accordingly.

4. **Repainting and Reflow**: After changes are made to the DOM, the browser may need to repaint or reflow the page to reflect those changes visually. This is handled by the browser's rendering engine.

In summary, the browser uses the DOM to represent the structure of the web page, and JavaScript provides the tools to manipulate that structure dynamically. This allows developers to create interactive and dynamic web applications.
*/