import React from "react"
const Contact = () => {
    return (
        <>
            <h1 style={{ fontFamily: "monospace", textAlign: "center", marginTop: "30px" }}>Contact us</h1>
            <div className="container">
                <div className="row">
                    <div className=" col-lg-6  col-sm-12 col-12">
                        <img style={{maxWidth:"100%",height:"autu"}} src="https://avatars2.githubusercontent.com/u/59511357?s=460&u=43f59c35927802e165fc67bd269f590f5a709002&v=4" alt="" />
                    </div>
                    <div className=" col-lg-6  col-sm-12 col-12">
                        <h4 style={{ textAlign: "center", marginTop: "20px" }}>Contact US Directly</h4>
                        <hr></hr>
                        <h5>Email Us : <span style={{ marginLeft: "20px" }}> <a href="mailto:mibad0338@gmail.com">mibad0338@gmail.com </a> </span> </h5>
                        <hr></hr>
                        <h5>Github Username : <a href="https://github.com/muhammadibad0338"> muhammadibad0338</a> </h5>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact