import { useState } from 'react'
import UpdateFile from '../../../../../shared/update_file'
import updateImage from './../../../../../../assets/images/update_image.png'
import ShowPost from './show_post'

export default function NewPost () {
  const [image, setImage] = useState<File>()
  const onSubmit = (file: File) => {
    setImage(file)
  }
  return (
    <div>
      <h3 className="text-base font-semibold text-center p-2 border-b border-inherit rounded">
        Crea una nueva publicación
      </h3>
      {image
        ? <ShowPost image={image}/>
        : (
        <UpdateFile
          content={
            <div className="h-96 w-full flex flex-col justify-center items-center">
              <img className="w-16" alt="Update Image" src={updateImage} />
              <p className="mt-5 text-xl">Arrastra las fotos y los videos aquí</p>
            </div>
          }
          onSubmit={onSubmit}
        />
          )}
    </div>
  )
}
