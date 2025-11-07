import React from 'react'
import Heading from '../component/Heading'
import blogs from '../blog'
import BlogsCart from '../component/BlogsCart'

const Blogs = () => {
  
  return (
    <section className='py-20'>
      <div className='container mx-auto'>
 <p className="text-primary text-center font-semibold pb-3 uppercase">
          Our Blogs
        </p>
        <Heading className="text-center mb-[20px]" text="Latest Articles And Insigts" />
<div className='flex md:flex-row flex-col justify-center items-center  gap-10'>
  {
  blogs.map(item=>(
<BlogsCart img={item.image} text={item.title} cta={item.category} pra={item.description} img2={item.authorImage} name={item.authorName} dep={item.authorRole}/>
  ))
}
</div>

      </div>
    </section>
  )
}

export default Blogs