import LoadingComponent from '@mui/lab/LoadingButton'

interface IButton {
  onClick: () => void,
  isLoading: boolean,
  content: string
}

export default function Button ({ onClick, isLoading, content }: IButton) {
  return (
        <LoadingComponent
            size="small"
            onClick={onClick}
            loading={isLoading}
            loadingIndicator="Loading..."
            variant="outlined"
        >
            {content}
        </LoadingComponent>
  )
}
