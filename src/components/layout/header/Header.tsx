import Logo from '/logo/logo.svg'
import Resume from '../../../../public/Arun_UI_Developer.pdf'

const Header = () => {
  return (
    <>
      <div className='header-container flex justify-start items-center gap-10 md:pt-10 pt-5 md:px-30 px-5'>
        <div>
          <img src={Logo} alt='' className='md:w-[100px] w-[70px]'/>
        </div>
        <div className='relative inline-block group cursor-pointer overflow-hidden rounded-[50px] border-2 border-[#fe4300]'>
          {/* background animation */}
          <div className='absolute inset-0 bg-[#fe4300] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>

          {/* button text */}
          <button className='relative z-10 md:text-2xl text-base md:py-5 py-4 md:px-6 px-8 hover:text-white transition-all ease-in-out cursor-pointer '>
            <a href={Resume} download>
              Download PDF Resume
            </a>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
