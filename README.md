# Mini Code Editor

A lightweight, real-time code editor that allows you to write and preview HTML, CSS, and JavaScript code instantly in your browser. Perfect for quick prototyping and testing code snippets.

## Features

- **Live Preview**: See your code changes in real-time
- **Multi-language Support**: Write HTML, CSS, and JavaScript simultaneously
- **Clean Interface**: Simple and intuitive user interface
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
mini-code-editor/
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
├── README.md       # Documentation
└── LICENSE         # MIT License
```

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/Anon23261/mini-code-editor.git
   ```

2. Open `index.html` in your web browser

That's it! No build process or dependencies required.

## How to Use

1. Write HTML code in the HTML section
2. Add CSS styles in the CSS section
3. Include JavaScript in the JavaScript section
4. Watch your code come to life in the preview window

## Example

Try this simple example to get started:

**HTML:**
```html
<div class="container">
  <h1>Hello World!</h1>
  <button id="btn">Click me</button>
</div>
```

**CSS:**
```css
.container {
  text-align: center;
  padding: 20px;
}

button {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

**JavaScript:**
```javascript
document.getElementById('btn').addEventListener('click', () => {
  alert('Button clicked!');
});
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with vanilla JavaScript
- Inspired by online code editors like CodePen and JSFiddle
