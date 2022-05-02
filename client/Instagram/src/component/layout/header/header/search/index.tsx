import * as React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import { useLazyQuery } from '@apollo/client'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { GET_SEARCH } from '../../../../../graphQL/gql/user'
import './index.scss'

export default function Search () {
  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState<any[]>([])
  const [value, setValue] = React.useState('')
  const [getSearch, { loading }] = useLazyQuery(GET_SEARCH)

  const getData = async (value: string) => {
    setValue(value)
    const data = await getSearch({
      variables: { search: value }
    })
    const { search } = data.data
    const newOptions = search.map(({ userName, avatar, name }: any) => ({
      userName,
      avatar,
      name
    }))
    setOptions(newOptions)
  }

  return (
    <Autocomplete
      className="w-full bg-gray-100 rounded"
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      options={options}
      loading={loading}
      getOptionLabel={(option) => option.userName}
      renderOption={(props, { name, userName, avatar }) => (
        <Box
        className='my-2'
        component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <Link to={`/${userName}`} className="flex">
          <Avatar
          alt={name}
          src={avatar}/>
          <div className='ml-2'>
            <p className='text-sm font-semibold'>{userName}</p>
            <p className='text-xs'>{name}</p>
          </div>
          </Link>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e) => {
            getData(e.target.value)
          }}
          value={value}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <React.Fragment>
                {!open && (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                )}
              </React.Fragment>
            ),
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {open && !loading && (
                  <div className={`${!open ? 'opacity-0' : 'opacity-60'}`}>
                    <InputAdornment
                      position="end"
                      onClick={() => {
                        setValue('')
                        setOpen(false)
                      }}
                    >
                      <IconButton>
                        <HighlightOffIcon />
                      </IconButton>
                    </InputAdornment>
                  </div>
                )}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  )
}
