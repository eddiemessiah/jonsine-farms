const fs = require('fs');

let html = fs.readFileSync('../jonsine-initial.html', 'utf8');

let bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : html;

let jsx = bodyContent
  .replace(/class=/g, 'className=')
  .replace(/for=/g, 'htmlFor=')
  .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
  .replace(/<img([^>]*[^/])>/g, (match, p1) => {
    // If it doesn't have an alt attribute, add an empty one
    if (!p1.includes('alt=')) {
      p1 = p1 + ' alt=""';
    }
    return '<img' + p1 + ' />';
  })
  .replace(/<input([^>]*[^/])>/g, '<input$1 />')
  .replace(/<br>/g, '<br />')
  .replace(/<hr>/g, '<hr />');

// Fix unescaped entities
jsx = jsx.replace(/'/g, "&apos;").replace(/"/g, '"');
// Wait, replacing all quotes with &apos; / &quot; blindly will ruin HTML attributes.
// Let's just do targeted replacements for text nodes.
