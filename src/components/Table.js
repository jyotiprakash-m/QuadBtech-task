import React from 'react'

function Table() {
    return (
        <div className="table">
            <table>
                <tr>
                    <th>#</th>
                    <th>Platform</th>
                    <th>Last Traded Price</th>
                    <th>Buy / Sell Price</th>
                    <th>Difference</th>
                    <th>Savings</th>
                </tr>
                <tr className="outputRow">
                    <td>1</td>
                    <td className="company"><img src="./icons/icon1.png" alt="" /><p>WazirX</p></td>
                    <td>₹ 40,41,456</td>
                    <td>₹ 40,41,715 / ₹ 40,42,42,512</td>
                    <td className="down">-0.64 %</td>
                    <td className="down">▼ ₹ 25.987</td>
                </tr>
                <tr className="outputRow">
                    <td>2</td>
                    <td className="company"><img src="./icons/icon2.png" alt="" /><p>Bitbns</p></td>
                    <td>₹ 40,41,456</td>
                    <td>₹ 40,41,715 / ₹ 40,42,42,512</td>
                    <td className="down">-0.64 %</td>
                    <td className="down">▼ ₹ 25.987</td>
                </tr>
                <tr className="outputRow">
                    <td>3</td>
                    <td className="company"><img src="./icons/icon3.png" alt="" /><p>Giotus</p></td>
                    <td>₹ 40,41,456</td>
                    <td>₹ 40,41,715 / ₹ 40,42,42,512</td>
                    <td className="up">0.64 %</td>
                    <td className="up">▲ ₹ 25.987</td>
                </tr>
                <tr className="outputRow">
                    <td>4</td>
                    <td className="company"><img src="./icons/icon4.png" alt="" /><p>Golodax</p></td>
                    <td>₹ 40,41,456</td>
                    <td>₹ 40,41,715 / ₹ 40,42,42,512</td>
                    <td className="up">0.64 %</td>
                    <td className="up">▲ ₹ 25.987</td>
                </tr>
                <tr className="outputRow">
                    <td>5</td>
                    <td className="company"><img src="./icons/icon5.png" alt="" /><p>Zebpay</p></td>
                    <td>₹ 40,41,456</td>
                    <td>₹ 40,41,715 / ₹ 40,42,42,512</td>
                    <td className="up">0.64 %</td>
                    <td className="up">▲ ₹ 25.987</td>
                </tr>
                <tr className="outputRow">
                    <td>6</td>
                    <td className="company"><img src="./icons/icon6.png" alt="" /><p>CoinDCX</p></td>
                    <td>₹ 40,41,456</td>
                    <td>₹ 40,41,715 / ₹ 40,42,42,512</td>
                    <td className="up">0.64 %</td>
                    <td className="up">▲ ₹ 25.987</td>
                </tr>
            </table>

        </div>
    )
}

export default Table
