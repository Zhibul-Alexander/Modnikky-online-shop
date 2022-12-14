import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop/ScrollToTop';
import Loader from './components/Loader/Loader';
import DefaultLayout from './components/Layout/DefaultLayout';

import {ShoppingCartProvider} from './context/ShoppingCartContext/ShoppingCartContext';
import {HeaderProvider} from './context/HeaderContext/HeaderContext';
import {useScreenSizeHook} from './hooks/useScreenSizeHook';
import {SCREEN_TYPES} from './hooks/useScreenSizeHook/WindowScreenType/WindowScreenType';

import './index.css';
import './scss/style.scss';

declare global {
  interface Window {
    width: number | undefined;
    height: number | undefined;
    screenType: SCREEN_TYPES;
  }
}

const loading = (
  <div className="loader-container">
    <Loader size={64} borderWidth={6}/>
  </div>
);

function App() {
  const {width = 320, screenType, height = 600} = useScreenSizeHook();

  window.width = width;
  window.height = height;
  window.screenType = screenType;

  return (
    <ShoppingCartProvider>
      <HeaderProvider>
        <Router>
          <ScrollToTop/>
          <React.Suspense fallback={loading}>
            <Routes>
              <Route path="*" element={<DefaultLayout/>}/>
            </Routes>
          </React.Suspense>
        </Router>
      </HeaderProvider>
    </ShoppingCartProvider>
  );
}

export default App;
