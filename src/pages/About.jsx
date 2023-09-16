import Configrator from "../components/Configrator";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div 
    initial={{ opacity: 0, width: 0 }}
    animate={{ opacity: 1, width: "100%" }}
   exit={{ opacity: 0, width: 0, scale: 1.5 }}
  //  transition={{  duration: 5 }}
    


    >
      <Configrator />
    </motion.div>
  );
}

export default About;