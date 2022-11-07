import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import Berita from './pages/Berita';
import Galeri from './pages/Galeri';
import Kontak from './pages/Kontak';
import Posts from './pages/Posts';
import TentangKita from './pages/TentangKita';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Beranda />} />
        <Route path='/tentang-kita' element={<TentangKita />} />
        <Route path='/berita' element={<Berita />} />
        <Route path='/galeri' element={<Galeri />} />
        <Route path='/kontak' element={<Kontak />} />
        <Route path='/post' element={<Posts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
