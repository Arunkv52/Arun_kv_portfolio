import Logo from '/logo/logo.svg'

const Footer = () => {
  return (
    <>
      <div className='w-full flex flex-col items-start md:mt-20 mt-0 mb-10 md:px-30 px-5'>
        <div className='w-full flex items-center justify-center gap-6'>
          <div className='flex-1 h-px bg-gray-300'></div>
          <div>
            <img src={Logo} alt='' />
          </div>

          <div className='flex-1 h-px bg-gray-300'></div>
        </div>

        <p className='text-gray-500 text-lg mt-6'>
          Developed by{' '}
          <span className='text-orange-500'>Arun kv</span>
        </p>
      </div>
    </>
  )
}

export default Footer
