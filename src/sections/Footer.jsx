import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='flex gap-3 justify-center md:items-start md:mr-90'>
                    <a href="#hero" className='w-7 md:w-10'>
                        <img className='w-full' src="/images/Favicon.png" alt="" />
                    </a>
                    <a href="https://github.com/harshitxrajput" target='_blank' className='w-7 md:w-10'>
                        <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6DXuvit57V1DmjnlLcwst4O-sTL5D37gIQ&s" alt="" />
                    </a>
                </div>

                <div className='socials'>
                    {
                        socialImgs.map((img) => (
                            <a href={img.url} className='icon' target='_blank' key={img.url}>
                                <img src={img.imgPath} alt="" />
                            </a>
                        ))
                    }
                </div>

                <div className='flex flex-col justify-center'>
                    <p className='text-center md:text-end'>&copy; {new Date().getFullYear()} | Harshit Rajput | All Rights Reserved.</p>
                </div>
            </div>
        </footer>
  )
}

export default Footer
