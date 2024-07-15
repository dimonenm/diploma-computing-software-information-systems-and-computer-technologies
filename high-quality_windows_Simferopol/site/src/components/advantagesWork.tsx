import Image from 'next/image'
import img from '../images/Rectangle 8.png'
import styles from './advantagesWork.module.scss'

export default function AdvantagesWork(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.advantages}>
        <div className={styles.desc}>
          <div className={styles.title}>Преимущества работы с нами</div>
          <div className={styles.list}>
            <div className={styles.card}>
              <div className={styles.numb}>01.</div>
              <div className={styles.text}>Высокое качество</div>
            </div>
            <div className={styles.card}>
              <div className={styles.numb}>02.</div>
              <div className={styles.text}>Современные технологии</div>
            </div>
            <div className={styles.card}>
              <div className={styles.numb}>03.</div>
              <div className={styles.text}>Широкий ассортимент</div>
            </div>
            <div className={styles.card}>
              <div className={styles.numb}>04.</div>
              <div className={styles.text}>Нестандартные размеры</div>
            </div>
            <div className={styles.card}>
              <div className={styles.numb}>05.</div>
              <div className={styles.text}>Гарантия качества</div>
            </div>
            <div className={styles.card}>
              <div className={styles.numb}>06.</div>
              <div className={styles.text}>Точные сроки выполнения</div>
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <Image src={img} alt='Rectangle 8.png'></Image>
        </div>
      </div>
    </div>
  )
}
