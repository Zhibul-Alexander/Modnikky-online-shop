import React, {useEffect, useState} from 'react';
import {
  SCREEN_TYPES,
  WindowScreenType,
} from './WindowScreenType/WindowScreenType';

let timeoutId: NodeJS.Timeout;

export const useScreenSizeHook = () => {
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          setWindowDimensions(getWindowDimensions());
        }, 1000);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  if (!hasWindow) {
    return {
      screenType: SCREEN_TYPES.DESKTOP,
    };
  }

  const screenType: SCREEN_TYPES = WindowScreenType(
    windowDimensions.width,
    windowDimensions.height,
  );

  return {
    width: windowDimensions.width,
    height: windowDimensions.height,
    screenType,
  };
};
