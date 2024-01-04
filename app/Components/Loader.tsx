import {motion} from "framer-motion";
import React from "react";
import Image from "next/image";
import CardBoardEffectImage from "../../cardboard-texture.jpg"

const Loader = () => {
    const [percentage, setPercentage] = React.useState(0);
    const [ballColor, setBallColor] = React.useState("red");
    React.useEffect(() => {
        if(percentage !== 100){
            setTimeout(() => {
                setPercentage(percentage => percentage+1)
            }, 15)
        }
        if(percentage === 100) setBallColor("blue");
    }, [percentage])
    return <motion.div animate={{y: percentage === 100 ? "-100vh" : "0"}} transition={{y: {delay: 1.5, duration: 0.8, ease: [0.85, 0, 0.15, 1]}}} className={`bg-black h-screen w-screen fixed z-[5]`}>
        <Image src={CardBoardEffectImage} alt={'hello'} className={`w-full  h-full fixed z-[10] opacity-10`}/>
        <div style={{left: `${percentage}%`, width: `${percentage/2}rem`, height: `${percentage/2}rem`, backgroundColor: ballColor}} className={`bg-red-600 transition-colors duration-1000 absolute h-[20rem] w-[20rem] rounded-full blur-[200px]`}/>
        <h1 className={`fixed text-[20rem] text-white opacity-60 font-bold right-0 bottom-0`}>{percentage}%</h1>
    </motion.div>
}


export default Loader;