import React, {Suspense} from 'react';
import {Navigate, Routes, Route} from 'react-router-dom';

import {publicRoutes, requireAuth} from '../routes/routes';

import Loader from './Loader/Loader';

const AppContent = () => {

  const loader = (
    <div className="loader-container">
      <Loader size={64} borderWidth={6}/>
    </div>
  );

  return (
    <Suspense fallback={loader}>
      <Routes>
        <Route path="*" element={<Navigate to="/home"/>}/>
        {publicRoutes.map(
          (route, idx) =>
            route.element && (
              <Route key={idx} path={route.path} element={<route.element/>}/>
            ),
        )}
      </Routes>
    </Suspense>
  );
};

export default React.memo(AppContent);