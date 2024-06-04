import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info"
import About from "./About"
import Interest from "./Interest"
import Footer from "./Footer"

function App () {
    return (
        <div>
            <div className= "middle_section">
                <Info />
                <About />
                <Interest />
            </div>
            <Footer />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))