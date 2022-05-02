import Avatar from '@mui/material/Avatar'

export default function Commentary ({ commentary }: any) {
  const {
    commentary: commentaryText,
    idUser: { userName, avatar }
  } = commentary

  return (
    <div className="flex my-3">
      <Avatar
      className="mr-2"
      alt={userName} src={avatar} />
      <div>
        <p className="text-sm"><span className="font-medium">{userName} </span>{commentaryText}</p>
      </div>
    </div>
  )
}
