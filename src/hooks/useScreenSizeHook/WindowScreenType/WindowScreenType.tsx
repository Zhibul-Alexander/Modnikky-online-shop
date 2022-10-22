export enum SCREEN_TYPES {
  DESKTOP,
  MOBILE,
}

export const WindowScreenType = (
  width: number,
  height: number,
) => {
  return (width / 120) * 100 < height
    ? SCREEN_TYPES.MOBILE
    : SCREEN_TYPES.DESKTOP;
};
