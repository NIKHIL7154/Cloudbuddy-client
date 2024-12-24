import React from 'react'
import "./cards.css"
const CreationCard = (props) => {
    const {name,date,status,url,id,gitUrl} =props.item
    console.log(gitUrl)
    var hueValue=Math.floor(Math.random()*5000)
    console.log(hueValue);
return (
    <div className={`cards--parent h-[460px]`} style={{ filter: `hue-rotate(${hueValue}deg)` }}>
        <div className={`cards--card h-full`}>
            <div className="cards--content-box">
                <h1 className="cards--card-title text-center truncate">{name}</h1>
                <p className="cards--card-content !text-lg break-words !text-[#ffffff] truncate">
                    Status: {status ? "Active" : ""}
                </p>
                <p className="cards--card-content !text-lg break-words !text-[#ffffff] truncate">
                    URL : {url}
                </p>
                <p className="cards--card-content !text-lg break-words !text-[#ffffff] truncate">
                    Id : {id}
                </p>
                <button onClick={() => { window.open(url, "_blank") }} className="cards--see-more !text-lg ml-[25%]">Visit Now</button>
                {gitUrl != "" && <button  className=" redeploybtn mt-[0px] !text-lg ml-[25%] "> Re-Deploy</button>}
                
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
