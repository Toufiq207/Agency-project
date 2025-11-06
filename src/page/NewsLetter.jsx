import React from 'react'
import Heading from '../component/Heading'
import Button from '../component/Button'

const NewsLetter = () => {
  return (
    <section className='py-20 bg-white'>
        <div className='container mx-auto'>
             <Heading className='text-center mb-[20px] md:w-[600px] mx-auto' text=' Stay Updated With Our Newsletter'/>
           <p className='text-lg text-gray-600 mb-6  text-center md:w-[900px] mx-auto'>Subscribe to our newsletter to get the latest news, updates, and offers. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.</p>
        <div className='pt-[50px] flex justify-center gap-x-4'>
        <Button text="Subscribe Now"/>
        <Button text="Learn More"/>
        </div>
        </div>
    </section>
  )
}

export default NewsLetter