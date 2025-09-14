import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from "../../utils/slider.json"
import "./food.css"
import { sliderSettings } from "../../utils/common";

const Food = () => {

  return (
    <section id='food' className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {
            data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className='flexColStart r-card'>
                  <img src={card.strMealThumb} alt='chicken' />
                  <span className='secondaryText r-price'>
                    <span style={{ color: "orange" }}>{card.strMeal}</span>

                  </span>
                  <span className='priparyText'>{card.strArea}</span>
                  <span className='secondaryText'>{card.strInstructions}</span>
                </div>

              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Food;

const SliderButtons = () => {
  const swiper = useSwiper()
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

