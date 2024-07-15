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
            <div className={styles.title}>REHAU</div>
            <div className={styles.columns}>
              <div className={styles.firstColumn}>
                <div className={styles.card1}>
                  <div className={styles.titleCard}>REHAU BLITZ</div>
                  <div className={styles.text}>
                    Идеально подходят для рачительных покупателей и относится к
                    классу систем с монтажной глубиной 60 мм
                  </div>
                  <div className={styles.size}>60 мм</div>
                </div>
                <div className={styles.card1}>
                  <div className={styles.titleCard}>REHAU GRAZIO</div>
                  <div className={styles.text}>
                    Продукт, ориентированный на тех, кто ценит современные
                    инженерные и дизайнерские решения.
                  </div>
                  <div className={styles.size}>70 мм</div>
                </div>
                <div className={styles.card1}>
                  <div className={styles.titleCard}>REHAU INTELIO 80</div>
                  <div className={styles.text}>
                    Это система умного комфорта, которая позволит создать в доме
                    оптимальный микроклимат и понизить уровень шума
                  </div>
                  <div className={styles.size}>80 мм</div>
                </div>
                <div className={`${styles.card1} ${styles.withoutLine}`}>
                  <div className={styles.titleCard}>REHAU GENEO</div>
                  <div className={styles.text}>
                    Профиль премиум-класса. Повышенная прочность благодаря
                    включению в состав фиброволокон
                  </div>
                  <div className={styles.size}>86 мм</div>
                </div>
              </div>
              <div className={styles.secondColumn}>
                <div className={styles.card1}>
                  <div className={styles.titleCard}>REHAU THERMO</div>
                  <div className={styles.text}>
                    Эффект дополнительного энергосбережения создаёт 4-х камерное
                    строение профиля.
                  </div>
                  <div className={styles.size}>60 мм</div>
                </div>
                <div className={styles.card1}>
                  <div className={styles.titleCard}>REHAU DELIGHT</div>
                  <div className={styles.text}>
                    Системная глубина 70 мм и пять внутренних камер позволяют
                    добиться высоких значений сопротивления теплопередаче
                  </div>
                  <div className={styles.size}>70 мм</div>
                </div>
                <div className={styles.card1}>
                  <div className={styles.titleCard}>REHAU BRILLANT</div>
                  <div className={styles.text}>
                    Индивиудуальный дизайн: элегантно закругленные, мягко
                    скошенные или характерно смещенные оконные створки
                  </div>
                  <div className={styles.size}>70 мм</div>
                </div>
              </div>
              <div className={styles.button}>Подобрать окно</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
