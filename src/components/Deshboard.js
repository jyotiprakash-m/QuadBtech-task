import React from 'react'

function Deshboard() {
    return (
        <>
            <div className="deshboard">
                <h2 className="deshboard__heading">Best Price to Trade</h2>
                <div className="deshboard__items">
                    <div className="deshboard__item">
                        <h1>0.88%</h1>
                        <h3>5 Mins</h3>
                    </div>
                    <div className="deshboard__item">
                        <h1>0.88%</h1>
                        <h3>5 Mins</h3>
                    </div>
                    <div className="deshboard__item mainItem">
                        <h1>₹38,02,269</h1>
                        <h3>Average BTC/INR net price including commission</h3>
                    </div>
                    <div className="deshboard__item">
                        <h1>0.88%</h1>
                        <h3>5 Mins</h3>
                    </div>
                    <div className="deshboard__item">
                        <h1>0.88%</h1>
                        <h3>5 Mins</h3>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Deshboard
