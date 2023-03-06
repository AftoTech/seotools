import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './screens/homepage';
import TextEditorTools from './screens/Texeditortools';
import WordsCounter from './screens/wordcounter/wordscouter';
import Md5Generator from './screens/md5Generator/md5Generator';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/TextEditorTools" element={<TextEditorTools />} />
        <Route path="/WordsCounter" element={<WordsCounter />} />
        <Route path="/Md5Generator" element={<Md5Generator />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
