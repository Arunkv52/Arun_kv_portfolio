const Experience = () => {
  interface ExpItem {
    year: string
    role: string
    company: string
    mode: string
    description: string
  }

  const ExperienceData: ExpItem[] = [
    {
      year: 'Jun 2025 - Present',
      role: 'UI Developer',
      company: 'Prism Adverto Pvt Ltd',
      mode: 'Full time',
      description:
        'Designed, developed, and maintained responsive, scalable web applications using React.js, TypeScript, JavaScript (ES6+), HTML5, and CSS3, following modern UI/UX principles. Utilized Redux and Context API for efficient state management and integrated RESTful APIs to deliver dynamic, interactive features. Collaborated with designers and backend teams to create optimized, user-centric interfaces, while also handling domain purchases, hosting setup, and deployments through cPanel and hPanel. Implemented security measures such as firewalls, SSL, and routine server maintenance, and resolved server-side issues to ensure stability. Conducted UI testing and debugging for cross-browser compatibility and accessibility, and optimized website performance, loading speed, and SEO to improve overall user engagement.'
    },
    {
      year: 'Jan 2025 - Present',
      role: 'React Developer',
      company: 'Freelance',
      mode: 'Full time',
      description: 'As a Freelance UI Developer, I developed modern, responsive websites and web applications using React.js, TypeScript, Redux, Context Api, JavaScript, HTML, and CSS. I built reusable components, integrated REST APIs, and implemented efficient state management for dynamic and scalable UIs. I collaborated directly with clients to understand requirements, delivered customized solutions, and handled end-to-end development—including deployment, hosting setup, and performance optimization. My freelance work strengthened my problem-solving skills and ability to deliver high-quality projects independently.'
    },
     {
      year: 'Jul 2022 - Dec 2024',
      role: 'UI Developer',
      company: 'Prism Adverto Pvt Ltd',
      mode: 'Full time',
      description: 'Developed user interfaces using HTML, CSS, Bootstrap, and JavaScript while optimizing code for performance, accessibility, usability, SEO, and cross-browser compatibility. Maintained and updated existing websites to meet client requirements and engineered adaptive, mobile-friendly designs that reduced bounce rates by 40%. Integrated REST APIs to enable seamless front-end and back-end communication, delivering dynamic user experiences. Tested websites across multiple browsers and devices, provided technical support, and ensured smooth functionality. Managed hosting setups, handled website deployments, and implemented essential security measures including firewalls and encryption.'
    },
    {
      year: 'Jun 2021 – Jul 2022',
      role: 'Web & Graphic Designer',
      company: 'Binary Vectors (Self Employeed)',
      mode: 'Full time',
      description: 'Created and customized WordPress websites, themes, and plugins based on client requirements while also designing custom graphics, branding materials, and logos using Adobe Illustrator and Photoshop. Collaborated closely with clients to understand their business goals and deliver high-quality design solutions. Managed complete website project workflows, including domain purchase, hosting setup, email configuration, and payment gateway integration.'
    },
    {
      year: 'Feb 2019 to Jun 2021',
      role: 'Tele Marketing Executive',
      company: 'Justdial Pvt Ltd',
      mode: 'Full time',
      description:
        'Promoted and sold business listing services to clients across various industries. Built and maintained relationships with potential and existing customers drive sales growth.  '
    }
  ]

  return (
    <>
      <div className='exp-container py-20'>
        {/* text with digits */}
        <div className='md:px-30 px-5'>
          <div className='flex justify-between items-center gap-0 border-b-2 pb-5'>
            <div>
              <h2 className='md:text-8xl text-2xl font-semibold'>Experience</h2>
            </div>
            <div>
              <p className='text-[#fe4300] text-2xl'>(03)</p>
            </div>
          </div>
          {/* icon with text */}
          <div className='py-10'>
            {ExperienceData.map(item => (
              <div className='md:grid md:grid-cols-3 md:gap-0 grid grid-cols-1 gap-0 py-5'>
                <div>
                  <h5 className='text-3xl font-semibold text-[#fe4300]'>
                    {item.year}
                  </h5>
                </div>
                <div>
                  <h6 className='text-3xl font-semibold'>{item.role}</h6>
                  <p className='text-[20px] py-2'>{item.company}</p>
                </div>
                <div>
                  <p className="text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
