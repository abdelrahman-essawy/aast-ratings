import './globals.css'
import { Modal } from '@/components/Modal/Modal'
import { Footer } from '@/components/Footer/page'
import Navbar from '@/components/Navbar/page'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />


      <body className='flex flex-col justify-between items-center overflow-hidden'>
        <Modal />

        <Navbar />
        <main className='flex-1 h-auto flex- justify-center flex-wrap w-full bg-base-200'>
          {children}
        </main>
        <Footer />
      </body>
    </html>

  )
}
