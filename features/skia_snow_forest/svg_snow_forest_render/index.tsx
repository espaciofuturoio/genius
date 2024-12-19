import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Svg, { Rect } from 'react-native-svg'
import { TreeLine } from './tree_line'
import { Grass } from './grass'
import randomPallette from './random_pallette'
import { Sun } from './sun'
import { REFERENCE_WIDTH } from '../matterjs/constants'
import { Box } from '@/components/ui/box'

const { width, height } = Dimensions.get('window')

const treeWidth = 250
const treeHeight = 344
const globalScale = 0.4
const initialY = 296.999
const grassWidth = 420
const grassHeight = 73.86

const treeScaleX = (width / treeWidth) * globalScale
const treeScaleY = (height / treeHeight) * globalScale
let treeScale = Math.min(treeScaleX, treeScaleY)

const grassScaleX = (width / grassWidth) * globalScale
const grassScaleY = (height / grassHeight) * globalScale
let grassScale = Math.min(grassScaleX, grassScaleY)

if (width < REFERENCE_WIDTH) {
  treeScale *= width / REFERENCE_WIDTH
  grassScale *= width / REFERENCE_WIDTH
}

const scaledTreeHeight = treeHeight * treeScale
const groundHeight = 20 * treeScaleY
const yGrassPosition = height - scaledTreeHeight - initialY * treeScale - groundHeight

const scaledTreeWidth = treeWidth * treeScale
const treeCount = Math.floor(width / scaledTreeWidth)

const scaledGrassWidth = grassWidth * grassScale
const grassCount = Math.ceil(width / scaledGrassWidth) * 2

export const SvgSnowForestRender = ({ color = 'black' }: { color?: string }) => {
  const pallette = randomPallette()
  console.log({ grassCount, treeCount, treeWidth, grassWidth, grassScale, treeScale })
  const treeLines = [
    { color: pallette[3], scale: 0.8 * treeScale, count: Math.floor(width / (treeWidth * 0.8 * treeScale)), id: 1 },
    { color: pallette[4], scale: treeScale, count: Math.floor(width / (treeWidth * treeScale)), id: 2 },
    { color: pallette[2], scale: 1 * treeScale, count: 2, id: 3 },
    { color: pallette[1], scale: 1.2 * treeScale, count: 1, id: 4 },
  ]
  return (
    <Box className='flex-1' style={StyleSheet.absoluteFillObject} pointerEvents="none">
      <Svg height={height} width={width} viewBox={`0 0 ${width} ${height}`}>
        <Rect width={width} height={height} fill={color} />
        <Rect y={height - groundHeight} width={width} height={groundHeight} fill={pallette[0]} />
        <Sun pallette={pallette} width={width} height={height} />
        {/* {range(5)
        .filter(() => random() < 0.75)
        .map((i) => (
          // <Bird color={pallette[4]} key={i} />
          <Rect key={i} width={10} height={10} fill={pallette[4]} />
        ))} */}
        {treeLines.map((line) => {
          const scaledTreeHeight = treeHeight * line.scale
          const yPosition = height - scaledTreeHeight - initialY * line.scale - groundHeight
          console.log('Tree y position:', yPosition)
          return (
            <TreeLine
              key={line.id}
              color={line.color}
              scale={line.scale}
              count={line.count}
              y={yPosition}
              treeWidth={treeWidth}
            />
          )
        })}
        <Grass color={pallette[0]} scale={treeScale} y={yGrassPosition} count={grassCount} grassWidth={grassWidth} />
      </Svg>
    </Box>
  )
}
