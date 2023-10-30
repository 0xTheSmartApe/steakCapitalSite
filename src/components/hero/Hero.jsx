import "./hero.scss"
import {motion} from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        opacity: 1,
        transition: {
            repeat:Infinity,
            repeatType: "mirro",
            duration: 20,
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants} className="H2">Enjoy the flavor of alpha, It's a rare treat!</motion.h2>
                    <motion.h1 variants={textVariants} className="H1">Private group of investors & builders providing marketing, advisory, and research.</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIGVNwpKouGrWXcjpeYZWHw1cSNKt08PBmriO5z35OanIURw/viewform?usp=sf_link">
                            <motion.button className="buttonJoin" variants={textVariants}>Join Us</motion.button>
                        </a>
                        {/* <motion.button className="buttonDoc" variants={textVariants}><a href="#Contact">Contact us </a></motion.button> */}
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" className="scroll" src="/scroll.png" alt = "" />
                </motion.div>
            </div>
            {/* <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Steak Capital
            </motion.div> */}
            <div className="imageContainer">
                <img className = "steak" src="/knifes2.png" alt=""/>
            </div>
        </div>

    )
}

export default Hero