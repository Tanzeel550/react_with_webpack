import React from "react"
import ReactDOM from "react-dom"
import "./styles/style.scss"
import img from "./img/753060.jpg"

const JSX = () => (
    <div>
        <h1>How are you?</h1>
        <h4>How you doing?</h4>
        <img src={img} alt=""/>
    </div>
)

ReactDOM.render(<JSX/>, document.getElementById("app"))
