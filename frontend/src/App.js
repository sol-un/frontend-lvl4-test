import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { NotFoundPage } from './components/NotFoundPage';
import { MainPage } from './components/MainPage';

function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
