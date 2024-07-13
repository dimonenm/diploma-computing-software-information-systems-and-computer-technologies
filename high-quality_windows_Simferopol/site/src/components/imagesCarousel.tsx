import Image from 'next/image'
import img from '../images/Слайд 1.jpg'
import styles from './imagesCarousel.module.scss'

export default function ImagesCarousel(): JSX.Element {
  return (
    <div className={styles.main}>
      <Image
        src={img}
        alt='карусель'
        style={{
          width: '100%',
          height: 'auto',
        }}
      ></Image>
    </div>
  )
}
