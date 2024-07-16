import Image from 'next/image'
import img1 from '../images/Rectangle 82.png'
import img2 from '../images/Rectangle 8 (1).png'
import img3 from '../images/Rectangle 7.png'
import img4 from '../images/Group 12.png'
import img5 from '../images/Rectangle 7 (1).png'
import img6 from '../images/Group 32.png'
import styles from './examplesOfWorks.module.scss'

export default function ExamplesOfWorks(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.examples}>
        <div className={styles.title}>Примеры работ</div>
        <div className={styles.menu}>
          <div className={styles.active}>Окна</div>
          <div>Двери</div>
          <div>Балконы</div>
          <div>Жалюзи</div>
          <div>Рольставни</div>
        </div>
        <div className={styles.imgs}>
          <Image src={img1} alt='Rectangle 82.png'></Image>
          <Image src={img2} alt='Rectangle 8 (1).png'></Image>
          <Image src={img3} alt='Rectangle 7.png'></Image>
          <Image src={img4} alt='Group 12.png'></Image>
          <Image src={img5} alt='Rectangle 7 (1).png'></Image>
          <Image src={img6} alt='Group 32.png'></Image>
        </div>
      </div>
    </div>
  )
}
