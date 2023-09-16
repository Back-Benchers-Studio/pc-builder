import {
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import About from "../pages/About";

function AnimatedRouts(){

    const location = useLocation();

    return(
        <AnimatePresence
            initial={false}
            wait={true}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            <Routes location={location} >   
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRouts;