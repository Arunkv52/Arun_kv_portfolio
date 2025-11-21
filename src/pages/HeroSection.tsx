

import BannerImg from '../../public/banner/banner-img.png'
import WaveImg from '../../public/banner/wave-icon.svg'
import MailIcon from '../../public/icons/mail-icon.svg'
import PhoneIcon from '../../public/icons/call-icon.svg'

import LinkedinIcon from '../../public/icons/linkedin-icon.svg'
import GitHubIcon from '../../public/icons/github.svg'

const HeroSection = () => {
  return (
    <>
      <div className='hero-container md:px-0 px-0 md:flex justify-between items-center gap-5 md:relative relative md:-top-35 top-0 md:right-0 right-0 bottom-0'>
        <div className='md:w-[70%] w-full md:relative relative md:top-20 top-20 md:left-30 left-0 md:px-0 px-5'>
          <h1 className='md:text-8xl text-5xl font-bold flex justify-start items-center gap-5'>
            I'm Arun{' '}
            <span>
              <img src={WaveImg} alt='' className='animate-wave' />
            </span>
          </h1>
          <h2 className='md:text-8xl text-4xl font-bold'>UI / UX Developer</h2>
          <p className='md:w-2/3 w-full md:py-8 pt-5 pb-30 md:px-0'>
            Passionate about building clean, responsive, and user-friendly web
            interfaces using modern technologies. I bring 3+ years of hands-on
            experience in crafting websites and web applications that are not
            only visually appealing but also performance-optimized and
            SEO-friendly.
          </p>
        </div>
        <div className='md:w-[30%] w-full'>
          <img src={BannerImg} alt='' className='w-full h-[70%] object-cover' />
        </div>
      </div>
      {/* Social Section */}
      <div className='social-sec md:px-30 md:flex flex justify-between items-center gap-0 md:py-0 py-10'>
        <div>
          <ul className='md:flex justify-start items-center gap-10'>
            <li className='md:text-3xl text-base md:px-0 px-5'>
              <a href="mailto:arunkbva@gmail.com" className='flex justify-start items-center gap-3 cursor-pointer'>
              <img src={MailIcon} alt='' /> arunkbva@gmail.com
              </a>
            </li>
            <li className='md:text-3xl text-base md:px-0 px-5 flex justify-start items-center gap-3 cursor-pointer'>
              <a href="tel:9659385880" className='flex justify-start items-center gap-3 cursor-pointer'>
              <img src={PhoneIcon} alt='' /> +91 96593 85880
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className='md:flex flex justify-start items-center gap-5 md:px-0 px-5 md:py-0 py-3'>
            <li className='text-3xl cursor-pointer'>
              <a href='https://github.com/Arunkv52'>
              <img src={GitHubIcon} alt='' />
              </a>
            </li>
            <li className='text-3xl cursor-pointer'>
              <a href='https://www.linkedin.com/in/arun-kbva-kv12/'>
                <img src={LinkedinIcon} alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default HeroSection
