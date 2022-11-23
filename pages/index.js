import Head from 'next/head'
import Image from 'next/image'
import HandleOrder from '../components/home/HandleOrder'
import HeroSection from '../components/home/HeroSection'
import Location from '../components/home/Location'
import Services from '../components/home/Services'
import SummaryOne from '../components/home/SummaryOne'
import WarehouseManage from '../components/home/WarehouseManage'
import AboutUs from '../components/share/AboutUs'
import Brand from '../components/share/Brand'
import BasicLayout from '../layouts/BasicLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <BasicLayout>
      <HeroSection />
      <SummaryOne />
      <Services />
      <HandleOrder />
      <WarehouseManage />
      <AboutUs />
      <Location />
      <Brand />
    </BasicLayout>
    </>
  )
}
