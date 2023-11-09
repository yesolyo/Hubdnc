import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { Suspense } from 'react';
import Home from './pages/Home';
import Exit from './pages/Exit';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exit" element={<Exit />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
