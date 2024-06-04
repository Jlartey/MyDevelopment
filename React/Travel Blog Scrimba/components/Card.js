import React from "react"

export default function Card (props) {
    // console.log(props.item)
    return (
        <div className="card">
            <img src = {props.imageUrl} className="card-image"/>
           
        <div className="card-text"> 
        
            <div className="location">
                    <img src = "../pics/location-icon.png" className="location-icon" />
                    <p className="location-name">{props.location}</p>
                    <p className="location-text">View on google maps</p>
            </div>
            
                <h2 className="card-title">{props.title}</h2>
            
            <div className="card-date">
                    <span>{props.startDate} - </span>
                    <span>{props.endDate}</span>
            </div>
                
                <p className="card-desc">{props.description}</p>
                
            </div>
        </div>
    )
}