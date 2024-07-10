import TopNavigation from '../components/topNavigation'
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopNavigation />
      <ImagesCarousel />
      <ProfilesAndAccessories />
      <ExamplesOfWorks />
      <Certificates />
      <BottomNavigation />
      <Footer/>
    </main>
  )
}
