import React from 'react'
import Heading from '../component/Heading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestimonialCart from '../component/TestimonialCart';
import Logo1 from '../assets/logo1.png'
import Logo2 from '../assets/logo2.png'
import NextArrow from '../component/NextArrow';
import PrevArrow from '../component/PrevArrow';
const Testimonial = () => {
   var settings = {
 arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
        prevArrow:<PrevArrow/>
  };

  return (
    <section className="bg-colorBg py-20">
      <div className="container mx-auto">
        <p className="text-primary text-center font-semibold pb-3 uppercase">
          Testimonials
        </p>
        <Heading className="text-center mb-[20px]" text="What Our Clients Say" />

         <Slider  {...settings}>
          <div>
                <TestimonialCart pra="CEO,Techcrop" Customer='Johan Due' letter='J' img={Logo1} text='"Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.'/>
          </div>
          <div>
                <TestimonialCart pra="Marketing lead,Bizsoft" Customer='Akbar' letter='A' img={Logo2} text='"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eum facilis, doloremque possimus maiores beatae quas, rerum cum quaerat, sunt odio ad? Officia sequi amet alias dolor natus at quod facere corrupti. Consequuntur doloribus veritatis facilis tenetur !"'/>
          </div>
          <div>
                <TestimonialCart pra="CEO,Techcrop" Customer='Toha' letter='T' img={Logo1} text='"Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.'/>
          </div>
          <div>
                <TestimonialCart pra="CEO,Techcrop" Customer='Kamal' letter='k' img={Logo2} text='"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eum facilis, doloremque possimus maiores beatae quas, rerum cum quaerat, sunt odio ad? Officia sequi amet alias dolor natus at quod facere corrupti. Consequuntur doloribus veritatis facilis tenetur !"'/>
          </div>
          <div>
                <TestimonialCart pra="CEO,Techcrop" Customer='Dola' letter='D' img={Logo1} text='"Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.'/>
          </div>
          <div>
                <TestimonialCart pra="CEO,Techcrop" Customer='Urmee' letter='U' img={Logo2} text='"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eum facilis, doloremque possimus maiores beatae quas, rerum cum quaerat, sunt odio ad? Officia sequi amet alias dolor natus at quod facere corrupti. Consequuntur doloribus veritatis facilis tenetur !"'/>
          </div>
        </Slider> 
    
      </div>
    </section>
  )
}

export default Testimonial
