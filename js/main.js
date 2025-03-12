function downloadHTML() {
    const editorContent = document.getElementById('editor').innerHTML;
    const headerContent = document.getElementById('header').innerHTML;
    const footerContent = document.getElementById('footer').innerHTML;


    const fullContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Redactor</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body> <div class="card">
            <div class="header">
                ${headerContent}  <!-- Include header content -->
            </div>
            <div id="editor" class="editor">
                ${editorContent}  <!-- Include editor content -->
            </div>
            <div class="footer">
                ${footerContent}  <!-- Include footer content -->
            </div>
            </div>
        </body>
        <style>
        .card{
            width: 600px;
            height: 600px;
            border: 1px solid red;
            box-shadow: 0px 0px 50px red;
        }
            body{
            display:flex;
            margin-top:50px;
            justify-content: center;
            }
    </style>
        </html>
    `;

    const blob = new Blob([fullContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'editor-content.html';
    a.click();
    URL.revokeObjectURL(url);
}
function formatText(command) {
    document.execCommand(command, false, null);
}
let color = document.getElementById('color');
color.addEventListener('input', function () {
    let Newcolor = this.value;
    document.execCommand('foreColor', false, Newcolor);
});

 let file = document.getElementById('file');
file.addEventListener('change', () =>{

    
})
 