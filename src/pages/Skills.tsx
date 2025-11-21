
const Skills = () => {
  const Language: string[] = ['HTML', 'CSS', 'javaScript']

  const Libraries: string[] = [
    'React.js',
    'TypeScript',
    'Redux',
    'Context API',
    'Bootstrap',
    'Tailwind CSS',
    'Framer Motion'
  ]

  const Tools: string[] = [
     'GitHub', 'REST API Integration', 'WordPress', 'cPanel', 'hPanel', 'Figma', 'Adobe Illustrator'
  ]

  return (
    <>
      <div className='edu-container py-10  bg-[#f7f7f7]'>
        {/* text with digits */}
        <div className='md:px-30 px-5'>
          <div className='flex justify-between items-center gap-0 border-b-2 pb-5'>
            <div>
              <h2 className='md:text-8xl text-2xl font-semibold'>Skills</h2>
            </div>
            <div>
              <p className='text-[#fe4300] text-2xl'>(04)</p>
            </div>
          </div>
          
          {/* icon with text */}
          <div className='py-5 md:flex justify-start items-center flex-wrap gap-5 w-full'>
            <div>
              <p className='text-2xl pb-3'>Languages :</p>
              <ul className='md:flex md:justify-between md:items-center flex flex-wrap justify-start items-center gap-3 md:gap-5'>
                {Language.map(item => (
                  <li className='md:text-2xl text-base bg-[#e4c2f9] md:p-6 p-2'>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='py-5 md:flex justify-start items-center flex-wrap gap-5 w-full'>
            <div>
              <p className='text-2xl pb-3'>Frameworks & Libraries :</p>
              <ul className='md:flex md:justify-between md:items-center flex flex-wrap justify-start items-center gap-3 md:gap-5'>
                {Libraries.map(item => (
                  <li className='md:text-2xl text-base bg-[#e4c2f9] md:p-6 p-2'>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='py-5 md:flex justify-start items-center flex-wrap gap-5 w-full'>
            <div>
              <p className='text-2xl pb-3'>Tools & Technologies :</p>
              <ul className='md:flex md:justify-between md:items-center flex flex-wrap justify-start items-center gap-3 md:gap-5'>
                {Tools.map(item => (
                  <li className='md:text-2xl text-base bg-[#e4c2f9] md:p-6 p-2'>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
