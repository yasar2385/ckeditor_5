// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var editor;
setTimeout(function () {
  ClassicEditor.create(document.querySelector('#editor'))
    .then((newEditor) => {
      editor = newEditor;
    })
    .catch((error) => {
      console.error(error);
    });
  //const editorData = editor.getData();
  //console.log(editorData.length);
  // Assuming there is a <button id="submit">Submit</button> in your application.
  document.querySelector('#submit').addEventListener('click', () => {
    console.log('eeeeee');
    const editorData = editor.getData();
    console.log(editorData.length);
  });
}, 7500);
