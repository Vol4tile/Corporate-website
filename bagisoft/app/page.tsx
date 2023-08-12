

import Pricing from './components/Pricing'
import Banner from './components/Banner'
import Team from './components/Team'
import FAQS from './components/FAQS'
import AboutUs from './components/AboutUs'
import Carts from './components/Carts'


export default function Home() {

  const firstAboutParam = {
    title: "Biz Kimiz?",
    description: "  Merhaba! Biz, web dünyasında öne çıkmak isteyen işletmeler için çözümler sunan bir web sitesi oluşturma şirketiyiz. Next.js ve Tailwind CSS gibi güçlü teknolojileri kullanarak, dijital varlığınızı en üst seviyeye taşıyoruz.",
    img: "/page.svg",
    id: 0
  }
  const secondAboutParam = {
    title: "Neden Biz?",
    description: "  Yaratıcı ve İş Odaklı Yaklaşım Müşterilerimize sadece web siteleri değil, aynı zamanda güçlü bir dijital varlık kazandırıyoruz. İhtiyaçlarınızı anlamak için özenle dinliyor, tasarım ve geliştirme süreçlerimizde yaratıcılığı iş odaklı yaklaşımla birleştiriyoruz.",
    img: "/we.svg",
    id: 1
  }
  return (
    <main className=" min-h-screen flex flex-col items-center ">
      <div className='w-[1200px] flex flex-col gap-16 '>
        <Banner />
        <Pricing />
        <Team />
        <Carts />
        <AboutUs {...firstAboutParam} />
        <AboutUs {...secondAboutParam} />
        <FAQS /></div>

    </main>
  )
}

