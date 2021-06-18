import { lazy } from 'react';

const Brightness = lazy(() => import('./Brightness'));

const Contrast = lazy(() => import('./Contrast'));

const Warmth = lazy(() => import('./Warmth'));

const HSL = lazy(() => import('./HSL'));

const HSV = lazy(() => import('./HSV'));

const Vignette = lazy(() => import('./Vignette'));

const Blur = lazy(() => import('./Blur'));

const Grayscale = lazy(() => import('./Grayscale'));

export {
  Brightness,
  Contrast,
  HSL,
  HSV,
  Warmth,
  Vignette,
  Blur,
  Grayscale,
}