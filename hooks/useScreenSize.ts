import { useDimensions } from './useDimensions';

export enum ScreenSize {
  MOBILE = 0,
  TABLET = 1,
  DESKTOP = 2,
}

export function useScreenSize() {
  const { width } = useDimensions();

  if (width < 768) {
    return ScreenSize.MOBILE;
  } else if (width < 1024) {
    return ScreenSize.TABLET;
  } else {
    return ScreenSize.DESKTOP;
  }
}
