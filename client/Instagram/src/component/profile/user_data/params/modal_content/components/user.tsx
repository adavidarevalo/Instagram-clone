import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItem from '@mui/material/ListItem'

export default function UserComponent ({ data, title, button }: any) {
  const { userName, avatar, description } = data
  return (
    <ListItem>
    <ListItemAvatar>
        <Avatar alt={userName} src={avatar} />
    </ListItemAvatar>
    <Stack className="w-full" spacing={2} direction="row" justifyContent="space-between">
        <ListItemText primary={title} secondary={description} />
        <Button variant="text">{button}</Button>
    </Stack>
</ListItem>
  )
}
