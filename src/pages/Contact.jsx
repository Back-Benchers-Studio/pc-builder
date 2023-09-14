import Header from "../components/Header";
import { motion } from "framer-motion";

function Contact(){
    return(
        <motion.div
          className="red"
          initial={{width: 0}}
          animate={{width: "100%"}}
          exit={{x: window.innerWidth,transition: {duration: 0.1}}}

        >
            <Header />
            <h1>Contact page</h1>
        </motion.div>
    )
}

export default Contact;