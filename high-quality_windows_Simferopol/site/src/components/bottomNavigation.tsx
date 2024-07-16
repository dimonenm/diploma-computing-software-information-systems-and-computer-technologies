import Image from 'next/image'
import img1 from '../images/Vector.png'
import img2 from '../images/Vector (1).png'
import img3 from '../images/Vector (2).png'
import img4 from '../images/инста.png'
import img5 from '../images/вк.png'
import img6 from '../images/вайбер.png'
import img7 from '../images/ВА.png'
import img8 from '../images/Rectangle 32.png'
import img9 from '../images/партенры.png'
import styles from './bottomNavigation.module.scss'

export default function BottomNavigation(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <div className={styles.contacts}>
          <div className={styles.contactItem}>
            <Image src={img1} alt='Vector.png' width={20}></Image>
            <div>г. Симферополь, ул. Залесская</div>
          </div>
          <div className={styles.contactItem}>
            <Image src={img2} alt='Vector (1).png' width={20}></Image>
            <div>high-quality_windows@gmail.com</div>
          </div>
          <div className={styles.contactItem}>
            <Image src={img3} alt='Vector (2).png' width={20}></Image>
            <div>+7(978)555-55-55</div>
          </div>
          <div className={styles.social}>
            <Image src={img4} alt='инста' width={20}></Image>
            <Image src={img5} alt='вк' width={20}></Image>
            <Image src={img6} alt='вайбер' width={20}></Image>
            <Image src={img7} alt='ВА' width={20}></Image>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <Image src={img8} alt='dot' width={8}></Image>
            <div className={styles.text}>Окна</div>
          </div>
          <div className={styles.menuItem}>
            <Image src={img8} alt='dot' width={8}></Image>
            <div className={styles.text}>Рольставни</div>
          </div>
          <div className={styles.menuItem}>
            <Image src={img8} alt='dot' width={8}></Image>
            <div className={styles.text}>Двери</div>
          </div>
          <div className={styles.menuItem}>
            <Image src={img8} alt='dot' width={8}></Image>
            <div className={styles.text}>О нас</div>
          </div>
          <div className={styles.menuItem}>
            <Image src={img8} alt='dot' width={8}></Image>
            <div className={styles.text}>Балконы</div>
          </div>
          <div className={styles.menuItem}>
            <Image src={img8} alt='dot' width={8}></Image>
            <div className={styles.text}>Контакты</div>
          </div>
          <div className={styles.menuItem}>
            <Image src={img8} alt='dot' width={8}></Image>
            <div className={styles.text}>Жалюзи</div>
          </div>
        </div>
        <div className={styles.partners}>
          <Image src={img9} alt='partners'></Image>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.copyRight}>
        &copy; 2024 КАЧЕСТВЕННЫЕ ОКНА-СИМФЕРОПОЛЬ
      </div>
    </div>
  )
}
