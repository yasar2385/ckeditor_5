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
    console.log(editor.model);
    console.log(editor.editing);
  });
  if (editor && editor.model) {
    //console.log(editor.model);
    editor.model.document.on('change:data', () => {
      console.log('The data has changed!');
    });
  }
  if (editor && editor.editing) {
    console.log('editor.editing.view.document-key');
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
  } else {
    console.log(typeof editor);
  }
}, 7500);
