import React from 'react'
import Heading from '../component/Heading'
import FaqComponent from '../component/FaqComponent'
import faq from '../Faq'

const FaqSection = () => {
  return (
    <section className='py-20 bg-colorBg'>
        <div className='container mx-auto'>
                <p className='text-primary text-center font-semibold pb-3 uppercase'>FAQs</p>
                <Heading className='text-center mb-[20px]' text='Frequently Asked Questions'/>
                <div className='flex flex-col gap-4'>
                  {
                    faq.map(item=>(
                        <FaqComponent text={item.question} pra={item.answer}/>
                    ))
                  }

                 
                </div>
        </div>
    </section>
  )
}

export default FaqSection