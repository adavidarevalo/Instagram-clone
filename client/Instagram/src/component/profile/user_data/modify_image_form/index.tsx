import { useContext } from 'react'
import './modify.scss'
import UpdateFile from './../../../shared/update_file'
import { userDataContext } from '../../../../context/userData'

export interface IProps {
  handleClose: () => void
}

export default function ModifyImageForm ({ handleClose }: IProps) {
  const { updateAvatar, deleteAvatar } = useContext(userDataContext)

  const onSubmitUpdate = (file: File) => {
    updateAvatar(file, handleClose)
  }

  const onSubmitDelete = () => deleteAvatar(handleClose)

  return (
    <div>
      <h3 className="p-5 font-bold text-center text-lg">Cambiar foto del perfil</h3>
      <UpdateFile onSubmit={onSubmitUpdate} content={<p className="text-sky-500 form-p">Subir foto</p>} />
      <p className="text-rose-500 form-p" onClick={onSubmitDelete}>Eliminar foto actual</p>
      <p className="font-normal form-p" onClick={handleClose}>Cancelar</p>
    </div>
  )
}
