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
import Episodes from './pages/Episodes';
import Music from './pages/Music';
import Media from './pages/Media';
import Log from './pages/Log';
import AIGlitchEmotion from './pages/posts/AIGlitchEmotion'
import LightNovel from './pages/LightNovel';
import Volume1 from './pages/lightnovel/Volume1';
import Prologue from './pages/lightnovel/chapters/Prologue';
import Chapter1 from './pages/lightnovel/chapters/Chapter1';
import Resources from './pages/Resources';
import License from './pages/License';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="universe" element={<Universe />} />
        <Route path="timeline" element={<Timeline />} />
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
        <Route path="lightnovel/volume-1/prologue" element={<Prologue />} />
        <Route path="lightnovel/volume-1/chapter-1" element={<Chapter1 />} />
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