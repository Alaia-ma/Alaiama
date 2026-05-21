import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Photography1 from "../assets/photography1.png";
import Photography2 from "../assets/photography2.png";
import Photography3 from "../assets/photography3.png";
import Photography4 from "../assets/photography4.png";
import PhotoGraphy5 from "../assets/photography5.png";
import Photography6 from "../assets/photography6.png";
import style from "./photography.module.css";
const imgList = [
    {id:1, src:Photography1},
    {id:2, src:Photography2},
    {id:3, src:Photography3},
    {id:4, src:Photography4},
    {id:5, src:PhotoGraphy5},
    {id:6, src:Photography6}
]
const photograph: React.FC = () => {
    return (
        <>
            <h1 className={style.main_body_title}>摄影</h1>
            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={2}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className={style.swiper}
                >
                {imgList.map((img) => (
                    <SwiperSlide key={img.id}>
                    <img src={img.src} alt={`Photography ${img.id}`} className={style.swiper_img}/>
                    </SwiperSlide>
                ))}
                </Swiper>
        </>
        
    )
}
export default photograph;