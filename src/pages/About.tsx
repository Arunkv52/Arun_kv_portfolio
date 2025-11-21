import AboutImg from '../../public/about/about-banner-img.svg'

const About = () => {
  interface DataItem {
    digits: string
    description: string
  }

  const data: DataItem[] = [
    {
      digits: '03+',
      description: 'Years of Experience'
    },
    {
      digits: '20+',
      description: 'Happy Clients'
    },
    {
      digits: '40+',
      description: 'Projects Completed'
    }
  ]

  return (
    <>
      <div className='abt-container bg-[#f0f0f0] py-5 md:mt-30 mt-10'>
        <h1 className='md:text-[350px] text-8xl leading-5 text-white'>Resume</h1>

        {/* text with digits */}
        <div className='md:px-30 px-5'>
          <div className='flex justify-between items-center gap-0 border-b-2 pb-5'>
            <div>
              <h2 className='md:text-8xl text-2xl font-semibold'>About Me</h2>
            </div>
            <div>
              <p className='text-[#fe4300] text-2xl'>(01)</p>
            </div>
          </div>
          {/* icon with text */}
          <div className='py-10 md:flex justify-start items-center gap-0'>
            <div className='md:w-1/2 w-full'>
              <img src={AboutImg} alt='' />
            </div>
            <div className='md:w-1/2 w-full'>
              <p className='text-2xl py-2'>
                I am a passionate Front-End React Developer with 3+ years of
                experience in building responsive, user-friendly, and
                performance-driven websites and web applications. I specialize
                in React.js, Redux, Context API, JavaScript, HTML, CSS,
                Bootstrap, Tailwind CSS, and WordPress. I enjoy turning ideas
                into clean, modern, and scalable UI solutions using reusable
                components and best coding practices.
              </p>
              <p className='text-2xl py-2'>
                I have strong experience in API integration, UI/UX
                implementation, website optimization, and managing complete
                project lifecycles — including hosting, deployment, and security
                setup. I love solving problems, learning new technologies, and
                creating smooth user experiences across all devices.
              </p>
              <div className='abt-exp'>
                <div>
                  <div className='abt-exp-text md:flex justify-between items-center gap-5 py-10'>
                    {data.map(item => (
                      <div className='md:py-0 py-3'>
                        <h6 className='text-6xl font-bold'>{item.digits}</h6>
                        <p className='text-[20px]'>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
