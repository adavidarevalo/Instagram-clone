import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Button } from '@mui/material'
import { useMutation } from '@apollo/client'
import { UPDATE_POST } from '../../../../../../../graphQL/gql/post'
import TextField from '@mui/material/TextField'

export default function ShowPost ({ image }: { image: File }) {
  const [description, setDescription] = useState<String>('')
  const [updatePost] = useMutation<any>(UPDATE_POST)
  const handleSubmit = async () => {
    const result = await updatePost({
      variables: {
        file: image,
        description: description
      }
    })
    console.log('result ', result)
  }
  return (
    <Card>
      <CardContent>
      <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          variant="standard"
        />
      </CardContent>
      <CardMedia component="img" height="140" image={URL.createObjectURL(image)} alt={image.name} />
      <CardContent>
        <Button className="w-full" variant="outlined" onClick={handleSubmit}>
          CREAR
        </Button>
      </CardContent>
    </Card>
  )
}
