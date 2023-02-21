import { Inter } from '@next/font/google'
import { Hero } from '../components/Hero/page'
import { Suspense, use } from 'react'
import { Cards } from '../components/Cards/Cards'
import Spinner from '../utilities/Spinner'
const inter = Inter({ subsets: ['latin'] })

const fetcher = async (endPoint = 'https://aast-ratings.vercel.app/api/lecturer/topRated') => await fetch(endPoint, { next: { revalidate: 60 } }).then(res => res.json())

export default function Home() {

  const lecturers = use(fetcher())

  return (
    <>
      <Hero />

      <section className='pt-8 md:pb-16'>
        <h2 className='text-2xl font-bold text-center mb-8 sm:mb-14'>Top Rated Lecturers</h2>

        <Suspense fallback={<Spinner />}>
          <Cards lecturers={lecturers} hero={true} />
        </Suspense>

      </section>

    </>
  )
}
