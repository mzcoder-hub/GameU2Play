import React from 'react'
import Slider from 'react-slick'

const GameSlider = ({ sliderData }) => {
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props

    return (
      <div {...props} className='custom-prevArrow' onClick={onClick}>
        <img src='/images/slides/prev.svg' alt='Next Slide' />
      </div>
    )
  }

  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props

    return (
      <div {...props} className='custom-nextArrow' onClick={onClick}>
        <img src='/images/slides/next.svg' alt='Next Slide' />
      </div>
    )
  }

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {sliderData.map((slide, index) => {
        return (
          <div key={index}>
            <img src={slide.image} alt='slider' key={index} />
            <span>{slide.title}</span>
          </div>
        )
      })}
    </Slider>
  )
}

export default GameSlider
