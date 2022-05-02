import NewComentary from './new_comentary'
import Description from './description'
import Commentaries from './commentaries'

export default function ShowPost ({ data, userData, handleClose }: any) {
  const { avatar, userName } = userData
  const { file, _id, description } = data
  return (
    <div className="grid grid-cols-3">
      <img
        className="rounded-sm col-span-2"
        src={file}
        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={_id}
        loading="lazy"
      />
      <div className="bg-gray-100 p-5">
        <Description userName={userName} avatar={avatar} description={description} handleClose={handleClose}/>
        <Commentaries postId={data._id}/>
        <NewComentary postId={data._id}/>
        </div>
      </div>
  )
}
