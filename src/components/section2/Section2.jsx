import "./section2.scss"

const Section2 = () => {
    return (
        <div className="section2">
            <div className="textUp">
                <h2 className="l1">KOLs, marketers, designers, developers, researchers, and traders.</h2>
                <h2 className="l2">Our members come from all types of backgrounds, and everyone is welcome.</h2>
            </div>
            <div className="imageContainer">
                <img src="./logo_Bitcoin.png" alt=""/>
            </div>
            <div className="textDown">
                <h2 className="l3-1">
                    However, to maintain the group as active and efficient as possible, we carefully evaluate every potential member through a 
                <span className="l3-2"> 
                    mandatory survey 
                </span> 
                <span className="l3-3">, 
                     maintaining a 
                </span> 
                <span className="l3-4">
                    limited group 
                </span> 
                <span className="l3-5"> 
                    of 50-150 active contributors.
                </span>
                </h2> 
            </div>
        </div>
        )
    }

export default Section2