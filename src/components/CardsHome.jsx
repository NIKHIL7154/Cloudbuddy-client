import React from 'react'
import "./cards.css"
const CardsHome = () => {
  return (
    <div className="cards--container">
        <div className="cards--parent">
            <div className="cards--card">
                <div className="cards--content-box">
                    <h1 className="cards--card-title">Card Title</h1>
                    <p className="cards--card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <button className="cards--see-more">See More</button>
                </div>
                <div className="cards--date-box">
                    <span className="cards--month">JUNE</span>
                    <span className="cards--date">29</span>
                </div>
            </div>
        </div>

        <div className="cards--parent cards--card2">
            <div className="cards--card ">
                <div className="cards--content-box">
                    <h1 className="cards--card-title">Card Title</h1>
                    <p className="cards--card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <button className="cards--see-more">See More</button>
                </div>
                <div className="cards--date-box">
                    <span className="cards--month">JUNE</span>
                    <span className="cards--date">29</span>
                </div>
            </div>
        </div>

        <div className="cards--parent cards--card3">
            <div className="cards--card">
                <div className="cards--content-box">
                    <h1 className="cards--card-title">Card Title</h1>
                    <p className="cards--card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <button className="cards--see-more">See More</button>
                </div>
                <div className="cards--date-box">
                    <span className="cards--month">JUNE</span>
                    <span className="cards--date">29</span>
                </div>
            </div>
        </div>

        <div className="cards--parent cards--card4">
            <div className="cards--card">
                <div className="cards--content-box">
                    <h1 className="cards--card-title">Card Title</h1>
                    <p className="cards--card-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                    </p>
                    <button className="cards--see-more">See More</button>
                </div>
                <div className="cards--date-box">
                    <span className="cards--month">JUNE</span>
                    <span className="cards--date">29</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardsHome
