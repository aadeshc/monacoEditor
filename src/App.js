import logo from './logo.svg';
import './App.css';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import Multi from './MultiFileEditor';
import Simple from './SimpleEditor';

function App() {
  return (
    <div className="App">
 {/* <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />; */}
 

 <Multi/>
 <Simple/>
    </div>
  );
}

export default App;
