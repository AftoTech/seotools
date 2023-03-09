import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './screens/homepage';
import TextEditorTools from './screens/Texeditortools';
import WordsCounter from './screens/wordcounter/wordscouter';
import Md5Generator from './screens/md5Generator/md5Generator';
import ImageToText from './screens/ImageToText/imagetoText';
import MetaTagTools from './screens/metaTagtools';
import MetaTagExtractor from './screens/metatagextractor/metatagextractor';
import MetaTagGenerator from './screens/metataggenrator/metatagegenerator';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/TextEditorTools" element={<TextEditorTools />} />
        <Route path="/WordsCounter" element={<WordsCounter />} />
        <Route path="/Md5Generator" element={<Md5Generator />} />
        <Route path="/ImageToText" element={<ImageToText />} />
        <Route path='/MetaTagTools' element={<MetaTagTools />} />
        <Route path='/MetaTagExtractor' element={<MetaTagExtractor />} />
        <Route path='/MetaTagGenerator' element={<MetaTagGenerator/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
