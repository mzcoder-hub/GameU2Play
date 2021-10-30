import { Col, Row, Carousel } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'

const LeaderboardSlider = ({ sliderData }) => {
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props

    return (
      <div {...props} className='custom-prevArrowTourney' onClick={onClick}>
        <img src='/images/slides/prev.svg' alt='Next Slide' />
      </div>
    )
  }

  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props

    return (
      <div {...props} className='custom-nextArrowTourney' onClick={onClick}>
        <img src='/images/slides/next.svg' alt='Next Slide' />
      </div>
    )
  }
  const settings = {
    className: 'center',
    infinite: false,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
    centerPadding: '60px',
    slidesToShow: 5,
    swipeToSlide: true,
  }
  return (
    <Slider {...settings} className='rootSliderTourney'>
      {sliderData.map((slide, index) => {
        return (
          <div
            className='TeamSlider'
            key={index}
            style={{ height: '185px !important' }}
          >
            <img src={slide.image} alt='slider' key={index} />
          </div>
        )
      })}
    </Slider>
  )
}

export default LeaderboardSlider
