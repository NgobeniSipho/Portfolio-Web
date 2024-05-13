import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'

function Main() {
  return (
    <div id='mailn'>
      <img className='w-full h-screen object-cover object-left scael-x-[-1]' src="https://assets-global.website-files.com/5e0ac69bad6badc677c5db21/60c030214d19547a7c6e74e9_n2Ai81S_aciRuuCqe7oCiQ5a1sVM5lekh6ZzHgACdLaF-h7HbkrlNSn_McFL9DASwsZGEspjN0edxhYfrQ64mVbWq7Jjd6qtJBOoYh6MYGc7Tmg9AtswIQfv0AZGFkihUmwlHMgJ.jpeg" alt="" />
      {/* optiotion2 img link https://assets-global.website-files.com/5e0ac69bad6badc677c5db21/60c030214d19547a7c6e74e9_n2Ai81S_aciRuuCqe7oCiQ5a1sVM5lekh6ZzHgACdLaF-h7HbkrlNSn_McFL9DASwsZGEspjN0edxhYfrQ64mVbWq7Jjd6qtJBOoYh6MYGc7Tmg9AtswIQfv0AZGFkihUmwlHMgJ.jpeg */}
      <div className='w-full h-screen absolute top-0 left-0'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-200'>I'm Sipho Ngobeni</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-200'>I'm a
            <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Software applications/systems developer.',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Solution provider using tech.',
                  1000,
                  'problem solver.',
                  1000,
                  'Coder!!',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft:'5px' }}
                repeat={Infinity}
                cursor={true}
              />
          </h2>

          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href="https://www.facebook.com/sipho.msika.562?mibextid=LQQJ4d"><FaFacebook className='cursor-pointer' size={20} color='white'/></a>
            <a href="https://www.instagram.com/sipho_ngobeni16?igsh=NnJ5NWdiOXk1a2lj&utm_source=qr"><FaInstagram className='cursor-pointer' size={20} color='white'/></a>
            <a href="https://www.linkedin.com/in/sipho-ngobeni-7422b5257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FaLinkedin className='cursor-pointer' size={20} color='white'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
