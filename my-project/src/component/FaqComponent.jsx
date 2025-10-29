import React, { useState } from 'react'

const FaqComponent = ({text,pra}) => {
    let [faq, SetFaq]=useState(false)
    let handlefaq =()=>{
        SetFaq(!faq)
    }
  return (
<div>
        <div className='py-2 bg-white  border px-2 hover:bg-gray-200' >
  <div onClick={handlefaq} className='flex justify-between items-center cursor-pointer '>
      <h3 className='text-lg font-semibold text-gray-800' >{text}</h3>
    <div >
                  {
                    faq? <h3 className='text-lg font-bold text-gray-800'>-</h3>: <h3 className='text-lg font-bold text-gray-800'>+</h3>
                  }
                  </div>
  </div>
   
 
      {
    faq? <div className='p-4 bg-white'><p className='text-gray-600'>{pra}</p></div>:null
   }
 </div>
   


</div>
  )
}

export default FaqComponent