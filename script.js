// Get DOM elements
const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const preview = document.getElementById('preview');

// Function to safely update the preview with proper sandboxing
function updatePreview() {
    try {
        const previewDoc = preview.contentDocument || preview.contentWindow.document;
        
        // Create a complete HTML document structure
        const htmlTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    /* Reset default styles */
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    /* User CSS */
                    ${cssCode.value}
                </style>
            </head>
            <body>
                ${htmlCode.value}
                <script>
                    // Wrap JS in try-catch for error handling
                    try {
                        ${jsCode.value}
                    } catch (error) {
                        console.error('JavaScript Error:', error);
                    }
                </script>
            </body>
            </html>
        `;

        // Write the complete document to the iframe
        previewDoc.open();
        previewDoc.write(htmlTemplate);
        previewDoc.close();

        // Add error handling for the preview window
        preview.contentWindow.onerror = function(msg, url, lineNo, columnNo, error) {
            console.error('Preview Error:', msg, 'Line:', lineNo, 'Column:', columnNo);
            return false;
        };

    } catch (error) {
        console.error('Preview Update Error:', error);
    }
}

// Add input event listeners
htmlCode.addEventListener('input', updatePreview);
cssCode.addEventListener('input', updatePreview);
jsCode.addEventListener('input', updatePreview);

// Initial preview update
updatePreview();

// Add tab support for better code editing
function handleTab(element, event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        const start = element.selectionStart;
        const end = element.selectionEnd;
        element.value = element.value.substring(0, start) + '    ' + element.value.substring(end);
        element.selectionStart = element.selectionEnd = start + 4;
    }
}

// Add tab handlers to all code areas
[htmlCode, cssCode, jsCode].forEach(editor => {
    editor.addEventListener('keydown', (e) => handleTab(editor, e));
});
