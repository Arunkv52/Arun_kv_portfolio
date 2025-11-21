import Isuzu from '../../public/work/isuzu.jpg'
import Work1 from '../../public/work/Prism-site.jpg'
import Work2 from '../../public/work/dashboard.jpg'
import Work3 from '../../public/work/lehaza.jpg'
import Work4 from '../../public/work/natalia.jpg'
import Work5 from '../../public/work/netflix.jpg'
import Work6 from '../../public/work/prism-brand.jpg'
import Work7 from '../../public/work/weather.jpg'
import Work8 from '../../public/work/youtube-clone.jpg'

import RightArrow from '../../public/icons/right-arrow-icon.svg'

const LatestWork = () => {
  interface LatestProj {
    image: string
    title: string
    client: string
    imagearrow: string
    link: string
  }

  const LatestWorks: LatestProj[] = [
    {
      image: Isuzu,
      title: 'Web Design & Development',
      client: 'Isuzu India Pvt Ltd',
      imagearrow: RightArrow,
      link: 'https://www.isuzu.in/'
    },
    {
      image: Work2,
      title: 'Web Application Development',
      client: 'Prism Adverto Pvt Ltd',
      imagearrow: RightArrow,
      link: 'https://admin.prismadverto.in/'
    },

    {
      image: Work3,
      title: 'wooCommerce Development',
      client: 'Lehaza Fashions',
      imagearrow: RightArrow,
      link: 'https://lehazafashions.com/'
    },
    {
      image: Work4,
      title: 'Shopify Development',
      client: 'Natalia Livingston',
      imagearrow: RightArrow,
      link: 'https://natalialivingston.in/'
    },
    {
      image: Work1,
      title: 'Web Design & Development',
      client: 'Prism Adverto Pvt Ltd',
      imagearrow: RightArrow,
      link: 'https://prismadverto.in/'
    },
    {
      image: Work6,
      title: 'Website Development',
      client: 'Prism Brand Promotions',
      imagearrow: RightArrow,
      link: 'https://hoardings-eight.vercel.app/'
    },
    {
      image: Work5,
      title: 'Netflix Clone',
      client: 'Educational Purpose',
      imagearrow: RightArrow,
      link: 'https://netflix-clone-beta-lyart.vercel.app/'
    },
    {
      image: Work7,
      title: 'Weather Applications',
      client: 'Educational Purpose',
      imagearrow: RightArrow,
      link: 'https://weather-app-coral-nine-27.vercel.app/'
    },
    
    {
      image: Work8,
      title: 'Youtube Clone',
      client: 'Educational Purpose',
      imagearrow: RightArrow,
      link: 'https://youtube-clone-app-flax.vercel.app/'
    }
  ]
  return (
    <>
      <div className='edu-container py-10  bg-[#eae8e8]'>
        {/* text with digits */}
        <div className='md:px-30 px-5'>
          <div className='flex justify-between items-center gap-0 border-b-2 pb-5'>
            <div>
              <h2 className='md:text-8xl text-2xl font-semibold'>Latest Works</h2>
            </div>
            <div>
              <p className='text-[#fe4300] text-2xl'>(05)</p>
            </div>
          </div>
          {/* icon with text */}
          <div className='py-10'>
            <div className='work-item md:grid md:grid-cols-2 grid grid-cols-1  gap-10 w-full'>
              {LatestWorks.map((item: any, index: any) => (
                <div className='group relative' key={index}>
                  <a href={item.link}>
                    <div>
                      <img
                        src={item.image}
                        alt=''
                        className='rounded-[10px] w-full cursor-pointer'
                      />

                      <div className='flex justify-between items-center gap-0'>
                        <div className='pt-5'>
                          <h6 className='text-3xl font-semibold'>
                            {item.title}
                          </h6>
                          <p className='text-black/50 py-2'>
                            Client: {item.client}
                          </p>
                        </div>
                        <div>
                          <img src={item.imagearrow} alt='' />
                        </div>
                      </div>
                    </div>

                    {/* Hover element */}
                    <div className='hidden group-hover:block absolute top-50 right-70 -rotate-45 bg-[#fe4300] p-4 rounded-[50px]'>
                      <img src={item.imagearrow} alt='' />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestWork
