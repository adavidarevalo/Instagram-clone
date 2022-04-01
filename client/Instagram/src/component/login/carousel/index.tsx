import { useEffect, useState } from 'react'
import first from '../../../assets/images/login/first.png'
import second from '../../../assets/images/login/second.png'
import third from '../../../assets/images/login/third.png'
import four from '../../../assets/images/login/four.png'
import './carousel.scss'

export const carouselImages: {[key: number]: string} = {
  1: first,
  2: second,
  3: third,
  4: four
}

export default function Carousel () {
  const [image, setImage] = useState<number>(1)
  useEffect(() => {
    const changeImage = setTimeout(() => {
      setImage(prev => {
        if (prev === 4) return 1
        return prev + 1
      })
    }, 5000)
    return () => {
      clearTimeout(changeImage)
    }
  }, [image])

  return (
        <div className="carousel-login relative">
            <img
            className="absolute"
            src={carouselImages[image]} alt="Image"/>
        </div>
  )
}
