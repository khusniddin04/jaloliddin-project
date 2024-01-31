import React from 'react'
import rasm1 from '../imajes/image 9.png'
import rasm2 from '../imajes/portrait-serious-curly-haired-woman-wears-spectacles-sas-has-bad-eyesight-looks-directly-camera-dressed-leather-jacket-poses-against-brown-background-people-facial-expressions-style 1.png'
import rasm3 from '../imajes/img__fon.png'
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';import React, {  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
function Swiper3() {
  return (
 <section>
  <div className="gallary__grid">

<div className="gallary__img">
<Swiper
onSwiper={setThumbsSwiper}
spaceBetween={10}
slidesPerView={4}
freeMode={true}
direction="vertical"
watchSlidesProgress={true}
modules={[FreeMode, Navigation, Thumbs]}
className="mySwiper"
>
<SwiperSlide >
<img id='qw' src={rasm1} alt="a" />
</SwiperSlide>
<SwiperSlide>
<img id='qw' src={rasm1} alt="a" />
</SwiperSlide>
<SwiperSlide>
<img  id='qwe' src={rasm2} alt="a" />
</SwiperSlide>
<SwiperSlide>
<img id='qwe' src={rasm3} alt="a" />
</SwiperSlide>

</Swiper>
<Swiper 
spaceBetween={10}
thumbs={{ swiper: 
thumbsSwiper && ! thumbsSwiper.destroyed ? thumbsSwiper : null,
}}
modules={[FreeMode,  Thumbs]}
className="mySwiper2"
>
<SwiperSlide>
<img src={rasm1} alt="a" />
</SwiperSlide>
<SwiperSlide>
<img src={rasm1} alt="a" />
</SwiperSlide>
<SwiperSlide>
<img src={rasm1} alt="a" />
</SwiperSlide>
<SwiperSlide>
<img src={rasm1} alt="a" /> 
</SwiperSlide>
</Swiper>
</div></div>
 </section>
  )
}

export default Swiper3