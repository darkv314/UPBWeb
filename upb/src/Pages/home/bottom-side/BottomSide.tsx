import Card from "../../../components/card-home/Card"
import './bottom.css'
import cards from "../../../db/homeCard";
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';

export default function BottomSide() {
    const genCard = () => {
        let cardList = []
        for(let i=0;i<cards.length;i+=1)
            cardList.push(
            <SwiperSlide className="cardCont">
                <Card 
                title={cards[i].title}
                img={cards[i].img}
                description={cards[i].description}/>
                {/* <Card 
                title={cards[i+1].title}
                img={cards[i+1].img}
                description={cards[i+1].description}/> */}
            </SwiperSlide>)
        return cardList
    }
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className='swiper'
                slidesPerView={5}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    720: {
                        slidesPerView: 3,
                    },
                    1180: {
                        slidesPerView: 5,
                    },
                  }}
            >
                {genCard()}
            </Swiper>
        </>
    )
}