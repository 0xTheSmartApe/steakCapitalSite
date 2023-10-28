// import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"


const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            {/* <Sidebar/> */}
            <div className="wrapper">
                {/* <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Steak Capital</motion.span> */}
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>
                    {/* <img src="/name.png" className = "logo" alt=""/> */}
                    <h2>STEAK CAPITAL</h2>
                </motion.span>
                <div className="social">
                    {/* <a href="https://twitter.com/SteakCapital"><img src="/X.png" alt="" /></a>
                    <a href="#"><img src="/telegram.png" alt="" /></a>
                    <a href="#"><img src="/gitbook.svg" alt="" /></a> */}
                    <a href="https://twitter.com/SteakCapital">
                        <button className="button1">
                            {/* <img src="twitter.png"/> */}
                            Twitter
                        </button>
                    </a>
                    <a href="https://steakcapital.notion.site/Steak-Capital-e5e4e08c5d9d48c993bb18ff54582444">
                        <button className="button2">
                            {/* <img src="gitbook.svg"/> */}
                            Documentation
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Navbar