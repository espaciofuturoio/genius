import React from 'react';
import { Text } from 'react-native';
import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

export const SkiaCanvasSnowForest = () => (
  <WithSkiaWeb
    getComponent={() => import('@/features/skia_snow_forest/canvas')}
    fallback={<Text>Loading Skia...</Text>}
  />
);

