import Image from 'next/image'
import img1 from '../images/Group 4.png'
import img2 from '../images/Group 3.png'
import styles from './profilesAndAccessories.module.scss'

export default function ProfilesAndAccessories(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.profiles}>
        <div className={styles.title}>
          Только лучшие профили и комплектующие
        </div>
        <div className={styles.menu}>
          <div>KBE</div>
          <div className={styles.active}>REHAU</div>
        </div>
        <div className={styles.body}>
          <div className={styles.imgs}>
            <Image src={img1} alt='Group 4.png'></Image>
            <Image src={img2} alt='Group 3.png'></Image>
          </div>
          <div className={styles.sectors}>
            <div></div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
