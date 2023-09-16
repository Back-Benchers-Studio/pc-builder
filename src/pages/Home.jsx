import {Swiper,SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import {Link} from 'react-router-dom'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { motion } from "framer-motion";
import pc1 from '../assets/pc1.png'
import pc2 from '../assets/pc2.png'
import pc3 from '../assets/pc3.png'
import pc4 from '../assets/pc4.png'
import PreviewCard from "../components/previewCard";

function Home(){
    return(
        <div className="card-wrapper"

        >

        {/* <Link to={'/about'}><PreviewCard image={pc1}/></Link>
        <Link to={'/about'}><PreviewCard image={pc1}/></Link>
        <Link to={'/about'}><PreviewCard image={pc1}/></Link> */}
        {/* <PreviewCard image={pc1}/>
        <PreviewCard image={pc1}/>
        <PreviewCard image={pc1}/>
        <PreviewCard image={pc1}/> */}



        <Swiper
        modules={[Scrollbar]}
        spaceBetween={100}
        slidesPerView={5}
        loop={true}
        >
        <SwiperSlide><PreviewCard image={pc1}/></SwiperSlide>
        <SwiperSlide><PreviewCard image={pc2}/></SwiperSlide>
        <SwiperSlide><PreviewCard image={pc3}/></SwiperSlide>
        <SwiperSlide><PreviewCard image={pc4}/></SwiperSlide>
        <SwiperSlide><PreviewCard image={pc1}/></SwiperSlide>
        <SwiperSlide><PreviewCard image={pc2}/></SwiperSlide>
        <SwiperSlide><PreviewCard image={pc1}/></SwiperSlide>
        <SwiperSlide><PreviewCard image={pc2}/></SwiperSlide>
        <SwiperSlide><PreviewCard image={pc1}/></SwiperSlide>
        <SwiperSlide><PreviewCard image={pc2}/></SwiperSlide>
        </Swiper>

        
      </div>
    )
}

export default Home