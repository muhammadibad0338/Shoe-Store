import React, { useState } from "react"
import Slider from './Slider'
import './App.css';

const About = () => {
    const [imgsrc, setimgsrc] = useState("https://cdn.shopify.com/s/files/1/0143/1552/0054/products/528-5031-b_1944x.jpg?v=1588362746")
    const [imsrc, setimsrc] = useState("https://cdn.shopify.com/s/files/1/0143/1552/0054/products/864-9584-c_900x.jpg?v=1602157442")
    const [igsrc, setigsrc] = useState("https://cdn.shopify.com/s/files/1/0143/1552/0054/products/861-6716-c_3024x.jpg?v=1582879780")
    return (
        <>

            <Slider />
            <div className="stylish_heading">
                <hr style={{ width: "35%" }} />
                <p>LOVED RIGHT NOW</p>
                <hr style={{ width: "35%" }} />
            </div>
            <h5 className="text_size">Live feed Revealing the PK’s most Stylish Cities</h5>

            <div className="container">
                <div className="row" style={{ maxWidth: "100%", margin: "2px" }}>
                    <div className="love_img col-lg-4  col-sm-12 img_cntnr">


                        <img className="down" src={imgsrc} onMouseOver={() => {
                            setimgsrc("https://cdn.shopify.com/s/files/1/0143/1552/0054/products/528-5031-c_2160x.jpg?v=1588362746")
                        }} onMouseOut={() => {
                            setimgsrc("https://cdn.shopify.com/s/files/1/0143/1552/0054/products/528-5031-b_1944x.jpg?v=1588362746")
                        }} />
                        <h5 className="up" style={{ textAlign: "center", marginTop: "15px", marginBottom: "50px" }}>BOUGHT FROM <br /> <span style={{ color: "Red" }}>Karachi</span></h5>
                    </div>
                    <div className="love_img col-lg-4  col-sm-12 img_cntnr">
                        <img src={imsrc} onMouseOver={() => {
                            setimsrc("https://cdn.shopify.com/s/files/1/0143/1552/0054/products/864-9584-b_1728x.jpg?v=1602157442")
                        }} onMouseOut={() => {
                            setimsrc("https://cdn.shopify.com/s/files/1/0143/1552/0054/products/864-9584-c_900x.jpg?v=1602157442")
                        }} />
                        <h5 className="up" style={{ textAlign: "center", marginTop: "15px", marginBottom: "50px" }}>BOUGHT FROM <br /><span style={{ color: "Red" }}>Islamabad</span></h5>
                    </div>
                    <div className="love_img col-lg-4  col-sm-12 img_cntnr">
                        <img src={igsrc} onMouseOver={() => {
                            setigsrc("https://cdn.shopify.com/s/files/1/0143/1552/0054/products/861-6716-b_2592x.jpg?v=1582879780")
                        }} onMouseOut={() => {
                            setigsrc("https://cdn.shopify.com/s/files/1/0143/1552/0054/products/861-6716-c_3024x.jpg?v=1582879780")
                        }} />
                        <h5 className="up" style={{ textAlign: "center", marginTop: "15px", marginBottom: "50px" }}>BOUGHT FROM <br /><span style={{ color: "Red" }}>Lahore</span></h5>
                    </div>
                </div>
            </div>
            <hr></hr>
            <h1 style={{ textAlign: "center", fontFamily: "Bradley Hand, cursive", color: "rgb(21, 39, 58)", marginBottom: "35px", marginTop: "25px" }}>HOT DEAL</h1>
            <div >


                <img className="banner_img" style={{ maxWidth: "100%" }} src="https://cdn.shopify.com/s/files/1/0143/1552/0054/files/smallbanner_1728x.png?v=1555672891" alt="" />
            </div>
        </>
    )
}
export default About;