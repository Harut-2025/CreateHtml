

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

            <div id="editor" class="editor">
                ${editorContent}  <!-- Include editor content -->
            </div> 
            <div class="header">
                ${headerContent}  <!-- Include header content -->
            </div>
            <div class="footer">
                ${footerContent}  <!-- Include footer content -->
            </div>
            </div>
        </body>
        <style>
        .card{
            width: content;
            height: content;
            padding:20px;
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





function insertCard() {
    let cardWidth = document.getElementById('width').value || '300px'; // Default to 300px if no input is given.
    let cardHeight = document.getElementById('height').value || '300px'; // Default to 300px if no input is given.
    const cardHTML = `
        <div class="card" style="width: ${cardWidth}; height:${cardHeight}; padding:20px; border:1px solid; border-radius:20px">
            <div class="card-header">
                <h3>Card Title</h3>
            </div>
            <div class="card-body">
            </div>
            <div class="card-footer">
                <button>Click Me!</button>
            </div>
        </div>
    `;

    const header = document.getElementById('header');
    // const selection = window.getSelection();
    // const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    // if (range) {
    //     range.deleteContents();
    //     range.insertNode(new DOMParser().parseFromString(cardHTML, 'text/html').body.firstChild);
    // } else {
    //     editor.innerHTML += cardHTML;
    // }

    const cardContainer = document.getElementById('card-container');
    if (!cardContainer) {
        const newContainer = document.createElement('div');
        newContainer.id = 'card-container';
        newContainer.style.display = 'flex';
        newContainer.style.justifyContent = "space-around"
        newContainer.style.gap = "20px"
        newContainer.style.flexWrap = 'wrap'; // Allow wrapping if space is limited
        header.appendChild(newContainer);
    }
    document.getElementById('card-container').innerHTML += cardHTML;
}




function menu() {
    const menuHTML = `
    <div class="navbar">
        <nav style:"display:flex;">
            <div>Logo</div>
            <div>
                <ul>
                    <li><a href="">One</a></li>
                    <li><a href="">Two</a></li>
                    <li><a href="">Tree</a></li>
                    <li><a href="">Four</a></li>
                </ul>
            </div>
        </nav>
    </div>


    `;

    const editor = document.getElementById('editor');
    const selection = window.getSelection();
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    if (range) {
        range.deleteContents();
        range.insertNode(new DOMParser().parseFromString(menuHTML, 'text/html').body.firstChild);
    } else {
        editor.innerHTML += menuHTML;
    }

    // Ensure that cards are wrapped in a flex container
    const cardContainer = document.getElementById('card-container');
    // if (!cardContainer) {
    //     const newContainer = document.createElement('div');
    //     newContainer.id = 'card-container';
    //     newContainer.style.display = 'flex';
    //     newContainer.style.flexWrap = 'wrap'; // Allow wrapping if space is limited
    //     editor.appendChild(newContainer);
    // }

    // document.getElementById('card-container').innerHTML += cardHTML;
}


function insertImage(event) {
    const control = document.getElementById('control');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            img.style.height = 'auto';

            const editor = document.getElementById('editor');
            const selection = window.getSelection();
            const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

            if (range) {
                range.deleteContents();
                range.insertNode(img);
            } else {
                control.appendChild(img);
            }

            // Ցուցադրել նկարի չափերը և տալ փոփոխելու հնարավորություն
            img.onload = function () {
                const sizeControls = document.createElement('div');
                sizeControls.innerHTML = `
                    <p> ${img.width} x ${img.height}</p>
                    <input type="number" id="imgWidth" value="${img.width}">
                    <input type="number" id="imgHeight" value="${img.height}">
                    <button onclick="resizeImage()">Փոփոխել չափերը</button>
                `;
                control.appendChild(sizeControls);

            };
        };
        reader.readAsDataURL(file);
    }
}
function resizeImage() {
    const newWidth = document.getElementById('imgWidth').value;
    const newHeight = document.getElementById('imgHeight').value;

    if (window.currentImage) {
        window.currentImage.style.width = newWidth + 'px';
        window.currentImage.style.height = newHeight + 'px';
    }
}


function footerContent() {
    let footerText = `
    <div class="footer">
        <p>SiteBy#</p>

    </div>
    `;
    const footer = document.getElementById('footer');
    const selection = window.getSelection();
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    if (range) {
        range.deleteContents();
        range.insertNode(new DOMParser().parseFromString(footerText, 'text/html').body.firstChild);
    } else {
        footer.innerHTML += footerText;
    }
    const cardContainer = document.getElementById('card-container');


}