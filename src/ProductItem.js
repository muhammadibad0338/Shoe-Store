import React, { useState } from "react"
import { useParams } from 'react-router-dom'
import shoe from "./shoe.json"
import './App.css';


const ProductItem = () => {
    const { id } = useParams()
    const [imgsrc, setimgsrc] = useState(shoe[id].img1)
    return (
        <>
            <h1> Product no {shoe[id].name}</h1>
            <div className="main_view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9  col-sm-12" style={{  }}>
                            <div className="row "><div className="col-lg-12  col-sm-12 col-12 img1_col" style={{ height: "300px"}}>
                                <img className="img1" src={imgsrc} alt="" />
                            </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-3 col-sm-3 col-3" style={{ cursor:"pointer" }}>
                                    <img style={{maxWidth:"100%"}} src={shoe[id].img1} onClick={()=>{
                                    setimgsrc(shoe[id].img1)
                                }} alt="" />
                                </div>
                                <div className="col-lg-3 col-sm-3 col-3" style={{  cursor:"pointer"  }}>
                                <img style={{maxWidth:"100%"}} src={shoe[id].img2} onClick={()=>{
                                    setimgsrc(shoe[id].img2)
                                }} alt="" />
                                </div>
                                <div className="col-lg-3 col-sm-3 col-3" style={{ cursor:"pointer"  }}>
                                <img style={{maxWidth:"100%"}} src={shoe[id].img3} onClick={()=>{
                                    setimgsrc(shoe[id].img3)
                                }} alt="" />
                                </div>
                                <div className="col-lg-3 col-sm-3 col-3" style={{ cursor:"pointer"   }}>
                                <img style={{maxWidth:"100%"}} src={shoe[id].img4} onClick={()=>{
                                    setimgsrc(shoe[id].img4)
                                }} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3  col-sm-12 col-12" style={{   }}>
                            <h4 className="shoe_heading">{shoe[id].name}</h4>
                            <h5 style={{ marginTop: "25px", color: "rgb(21, 39, 58)" }}>Rs.{shoe[id].price} <del style={{ color: "red", marginLeft: "10px" }}>Rs.{shoe[id].price + 350}</del></h5>
                            <hr></hr>
                            <h5 style={{marginTop:"25px",marginBottom:"25px", color:" #bc0000"}}>PRODUCT INFO</h5>
                            <p style={{marginBottom:"20px"}}>{id}</p>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductItem