import { useEffect, useState } from "react"
import{motion} from 'framer-motion'
function PreviewCard({image}){
    const [active, setActive] = useState(false)
    const [cardEnter, setCardEnter] = useState(false)

    function enterPreview(){
        setCardEnter(!cardEnter)
        console.log(cardEnter)
    }


    return(
        <div
            // whileHover={{ scale: 1.7, x: -50 }}
            // initial={{ opacity: 0, width: 0 }}
            // animate={{ opacity: 1, width: "100%" }}
            // exit={{ opacity: 0,width:"150%", scale: 1.7, x: -100 }}
            // // transition={{ duration: 5 }}
            // whileHover={{ scale: 1.7, x: -200, transition: { duration: 0.3, type:"just" } }}
            onClick={()=> setActive(true)}
        
        className={`card ${active? "active" : ""}`}>
            <h1>PC #23</h1>
            <img src={image} alt="" />
            <p className="backname">PC</p>
            <div className="price-add">
                <div className="price">
                    <span>price</span>
                    <p>150$</p>
                </div>
                <button>+</button>
            </div>
        </div>
    )
}

export default PreviewCard