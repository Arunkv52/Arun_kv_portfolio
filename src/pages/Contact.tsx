import { useForm } from 'react-hook-form'

const Contact = () => {
  // Use Hook form
  type FormFields = {
    name: string
    phone: string
    email: string
    message: string
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormFields>()

  const onSubmit = (data: any) => {
    console.log('Form Data Submitted:', data)
  }

  return (
    <>
      <div className='edu-container py-10  bg-white'>
        {/* text with digits */}
        <div className='md:px-30 px-5'>
          <div className='flex justify-between items-center gap-0 border-b-2 pb-5'>
            <div>
              <h2 className='md:text-8xl text-2xl font-semibold'>Contact</h2>
            </div>
            <div>
              <p className='text-[#fe4300] text-2xl'>(07)</p>
            </div>
          </div>

          {/* icon with text */}
          <div className='py-10 md:flex justify-start items-center flex-wrap gap-5 w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-full gap-16'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-8 w-full'
              >
                {/* Name + Phone */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* Name */}
                  <div className='flex flex-col'>
                    <label className='text-gray-600 mb-2'>Name *</label>
                    <input
                      type='text'
                      {...register('name', { required: 'Name is required' })}
                      className='border-b border-gray-300 focus:outline-none focus:border-black py-2'
                    />
                    {errors.name && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className='flex flex-col'>
                    <label className='text-gray-600 mb-2'>Phone *</label>
                    <input
                      type='text'
                      {...register('phone', { required: 'Phone is required' })}
                      className='border-b border-gray-300 focus:outline-none focus:border-black py-2'
                    />
                    {errors.phone && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className='flex flex-col'>
                  <label className='text-gray-600 mb-2'>Email *</label>
                  <input
                    type='email'
                    {...register('email', { required: 'Email is required' })}
                    className='border-b border-gray-300 focus:outline-none focus:border-black py-2'
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className='flex flex-col'>
                  <label className='text-gray-600 mb-2'>Message *</label>
                  <textarea
                    rows={4}
                    {...register('message', {
                      required: 'Message is required'
                    })}
                    className='border-b border-gray-300 focus:outline-none focus:border-black py-2 resize-none'
                  ></textarea>
                  {errors.message && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <div className='relative inline-block group cursor-pointer overflow-hidden rounded-[50px] border-2 border-[#fe4300]'>
                  <div className='absolute inset-0 bg-[#fe4300] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>

                  <button
                    type='submit'
                    className='relative z-10 md:text-2xl text-[20px] md:py-5 py-4 md:px-6 px-10 hover:text-white transition-all ease-in-out cursor-pointer'
                  >
                    Send Now
                  </button>
                </div>
              </form>

              {/* Right Section */}
              <div className='md:flex flex-col justify-start items-end  text-gray-600 text-lg'>
                <div className='space-y-10'>
                  <a href='https://github.com/Arunkv52' className='block hover:text-black'>
                    Github
                  </a>
                  <a href='https://www.linkedin.com/in/arun-kbva-kv12/' className='block hover:text-black'>
                    LinkedIn
                  </a>
                </div>

                <div className='space-y-8 pt-10 text-black text-xl'>
                  <div>
                    <p className='text-gray-600 text-base'>Email</p>
                    <p className='border-b border-gray-300 inline-block pb-2'>
                      arunkbva@gmail.com
                    </p>
                  </div>

                  <div>
                    <p className='text-gray-600 text-base'>Phone</p>
                    <p className='border-b border-gray-300 inline-block pb-2'>
                      +91 96593 85880
                    </p>
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

export default Contact
