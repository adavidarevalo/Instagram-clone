import { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import useUserData from '../hook/use_user_data'
import InputEdit from '../component/edit_profile/input'
import ModifyImageForm from '../component/profile/user_data/modify_image_form'
import BasicModal from './../component/modal/basic'
import _ from 'lodash'

export default function EditProfile () {
  const { user, editUser } = useUserData()
  const [value, setValue] = useState<{[e: string]: string}>(user)

  useEffect(() => {
    if (Boolean(user) === true) {
      setValue(user)
    }
  }, [user])

  if (Boolean(user) === false || Boolean(value) === false) return <></>

  const { avatar, description, email, name, userName, webSite, phoneNumber, gender } = value

  const handleCahnge = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value
  }))

  const handleSubmit = () => {
    const newValues = _.cloneDeep(value)
    delete newValues.avatar
    delete newValues.__typename
    editUser(newValues)
  }
  return (
    <>
      <div className="grid grid-cols-4 gap-2 grid-rows-9 grid-flow-col p-5">
        <Avatar className="m-auto" alt={name} src={avatar} />
        <div className="row-start-1 col-start-2 col-end-5">
          <h3 className="text-xl font-normal">{userName}</h3>
          <BasicModal
            trigger={<p className="cursor-pointer text-sm font-bold text-sky-500">Cambiar Foto</p>}
            content={(handleClose) => <ModifyImageForm handleClose={handleClose} />}
          />
        </div>
        <InputEdit title="Nombre" row="2" name='name' value={name} handleCahnge={handleCahnge}/>
        <p className="row-start-3 col-start-2 col-end-5 text-xs text-slate-500 leading-none">
          Para ayudar a que las personas descubran tu cuenta, usa el nombre por el que te conoce la gente, ya sea tu
          nombre completo, apodo o nombre comercial.
        </p>

        <InputEdit title="Nombre de usuario" row="4" name='userName' value={userName} handleCahnge={handleCahnge}/>

        <InputEdit title="Sitio Web" row="7" name='webSite' value={webSite} handleCahnge={handleCahnge}/>
        <h3 className="row-start-8 text-right text-base font-semibold w-7/12 m-auto">Presentación</h3>
        <textarea
          rows={4}
          cols={50}
          className="row-start-8 col-start-2 col-end-5 px-2 py-1 border border-inherit rounded-sm outline-0"
          placeholder="Presentación"
          value={description}
          name="description"
          onChange={handleCahnge}
        ></textarea>
        <div className="row-start-9 col-start-2 col-end-5 mt-4">
          <h3 className="text-sm text-slate-500 leading-none font-medium mb-2">Información personal</h3>
          <p className="text-xs text-slate-500 leading-none">
            Proporciona tu información personal, incluso si la cuenta se usa para un negocio, una mascota, etc. Esta
            información no se incluirá en tu perfil público.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 grid-rows-9 grid-flow-col p-5">
        <InputEdit title="Correo electrónico" name='email' row="1" value={email} handleCahnge={handleCahnge}/>
        <InputEdit title="Número de teléfono" row="2" name='phoneNumber' value={phoneNumber} handleCahnge={handleCahnge}/>
        <h3 className="row-start-3 text-right text-base font-semibold w-7/12 m-auto">Genero</h3>
        <RadioGroup
          className="row-start-3 col-start-2 col-end-5 "
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="gender"
          value={gender}
          onChange={handleCahnge}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <LoadingButton
          size="small"
          onClick={handleSubmit}
        //   loading={isLoading}
          loadingIndicator="Loading..."
          variant="contained"
          className="row-start-4 col-start-1 col-end-2"
        >
          Enviar
        </LoadingButton>
        {/* <Button className="row-start-4 col-start-1 col-end-2" variant="contained" onClick={handleSubmit}>
          Enviar
        </Button> */}
        <Button className="row-start-4 col-start-2 col-end-5" variant="text">
          Inhabilitar temporalmente mi cuenta
        </Button>
      </div>
    </>
  )
}
