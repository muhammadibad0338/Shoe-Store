import React, {useState} from "react"

 const ImageHover = (props) =>{
    const [img,setimg] =useState(props.src.img1)
    console.log(img)
     return(
         <img style={{width:"200px"}} src={img} alt="" onMouseOver={()=>{
             setimg(props.src.img2) 
         }} onMouseOut={()=>{
             setimg(props.src.img1)
         }}/>
     )
 }
 export default ImageHover