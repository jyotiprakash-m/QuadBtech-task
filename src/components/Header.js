import React from 'react'
import Timer from './Timer'
function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <div className="header__logoImg">
                    <img src="./logo.png" alt="" />
                </div>
                <div className="header__logoText">
                    <p><span className="left">Powered by</span><span className="right">Finstreet</span></p>
                </div>
            </div>
            <div className="header__options">
                <div className="header__option">
                    <select>
                        <option value="INR">INR</option>
                    </select>
                </div>
                <div className="header__option">
                    <select>
                        <option value="INR">BTC</option>
                        <option value="INR">ETH</option>
                        <option value="INR">USDT</option>
                        <option value="INR">XRP</option>
                    </select>
                </div>
                <div className="header__option">
                    <p>BUY BTS</p>
                </div>
            </div>
            <div className="header__connect">
                <Timer />
                <div className="header__telegram">
                    <img src="./icons/telegram.png" />
                    <p>Connect Telegram</p>
                </div>
                <div className="header__toggleSwitch">
                    <label className="switch">
                        <input type="checkbox" checked />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Header
