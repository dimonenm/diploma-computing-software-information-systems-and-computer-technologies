import Image from 'next/image'
import logo from '../images/logo.svg'
import instagramImg from '../images/инста.png'
import vkImg from '../images/вк.png'
import viberImg from '../images/вайбер.png'
import whatsAppImg from '../images/ВА.png'
import buttonImg from '../images/Кнопка.png'
import styles from './topNavigation.module.scss'
import Link from 'next/link'

export default function TopNavigation(): JSX.Element {
  return (
    <div className={styles.main}>
      <div></div>
      <div className={styles.logo}>
        <Image src={logo} alt='КАЧЕСТВЕННЫЕ ОКНА-СИМФЕРОПОЛЬ'></Image>
      </div>
      <div className={styles.phone}>
        <div className={styles.p}>+7(925)761-16-16</div>
        <div className={styles.d}>
          Оставьте заявку на замер <br /> или получите консультацию
        </div>
      </div>
      <div className={styles.nav}>
        <div>Пластиковые окна</div>
        <div>Двери</div>
        <div>Балконы</div>
        <div>Жалюзи</div>
        <div>Рольставни</div>
        <div>О нас</div>
        <div>Контакты</div>
      </div>
      <div className={styles.social}>
        <Image src={instagramImg} alt='instagram'></Image>
        <Image src={vkImg} alt='vk'></Image>
        <Image src={viberImg} alt='viber'></Image>
        <Image src={whatsAppImg} alt='whats app'></Image>
      </div>
      <div className={styles.callback}>
        <Link href='./?modal=t'>
          <Image src={buttonImg} alt='Заказать звонок'></Image>
        </Link>
      </div>
      <div></div>
    </div>
  )
}
