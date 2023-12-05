import Image from 'next/image'
import { Inter } from 'next/font/google'
import ComingSoon from '@/components/landing/soon/ComingSoon'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ComingSoon/>
  )
}
