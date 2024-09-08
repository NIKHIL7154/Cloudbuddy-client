import React from 'react'
import "./cards.css"
const CreationCard = (props) => {
    const {name,date,status,url} =props.item
    var hueValue=Math.floor(Math.random()*5000)
    console.log(hueValue);
  return (
    <div className={`cards--parent text-center h-[450px]`} style={{ filter: `hue-rotate(${hueValue}deg)` }}>
            <div className={`cards--card h-full `}>
                <div className="cards--content-box">
                    <h1 className="cards--card-title">{name}</h1>
                    <p className="cards--card-content !text-lg break-words !text-[#0aed19]">
                        
                        Status: {status?"Active":""}<br>
                        </br>
                        URL : {url}<br></br>
                        Id : {url.split("/")[3]}

                    </p>
                    <button onClick={()=>{window.open(url,"_blank")}} className="cards--see-more !text-lg">Visit Now</button>
                </div>
                <div className="cards--date-box">
                    <span className="cards--month">{date.split(" ")[1]}</span>
                    <span className="cards--date">{date.split(" ")[0]}</span>
                </div>
            </div>
        </div>
  )
}

export default CreationCard
