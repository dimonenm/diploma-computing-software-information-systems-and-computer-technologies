import Image from 'next/image'
import logo from '../images/logo.svg'
import instagramImg from '../images/инста.png'
import vkImg from '../images/вк.png'
import viberImg from '../images/вайбер.png'
import whatsAppImg from '../images/ВА.png'
import buttonImg from '../images/Кнопка.png'
import styles from './topNavigation.module.scss'



export default function TopNavigation(): JSX.Element {
  console.log(styles.p)
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image src={logo} alt='КАЧЕСТВЕННЫЕ ОКНА-СИМФЕРОПОЛЬ'></Image>
      </div>
      <div className={styles.phone}>
        <div className={styles.p}>+7(925)761-16-16</div>
        <div className={styles.d}>Оставьте заявку на замер <br/> или получите консультацию</div>
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
      <div>
        <div>
          <Image src={instagramImg} alt='instagram'></Image>
        </div>
        <div>
          <Image src={vkImg} alt='vk'></Image>
        </div>
        <div>
          <Image src={viberImg} alt='viber'></Image>
        </div>
        <div>
          <Image src={whatsAppImg} alt='whats app'></Image>
        </div>
      </div>
      <div>
        <Image src={buttonImg} alt='Заказать звонок'></Image>
      </div>
    </div>
  )
}
