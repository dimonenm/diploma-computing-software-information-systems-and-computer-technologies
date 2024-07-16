import Image from 'next/image'
import img1 from '../images/Rectangle 10.png'
import img2 from '../images/Rectangle 11.png'
import img3 from '../images/Rectangle 12.png'
import img4 from '../images/Rectangle 13.png'
import styles from './certificates.module.scss'

export default function Certificates(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.certificates}>
        <div className={styles.title}>Наши сертификаты</div>
        <div className={styles.imgs}>
          <Image src={img1} alt='Rectangle 10.png'></Image>
          <Image src={img2} alt='Rectangle 11.png'></Image>
          <Image src={img3} alt='Rectangle 12.png'></Image>
          <Image src={img4} alt='Rectangle 13.png'></Image>
        </div>
      </div>
    </div>
  )
}
