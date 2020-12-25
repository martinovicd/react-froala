import React from 'react';
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";
import './App.css';

function App() {
  return (
    <FroalaEditorComponent
      tag="textarea"
      config={{
        placeholderText: 'Start typing...',
        events:{
          initialized(){
            console.log('Hello Froala!')
          }
        }
      }} />
  );
}

export default App;
