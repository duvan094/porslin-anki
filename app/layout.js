import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollUpButton from '@/components/scrollUpButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porslinsmålning',
  description: 'En sida om porslinsmålning. Innehåll av Ann-Christine Duvander.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>  
        {children}
        <ScrollUpButton />
        <Footer></Footer>
      </body>
    </html>
  )
}
