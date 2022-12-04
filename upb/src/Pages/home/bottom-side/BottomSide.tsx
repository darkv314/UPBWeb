import Card from "../../../components/card/Card";
import "./bottom.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import api from "../../../api/api";
import { useEffect, useState } from "react";
import CardProp from "../../../interfaces/CardProp";

export default function BottomSide() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await api.get("/homeCards");
        setCards(response.data);
      } catch (err: any) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchCards();
  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiper"
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
        {cards.map((card: CardProp) => (
          <SwiperSlide className="cardCont">
            <Card
              title={card.title}
              img={card.img}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
