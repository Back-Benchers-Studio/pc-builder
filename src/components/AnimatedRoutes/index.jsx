import {
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

function AnimatedRouts(){

    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} >   
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRouts;