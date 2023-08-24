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
    console.log(editor);
  });
  if (editor && editor.model) {
    console.log(editor.model);
    editor.model.document.on('change:data', () => {
      console.log('The data has changed!');
    });
  }
  if (editor && editor.editing) {
    editor.editing.view.document.on(
      'enter',
      (evt, data) => {
        data.preventDefault();
        evt.stop();

        if (data.isSoft) {
          editor.execute('enter');
          editor.editing.view.scrollToTheSelection();

          return;
        }

        editor.execute('shiftEnter');
        editor.editing.view.scrollToTheSelection();
      },
      { priority: 'high' }
    );
  }
}, 7500);
