import React from "react"

export default function Info () {
    return (
        <div>
            <img className="profile_pic" src="./joelartey1.jpg"/>
            <div className="credentials">
                <h1 className="name">Joseph Adu</h1>
                <h3 className="work">FrontEnd Developer</h3>
                <h4 className="email">josephlarteyadu@gmail.com</h4>
            </div>
            <div className="btn">
                <button className="btn1"><img src="email_Icon.png"/>Email</button>
                <button className="btn2"><img src="linkedin.png"/>LinkedIn</button>
            </div>
        </div>
    )
}