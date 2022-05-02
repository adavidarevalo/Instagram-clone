import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function Loading ({ styles }: {styles?: string}) {
  return (
    <Box className={`flex justify-center items-center ${styles}`}>
      <CircularProgress />
    </Box>
  )
}
