const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const preview = document.getElementById('preview');

function updatePreview() {
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = `<script>${jsCode.value}<\/script>`;
    const content = html + css + js;

    const previewDoc = preview.contentDocument || preview.contentWindow.document;
    previewDoc.open();
    previewDoc.write(content);
    previewDoc.close();
}

htmlCode.addEventListener('input', updatePreview);
cssCode.addEventListener('input', updatePreview);
jsCode.addEventListener('input', updatePreview);
