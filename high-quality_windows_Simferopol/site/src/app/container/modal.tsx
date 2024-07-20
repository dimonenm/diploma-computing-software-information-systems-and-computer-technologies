import Image from 'next/image'
import Link from 'next/link'
import img from '../../images/Cros.png'
import styles from './modal.module.scss'

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Link className={styles.back} href={'./'}></Link>
      <div className={styles.main}>
        <Link className={styles.img} href={'./'}>
          <Image src={img} alt='Cros.png'></Image>
        </Link>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}
