'use client'

import CallBackForm from '../components/callBackForm'
import AdvantagesWork from '../components/AdvantagesWork'
import BottomNavigation from '../components/bottomNavigation'
import Certificates from '../components/certificates'
import ExamplesOfWorks from '../components/examplesOfWorks'
import ImagesCarousel from '../components/imagesCarousel'
import ProfilesAndAccessories from '../components/profilesAndAccessories'
import TopNavigation from '../components/topNavigation'
import Modal from './container/modal'
import styles from './page.module.scss'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const modalParam = searchParams.get('modal')

  return (
    <main className={styles.main}>
      {modalParam === 't' ? (
        <Modal>
          <CallBackForm />
        </Modal>
      ) : null}
      <TopNavigation />
      <ImagesCarousel />
      <ProfilesAndAccessories />
      <AdvantagesWork />
      <ExamplesOfWorks />
      <Certificates />
      <BottomNavigation />
    </main>
  )
}
