import { useSnackbar, SnackbarMessage, VariantType } from 'notistack'

const useNotifier = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const setNotifier = (message: SnackbarMessage, type: VariantType) => {
    enqueueSnackbar(message, { variant: type })

    setTimeout(() => {
      closeSnackbar()
    }, 4000)
  }
  return { setNotifier }
}

export default useNotifier
