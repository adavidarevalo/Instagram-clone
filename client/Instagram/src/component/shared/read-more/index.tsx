import { useState } from 'react'
import './read-more.scss'

export const ReadMore = ({ text }: {text: string}) => {
  const [isReadMore, setIsReadMore] = useState<boolean>(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  return (
      <p className="text">
        {isReadMore ? text.slice(0, 50) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {text.length > 50 && (isReadMore ? '...Read More' : ' Show Less')}
        </span>
      </p>
  )
}
