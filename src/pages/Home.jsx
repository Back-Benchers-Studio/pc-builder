
import Header from "../components/Header";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import pc1 from '../assets/pc1.jpg'
import pc2 from '../assets/pc2.png'
import pc3 from '../assets/pc3.png'
import pc4 from '../assets/pc4.png'



function Home(){

    const pcs = [pc1, pc2, pc3, pc4]
    
    const pcCard = pcs.map((pc) => (
        <SwiperSlide className="manga" key={pc}>
            <img src={pc} alt="pc" />
        </SwiperSlide>
    ))

    return(
        <motion.div
            initial={{width: 0}}
          animate={{width: "100%"}}
          exit={{x: window.innerWidth,transition: {duration: 0.1}}}

        className="blue"
        >
            <Header />
            <Swiper
                // install Swiper modules
                slidesPerView={1}
                loop={true}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {pcCard}
                ...
            </Swiper>
        </motion.div>
    )
}

export default Home;