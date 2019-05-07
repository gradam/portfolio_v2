export function pxToRem(pixels) {
  const REM_IN_PIX = 0.0625
  return `${pixels * REM_IN_PIX}rem`
}
