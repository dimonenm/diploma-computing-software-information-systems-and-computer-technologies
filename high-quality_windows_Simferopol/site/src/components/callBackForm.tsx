import Link from 'next/link'
import axios from 'axios'
import styles from './callBackForm.module.scss'

export default function CallBackForm() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Заполните форму</h3>
      <div className={styles.desc}>Наш специалист скоро свяжется с Вами</div>
      <div className={styles.name}>
        <div>Введите имя</div>
        <input id='name'></input>
      </div>
      <div className={styles.phone}>
        <div>Введите номер телефона</div>
        <input id='phone' type={'tel'}></input>
      </div>
      <Link
        href='./'
        className={styles.button}
        onClick={() => {
          const name: HTMLInputElement | null = document.querySelector('#name')
          const phone: HTMLInputElement | null =
            document.querySelector('#phone')
          if (name?.value && phone?.value) {
            axios.post('http://localhost:3001', {
              name: name.value,
              phone: phone.value,
            })
          }
        }}
      >
        Отправить
      </Link>
    </div>
  )
}
