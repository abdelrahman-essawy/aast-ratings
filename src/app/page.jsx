import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Hero } from '../components/Hero/page'
import { Cards } from '../components/Cards/Cards'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero/>
      <div className='w-full m-auto py-auto bg-base-200'>
        <Cards />
      </div>

    </>
  )
}
