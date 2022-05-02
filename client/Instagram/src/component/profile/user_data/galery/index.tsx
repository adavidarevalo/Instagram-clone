import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import BasicModal from '../../../modal/basic'
import ShowPost from './show_post'

export default function GaleryProfile ({ dataPost }: {dataPost: any}) {
  return (
    <section className="mt-10">
      <ImageList cols={3} gap={20}>
        {dataPost.getPosts.map((post: any) => (
          <BasicModal
            key={post._id}
            width={1000}
            trigger={
              <ImageListItem>
                <img
                  className="rounded-sm"
                  src={post.file }
                  alt={post._id}
                  loading="lazy"
                />
              </ImageListItem>
            }
            content={(handleClose) => <ShowPost data={post} userData={dataPost} handleClose={handleClose}/>}
          />
        ))}
      </ImageList>
    </section>
  )
}
