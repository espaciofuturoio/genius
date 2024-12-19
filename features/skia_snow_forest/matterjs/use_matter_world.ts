import { useRef } from 'react'
import { Engine, type IEngineDefinition } from 'matter-js'

export const useMatterWorld = (engineDefinition: IEngineDefinition) => {
  const engine = useRef(Engine.create(engineDefinition)).current
  return engine
}
