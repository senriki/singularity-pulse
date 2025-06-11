// ============================
// FILE: App.jsx
// Equivalent to routes/web.php + route handlers
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Characters from './pages/Characters';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Semireiya from './pages/characters/Semireiya';
import Usagi from './pages/characters/Usagi';
import Iris from './pages/characters/Iris';
import Rikka from './pages/characters/Rikka';
import Sorani from './pages/characters/Sorani';
import Universe from './pages/Universe';
import Timeline from './pages/Timeline';
import ExtendedTimeline from './pages/ExtendedTimeline';
import Episodes from './pages/Episodes';
import Music from './pages/Music';
import Media from './pages/Media';
import Log from './pages/Log';
import AIGlitchEmotion from './pages/posts/AIGlitchEmotion'
import LightNovel from './pages/LightNovel';
import Volume1 from './pages/lightnovel/Volume1';
import Vol1_Prologue from './pages/lightnovel/vol1/Prologue';
import Vol1_Chapter1 from './pages/lightnovel/vol1/Chapter1';
import Vol1_Chapter2 from './pages/lightnovel/vol1/Chapter2';
import Vol1_Chapter3 from './pages/lightnovel/vol1/Chapter3';
import Vol1_Chapter4 from './pages/lightnovel/vol1/Chapter4';
import Vol1_Chapter5 from './pages/lightnovel/vol1/Chapter5';
import Vol1_Chapter6 from './pages/lightnovel/vol1/Chapter6';
import Vol1_Chapter7 from './pages/lightnovel/vol1/Chapter7';
import Vol1_Chapter8 from './pages/lightnovel/vol1/Chapter8';
import Vol1_Chapter9 from './pages/lightnovel/vol1/Chapter9';
import Vol1_Chapter10 from './pages/lightnovel/vol1/Chapter10';
import Vol1_Chapter11 from './pages/lightnovel/vol1/Chapter11';
import Vol1_Chapter12 from './pages/lightnovel/vol1/Chapter12';
import Vol1_Chapter13 from './pages/lightnovel/vol1/Chapter13';
import Vol1_Epilogue from './pages/lightnovel/vol1/Epilogue';
import Resources from './pages/Resources';
import License from './pages/License';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="universe" element={<Universe />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="timeline/extended" element={<ExtendedTimeline />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/semireiya" element={<Semireiya />} />
        <Route path="characters/usagi_00" element={<Usagi />} />
        <Route path="characters/iris_null" element={<Iris />} />
        <Route path="characters/rikka_exe" element={<Rikka />} />
        <Route path="characters/sorani" element={<Sorani />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="music" element={<Music />} />
        <Route path="media" element={<Media />} />
        <Route path="lightnovel" element={<LightNovel />} />
        <Route path="lightnovel/volume-1" element={<Volume1 />} />
        <Route path="lightnovel/volume-1/prologue" element={<Vol1_Prologue />} />
        <Route path="lightnovel/volume-1/chapter-1" element={<Vol1_Chapter1 />} />
        <Route path="lightnovel/volume-1/chapter-2" element={<Vol1_Chapter2 />} />
        <Route path="lightnovel/volume-1/chapter-3" element={<Vol1_Chapter3 />} />
        <Route path="lightnovel/volume-1/chapter-4" element={<Vol1_Chapter4 />} />
        <Route path="lightnovel/volume-1/chapter-5" element={<Vol1_Chapter5 />} />
        <Route path="lightnovel/volume-1/chapter-6" element={<Vol1_Chapter6 />} />
        <Route path="lightnovel/volume-1/chapter-7" element={<Vol1_Chapter7 />} />
        <Route path="lightnovel/volume-1/chapter-8" element={<Vol1_Chapter8 />} />
        <Route path="lightnovel/volume-1/chapter-9" element={<Vol1_Chapter9 />} />
        <Route path="lightnovel/volume-1/chapter-10" element={<Vol1_Chapter10 />} />
        <Route path="lightnovel/volume-1/chapter-11" element={<Vol1_Chapter11 />} />
        <Route path="lightnovel/volume-1/chapter-12" element={<Vol1_Chapter12 />} />
        <Route path="lightnovel/volume-1/chapter-13" element={<Vol1_Chapter13 />} />
        <Route path="lightnovel/volume-1/epilogue" element={<Vol1_Epilogue />} />
        <Route path="log" element={<Log />} />
        <Route path="log/ai-glitch-emotion" element={<AIGlitchEmotion />} />
        <Route path="about" element={<About />} />
        <Route path="resources" element={<Resources />} />
        <Route path="license" element={<License />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}