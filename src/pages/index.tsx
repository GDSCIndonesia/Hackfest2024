import Image from 'next/image'
import { Inter } from 'next/font/google'
import ComingSoon from '@/components/landing/soon/ComingSoon'
import HeaderHack from '@/components/landing/header/HeaderHack'
import CountDown from '@/components/landing/countdown/CountDown'
import TimeLine from '@/components/landing/timeline/TimeLine'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <ComingSoon/> */}
      <HeaderHack/>
      <CountDown/>
      <TimeLine/>
    </>
  )
}
