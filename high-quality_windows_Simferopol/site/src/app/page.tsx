import BottomNavigation from '../components/bottomNavigation'
import Certificates from '../components/certificates'
import ExamplesOfWorks from '../components/examplesOfWorks'
import ProfilesAndAccessories from '../components/profilesAndAccessories'
import AdvantagesWork from '../components/AdvantagesWork'
import Questions from '../components/questions'
import ImagesCarousel from '../components/imagesCarousel'
import TopNavigation from '../components/topNavigation'
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopNavigation />
      <ImagesCarousel />
      <ProfilesAndAccessories />
      <AdvantagesWork />
      <ExamplesOfWorks />
      <Certificates />
      <Questions />
      <BottomNavigation />
    </main>
  )
}
