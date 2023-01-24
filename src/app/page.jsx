import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Hero } from '@/components/Hero/page'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Hero />
      {/* <label htmlFor="my-modal-6" className="btn">open modal</label> */}

    </>
  )
}
