import { useState, useEffect, useCallback } from 'react';
import { Dimensions } from 'react-native';

interface WindowDimensions {
  width: number;
  height: number;
}

export function useDimensions(): WindowDimensions {
  const getDimensions = () => {
    const { width, height } = Dimensions.get('window');
    return { width, height };
  };

  const [dimensions, setDimensions] = useState<WindowDimensions>(getDimensions());

  useEffect(() => {
    const handleDimensionsChange = () => {
      setDimensions(getDimensions());
    };

    const subscription = Dimensions.addEventListener('change', handleDimensionsChange);
    return () => subscription.remove();
  }, []);

  return dimensions;
}