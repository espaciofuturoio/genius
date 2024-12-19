import React from 'react'
import { G } from 'react-native-svg'
import { randChoice } from './utils'
import { TreePathA, TreePathB, TreePathC } from './paths'
import { Dimensions } from 'react-native'

const treePaths = [TreePathA, TreePathB, TreePathC]

type Props = {
  x?: number
  y?: number
  scale?: number
  color?: string
}

const { width, height } = Dimensions.get('window')

export const Tree = ({ x = 0, y = 0, scale = 1, color = '#7DA7D8' }: Props) => {
  const RandomTreePath = randChoice(treePaths)
  // console.log('Tree', { x, y, scale, color, width, height })
  return (
    <G transform={`translate(${x}, ${y}) scale(${scale})`} fill={color}>
      <RandomTreePath />
    </G>
  )
}
