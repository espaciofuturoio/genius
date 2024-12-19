import { SvgSnowForestRender } from './svg_snow_forest_render'
import { ActivityIndicator } from 'react-native'
import { Box } from '@/components/ui/box'
import { SkiaOverlay } from '@/components/skia/skia_overlay'
import { Text } from '@/components/ui/text'
import useEffectOnce from 'react-use/lib/useEffectOnce'
import { SnowFlake } from './svg_snow_forest_render/snowflake'
import { BodyTypes } from './matterjs/constants'
import { useWindowDimensions } from '@/hooks/use-window-dimensions'
import { BaseSkiaCanvas } from '@/components/skia'
import { useSnowForest } from './matterjs'
import { Suspense } from 'react'
import { DemoSkiaOverlay } from './overlay'

const SkiaSnowForestCanvas = ({ children }: { children?: React.ReactNode }) => {
  const { panHandlers, updateEngine, engine, addSnowflake } = useSnowForest()
  const { width: SCREEN_WIDTH } = useWindowDimensions()

  useEffectOnce(() => {
    const interval = setInterval(() => {
      addSnowflake(Math.random() * SCREEN_WIDTH, 0)
    }, 1000)
    return () => clearInterval(interval)
  })

  const renderBodies = () => (
    <>
      {engine.world.bodies
        .filter((body) => body.label === BodyTypes.Snowflake)
        .map((body) => {
          return <SnowFlake key={body.id} cx={body.position.x} cy={body.position.y} r={body.circleRadius ?? 0} />
        })}
    </>
  )

  return (
    <BaseSkiaCanvas updateEngine={updateEngine} panHandlers={panHandlers} renderBodies={renderBodies} engine={engine}>
      {children}
    </BaseSkiaCanvas>
  )
}

const SkiaSnowForest = () => {
  return (
    <>
      <SvgSnowForestRender />
      <Suspense
        fallback={
          <Box className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" />
          </Box>
        }
      >
        <SkiaSnowForestCanvas>
          <SkiaOverlay>
            <DemoSkiaOverlay />
          </SkiaOverlay>
        </SkiaSnowForestCanvas>
      </Suspense>
    </>
  )
}

export default SkiaSnowForest

