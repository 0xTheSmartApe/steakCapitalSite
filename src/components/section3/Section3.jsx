import "./section3.scss"

const Section3 = () => {
    return (
        <div className="section3">
            <div className="title">
                <h2>TRUSTED BY</h2>
            </div>
            <div className="imageContainer">
                <div className="im1">
                    <img className="i1" src="/binance.png" alt =""/>
                    <h2 className="t1">BINANCE</h2>
                </div>
                <div className="im2">
                    <img className="i2" src="/bubble.png" alt =""/>
                    <h2 className="t2">BUBBLEMAPS</h2>
                </div>
                <div className="im2">
                    <img className="i2" src="/intadapp.png" alt =""/>
                    <h2 className="t2">INSTADAPP</h2>
                </div>
                <div className="im2">
                    <img className="i2" src="/lybra.png" alt =""/>
                    <h2 className="t2">LYBRA FINANCE</h2>
                </div>
                <div className="im2">
                    <img className="i2" src="/mantle.png" alt =""/>
                    <h2 className="t2">MANTLE</h2>
                </div>
                <div className="im2">
                    <img className="i2" src="/pendle.png" alt =""/>
                    <h2 className="t2">PENDLE</h2>
                </div>
                <div className="im2">
                    <img className="i2" src="/ton.png" alt =""/>
                    <h2 className="t2">TON</h2>
                </div>
                {/* <img className="i3" src="/intadapp.png" alt =""/>
                <img className="i4" src="/lybra.png" alt =""/>
                <img className="i5" src="/mantle.png" alt =""/>
                <img className="i6" src="/pendle.png" alt =""/>
                <img className="i7" src="/ton.png" alt =""/> */}
            </div>
            <div className="title2">
                <h2>TOP-NOTCH QUALITY</h2>
            </div>
            <div className="cadreContainer">
                <div className="cadre1">
                    {/* <p>VENTURE CAPITALISTS</p> */}
                    {/* <p>HEDGE FUNDS</p> */}
                    {/* <p>B2C STARTUPS</p> */}
                    {/* <p>B2B STARTUPS</p> */}
                    <p> GROWTH HACKING</p>
                    <p>MARKETING</p>
                    <p>PRODUCT DISTRIBUTION</p>
                    <p>TOKENOMICS</p>
                    {/* <span>Our collective expertise covers the entire crypto landscape.</span> */}
                </div>
                <div className="cadre">
                    <p className="p1">56M</p>
                    <p>IMPRESSIONS COMBINED</p>
                </div>
                <div className="cadre">
                    <p className="p2">100K+</p>
                    <p>FOLLOWERS COMBINED</p>
                </div>
            </div>

        </div>
        )
    }

export default Section3