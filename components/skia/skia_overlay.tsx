import { Box } from '@/components/ui/box'

export const SkiaOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="flex-1" pointerEvents="box-none">
      {children}
    </Box>
  )
}