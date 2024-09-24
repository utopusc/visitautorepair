import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";

const TestimonialOne = () => {
  const reviews = [
    {
      name: "John Doe",
      designation: "Customer",
      comment: "Visit Auto Repair provided exceptional service. My car runs smoothly and I am very satisfied with their work.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      designation: "Customer",
      comment: "From diagnostics to repairs, the team was transparent and very professional. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      designation: "Customer",
      comment: "The best auto repair shop I’ve been to. Their customer service is outstanding and they genuinely care about their customers.",
      rating: 5,
    },
  ];

  return (
    <div
      className="testimonial-area-1 overflow-hidden"
      style={{ backgroundImage: "url(assets/img/bg/testimonial-bg1-1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-thumb1">
              <img src="assets/img/testimonial/testimonial-1-1.png" alt="Fixturbo" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="space">
              <div className="title-area">
                <span className="sub-title">Clients testimonial</span>
                <h2 className="sec-title text-white">
                  Car Repair The Best <br /> Services
                </h2>
              </div>
              <div className="row global-carousel testi-slider-1">
                <Swiper
                  loop={true}
                  navigation={{
                    nextEl: ".testimonialOne-button-next",
                    prevEl: ".testimonialOne-button-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  autoplay={{ delay: 6000 }}
                  pagination={true}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    500: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 1,
                    },
                    1200: {
                      slidesPerView: 1,
                    },
                    1400: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                      <div>
                        <div className="testi-card">
                          <div className="testi-card_content">
                            <div className="testi-card-profile">
                              <div className="testi-card-profile-details">
                                <h4 className="testi-profile-title">
                                  {review.name}
                                </h4>
                                <span className="testi-profile-desig">
                                  {review.designation}
                                </span>
                              </div>
                              <div className="quote-icon">
                                <img
                                  src="assets/img/icon/quote1-1.svg"
                                  alt="Fixturbo"
                                />
                              </div>
                            </div>
                            <p className="testi-card_text">
                              {review.comment}
                            </p>
                            <div className="rating">
                              {[...Array(review.rating)].map((_, i) => (
                                <i key={i} className="fas fa-star" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="testimonialOne arrow">
                  <div className="testimonialOne-button-next testimonialOne-button">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className="testimonialOne-button-prev testimonialOne-button">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;