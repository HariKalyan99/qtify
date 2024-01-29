import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import {ReactComponent as RightArrow} from '../../assets/Group 3740.svg'
import styles from './Carousel.module.css';

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsEnd(swiper.isEnd);
        })
    }, [])
  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation;


// .pill {
//   font-size: 12px;
//   background-color: var(--color-black);
//   width: max-content;
//   padding: 6px;
//   border-radius: 10px;
// }