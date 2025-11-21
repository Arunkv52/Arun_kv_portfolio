
const Education = () => {
  interface EducationItem {
    year: string
    college: string
    city: string
    major: string
    desc:string
  }

  const EducationData: EducationItem[] = [
    {
      year: '2014 - 2018',
      college: 'Builders Engineering College',
      city: 'Nathakadaiyur',
      major: 'B.E., (CSE)',
      desc: 'Gained a strong foundation in computer science principles, including programming, data structures, databases, operating systems, and software development. Worked on academic projects, enhanced problem-solving skills, and built hands-on experience in coding and web technologies. Actively participated in technical activities, workshops, and team projects that strengthened my understanding of real-world software development practices.'
    }
  ]

  return (
    <>
      <div className='edu-container py-10  bg-[#f7f7f7]'>
        {/* text with digits */}
        <div className='md:px-30 px-5'>
       
          <div className='flex justify-between items-center gap-0 border-b-2 pb-5'>
            <div>
              <h2 className='md:text-8xl text-2xl font-semibold'>Education</h2>
            </div>
            <div>
              <p className='text-[#fe4300] text-2xl'>(06)</p>
            </div>
          </div>
          {/* icon with text */}
          <div className='py-10 md:flex justify-between items-center gap-5 w-full'>
            {EducationData.map(item => (
              <div className='md:grid md:grid-cols-3 md:gap-0 grid grid-cols-1 gap-10'>
                <div>
                  <h5 className='text-3xl font-semibold text-[#fe4300]'>
                    {item.year}
                  </h5>
                </div>
                
                <div>
                  <p className='md:text-4xl text-3xl pb-3'>{item.major}</p>
                  <h6 className='text-2xl font-semibold'>{item.college}</h6>
                  <p className='text-2xl font-semibold'>{item.city}</p>
                </div>
                <div>
                  <p className='text-[20px]'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Education
