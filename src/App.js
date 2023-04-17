import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import CreatePost from './pages/CreatePost';
import RecentView from './pages/RecentView';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/create-post' element={<CreatePost />}></Route>
            <Route path='/recent-view' element={<RecentView />}></Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>

    </div>
  );
}

export default App;
