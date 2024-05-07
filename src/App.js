import React, { useState } from 'react';
import './App.scss';
import { marked } from 'marked'; //markdown translator API

marked.use({
  breaks: true
});

function App() {
  const [input, setInput] = useState(`
  # Markdown quick-guide:

  ## Headings and subheadings
  - to use a heading you can use the **#** symbol.

  - Use 1 to 6  **#** depending on the level of the heading.

  ## Bold and Italic
  - Use ** before the want to be bolded world and ** after the word.

  - Use __ before the want to be italic word and __ after the word.

  ## Blockquotes
  - To create a blockquote, add a > in front of a paragraph

  > This is a blockquote element.

  ## Lists

  ### Ordered Lists:
  - To create an ordered list, add line items with numbers followed by periods. The numbers don't have to be in numerical order.

  ### Unordered Lists:
  - To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.

  ## Links
  - To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).

  My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

  ## Images
  - To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title in quotation marks after the path or URL.

  ![A couple of penguins looking at the camera](https://images.pexels.com/photos/641283/pexels-photo-641283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

  ## Code
  - To denote a word or phrase as code, enclose it in backticks (\`).

  At the command prompt, type \`nano\`.

  - To create code blocks type 3 back ticks \\\` , insert the code and close it with other 3 back ticks \\\`

  \`\`\`

    <html>
      <head>
      </head>
    </html>

  \`\`\`     
  `);

  return (
    <div className="App container-fluid">
      <div className='row'>
        <div className="app-title text-center bg-warning col">
          <h1>Markdown-Previewer</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-5 bg-dark d-flex flex-column'>
          <div className='form-group d-flex flex-column flex-grow-1'>
            <textarea id='editor' className="form-control my-3 flex-grow-1" onChange={e => setInput(e.target.value)} value={input}></textarea>
          </div>
        </div>
        <div className='col-7 bg-secondary'>
          <div id="preview" 
        dangerouslySetInnerHTML={{
          __html: marked(input)
        }} className='bg-light my-3'></div>
        </div>  
      </div>
    </div>
  );
}

export default App;
