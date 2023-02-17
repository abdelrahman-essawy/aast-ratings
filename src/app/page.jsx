import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Hero } from '../components/Hero/page'
import { Cards } from '../components/Cards/Cards'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />

      <section className='pt-8 md:pb-16'>
        <h2 className='text-2xl font-bold text-center mb-8 sm:mb-14'>Top Rated Lecturers</h2>
        <Cards />
      </section>

    </>
  )
}
