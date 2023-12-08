import Image from 'next/image'
import { Inter } from 'next/font/google'
import ComingSoon from '@/components/landing/soon/ComingSoon'
import HeaderHack from '@/components/landing/header/HeaderHack'
import CountDown from '@/components/landing/countdown/CountDown'
import TimeLine from '@/components/landing/timeline/TimeLine'
import SessionTech from '@/components/landing/session/SessionTech'
import MentorsHack from '@/components/landing/mentors/MentorsHack'
import SponsorsHack from '@/components/landing/sponsors/SponsorsHack'
import MediaPartners from '@/components/landing/mediapartners/MediaPartners'
import OrganizerHack from '@/components/landing/organizer/OrganizerHack'
import FrequentlyAsked from '@/components/landing/faq/FrequentlyAsked'
import DiscordHack from '@/components/landing/discord/DiscordHack'
import Footer from '@/components/landing/layout/Footer'
import Navbar from '@/components/landing/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <ComingSoon/> */}
      <Navbar/>
      <HeaderHack/>
      <CountDown/>
      <TimeLine/>
      <SessionTech/>
      <MentorsHack/>
      <SponsorsHack/>
      <MediaPartners/>
      <OrganizerHack/>
      <FrequentlyAsked/>
      <DiscordHack/>
      <Footer/>
    </>
  )
}
