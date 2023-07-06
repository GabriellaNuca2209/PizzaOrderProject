import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';


const Slider = () => {

    return (  
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className='swiper-wrapper'>
                    <img className='slider-img' src="/img/pizza1.jpg" alt="" />
                    <div className="content">
                        <h3>Delicious</h3>
                        <h1>Gift voucher</h1>
                        <p>Give Away to our beloved customers</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-wrapper'>
                    <img className='slider-img' src="/img/pizza2.jpg" alt="" />
                    <div className="content">
                        <h3>Steamy</h3>
                        <h1>Discounts</h1>
                        <p>Have a slice of happiness</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-wrapper'>
                    <img className='slider-img' src="/img/pizza3.jpg" alt="" />
                    <div className="content">
                        <h3>Continuing</h3>
                        <h1>Mario's Legacy</h1>
                        <p>It's a me, pizza driver!</p>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>

    );
}
 
export default Slider;